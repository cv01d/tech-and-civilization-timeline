/* ============================================================
   THE ATLAS OF TECHNOLOGY AND CIVILIZATION
   Interactive timeline — application logic
   ============================================================ */
(function () {
  "use strict";

  const EVENTS = (window.ATLAS_EVENTS || []).slice().sort((a, b) => a.year - b.year);
  const ERAS = window.ATLAS_ERAS || [];
  const CATS = window.ATLAS_CATEGORIES || [];
  const IMAGES = window.ATLAS_IMAGES || {};
  const byId = Object.fromEntries(EVENTS.map(e => [e.id, e]));
  // An event's `cat` may be a single key or an array of keys (it can live in
  // several tabs); it is still rendered once. The first key is its primary tab.
  const catsOf = e => Array.isArray(e.cat) ? e.cat : [e.cat];
  const gsap = window.gsap;
  if (gsap && window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
  if (gsap && window.ScrollToPlugin) gsap.registerPlugin(window.ScrollToPlugin);

  const $ = sel => document.querySelector(sel);
  const el = (tag, cls, html) => { const n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };

  // ---------- image helpers ----------
  function img(title) { return title && IMAGES[title] ? IMAGES[title] : null; }
  // Resilient background setter: only paints once the image has verifiably loaded.
  // On failure, calls onFail (so we never show a broken/blank frame).
  const _imgCache = {};
  function setBg(node, url, onOk, onFail) {
    if (!url) { onFail && onFail(); return; }
    if (_imgCache[url] === "ok") { node.style.backgroundImage = `url('${url}')`; onOk && onOk(); return; }
    if (_imgCache[url] === "fail") { onFail && onFail(); return; }
    const im = new Image();
    im.onload = () => { _imgCache[url] = "ok"; node.style.backgroundImage = `url('${url}')`; onOk && onOk(); };
    im.onerror = () => { _imgCache[url] = "fail"; onFail && onFail(); };
    im.src = url;
  }
  const isLocal = u => u && u.indexOf("img/") === 0;
  function galleryFor(ev) {
    // de-duped list of {title, t, p}, preserving curated order but
    // floating already-local images first so the hero is guaranteed to load.
    // `noimg:true` on an exhibit suppresses all imagery (card + popup) while
    // keeping its wiki reference link intact.
    if (ev.noimg) return [];
    const out = [], seen = new Set();
    const push = t => { const i = img(t); if (i && i.t && !seen.has(i.t)) { seen.add(i.t); out.push({ title: t, ...i }); } };
    push(ev.wiki);
    (ev.gallery || []).forEach(push);
    const local = out.filter(g => isLocal(g.t)), remote = out.filter(g => !isLocal(g.t));
    return local.concat(remote);
  }
  function heroImageFor(ev) {
    const g = galleryFor(ev);
    return g.length ? g[0] : null;
  }
  function sourceLink(ev) {
    const i = img(ev.wiki);
    return i ? i.p : `https://en.wikipedia.org/wiki/${encodeURIComponent(ev.wiki)}`;
  }
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // One image's attribution line: subject — author · license, linked to its Commons file page.
  function creditEntry(g) {
    const src = g.f || g.p;
    const subject = src ? `<a href="${esc(src)}" target="_blank" rel="noopener">${esc(g.title)}</a>` : esc(g.title);
    const who = g.a ? esc(g.a) : "Unknown author";
    const lic = g.lu ? `<a href="${esc(g.lu)}" target="_blank" rel="noopener">${esc(g.l || "see source")}</a>` : esc(g.l || "see source");
    return `<li>${subject} — ${who} · ${lic}</li>`;
  }

  // ============================================================
  //  BUILD: era rail, filters, timeline
  // ============================================================
  const rail = $("#era-rail");
  ERAS.forEach(era => {
    const item = el("button", "rail-item");
    item.dataset.era = era.id;
    item.innerHTML = `<span class="rail-dot"></span><span class="rail-label">${era.title}</span>`;
    item.addEventListener("click", () => scrollToEra(era.id));
    rail.appendChild(item);
  });

  const filters = $("#filters");
  const activeCats = new Set();

  const allChip = el("button", "chip on", "All");
  allChip.addEventListener("click", () => { activeCats.clear(); syncChips(); applyFilter(); });
  filters.appendChild(allChip);

  // Era chips — jump links, not filters; active state driven by scroll position
  const eraRoman = ["I","II","III","IV","V","VI","VII"];
  const eraChips = [];
  ERAS.forEach((era, i) => {
    const chip = el("button", "chip chip-era", eraRoman[i] || String(era.id));
    chip.dataset.era = era.id;
    chip.title = `${era.num}: ${era.title} · ${era.range}`;
    chip.setAttribute("aria-label", `${era.num}: ${era.title}`);
    chip.addEventListener("click", () => { syncEraChips(era.id); scrollToEra(era.id); });
    filters.appendChild(chip);
    eraChips.push(chip);
  });

  // Divider between era chips and category chips
  const chipDiv = el("span", "chip-divider");
  chipDiv.setAttribute("aria-hidden", "true");
  filters.appendChild(chipDiv);

  CATS.forEach(c => {
    const chip = el("button", "chip", c.label);
    chip.dataset.cat = c.key;
    chip.addEventListener("click", () => {
      if (activeCats.has(c.key)) activeCats.delete(c.key); else activeCats.add(c.key);
      syncChips(); applyFilter();
    });
    filters.appendChild(chip);
  });
  function syncChips() {
    allChip.classList.toggle("on", activeCats.size === 0);
    filters.querySelectorAll(".chip[data-cat]").forEach(ch => ch.classList.toggle("on", activeCats.has(ch.dataset.cat)));
  }
  function syncEraChips(activeEra) {
    eraChips.forEach(ch => ch.classList.toggle("on", +ch.dataset.era === activeEra));
  }

  // ---------- timeline DOM ----------
  const atlas = $("#atlas");
  const eraHeads = {};
  let sideToggle = 0;

  ERAS.forEach(era => {
    const head = el("section", "era-head");
    head.id = `era-${era.id}`;
    head.dataset.era = era.id;
    head.innerHTML = `
      <span class="era-num">${era.num}</span>
      <h2 class="era-title">${era.title}</h2>
      <div class="era-range">${era.range}</div>
      <p class="era-blurb">${era.blurb}</p>
      <div class="era-rule"></div>`;
    atlas.appendChild(head);
    eraHeads[era.id] = head;

    EVENTS.filter(e => e.era === era.id).forEach(ev => {
      const side = (sideToggle++ % 2 === 0) ? "left" : "right";
      const row = el("article", `ev ${side}`);
      row.dataset.id = ev.id;
      row.dataset.cat = catsOf(ev).join(" ");

      const hero = heroImageFor(ev);
      const primaryCat = catsOf(ev)[0];
      const GENERAL_LABEL = window.ATLAS_GENERAL_LABEL || "History & Society";
      const catLabel = (CATS.find(c => c.key === primaryCat) || {}).label
        || (primaryCat === "general" ? GENERAL_LABEL : primaryCat);

      row.innerHTML = `
        <span class="ev-node"></span>
        <span class="ev-year">${ev.date}</span>
        <div class="ev-card${hero ? "" : " no-img"}">
          <div class="ev-thumb"></div>
          <div class="ev-meta">
            <div class="ev-cat">${catLabel}</div>
            <h3 class="ev-title">${ev.title}</h3>
            <p class="ev-sub">${ev.summary}</p>
            <div class="ev-open">Open exhibit →</div>
          </div>
        </div>`;
      const card = row.querySelector(".ev-card");
      if (hero) setBg(row.querySelector(".ev-thumb"), hero.t, null, () => card.classList.add("no-img"));
      card.addEventListener("click", () => openExhibit(ev.id));
      atlas.appendChild(row);
    });
  });

  const allRows = Array.from(atlas.querySelectorAll(".ev"));

  // ============================================================
  //  FILTERING + SEARCH
  // ============================================================
  const search = $("#search");
  const searchCount = $("#search-count");
  function applyFilter() {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    allRows.forEach(row => {
      const ev = byId[row.dataset.id];
      const catOk = activeCats.size === 0 || catsOf(ev).some(c => activeCats.has(c));
      const textOk = !q || (ev.title + " " + ev.summary + " " + ev.importance + " " + ev.date).toLowerCase().includes(q);
      const vis = catOk && textOk;
      row.classList.toggle("filtered", !vis);
      if (vis) shown++;
    });
    // hide era heads with no visible rows
    ERAS.forEach(era => {
      const any = allRows.some(r => byId[r.dataset.id].era === era.id && !r.classList.contains("filtered"));
      eraHeads[era.id].classList.toggle("filtered", !any);
    });
    if (q || activeCats.size) searchCount.textContent = `${shown} of ${EVENTS.length}`;
    else searchCount.textContent = "";
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  }
  let searchTimer;
  search.addEventListener("input", () => { clearTimeout(searchTimer); searchTimer = setTimeout(applyFilter, 140); });

  // ============================================================
  //  EXHIBIT POPUP
  // ============================================================
  const exhibit = $("#exhibit");
  const exCard = $("#exhibit-card");
  const exHeroImg = $("#exhibit-hero-img");
  const exGallery = $("#exhibit-gallery");
  let lastFocus = null;

  const IMPACT_META = {
    technology:   { ico: "⚙", label: "Impact on Technology" },
    society:      { ico: "❂", label: "Impact on Society" },
    regulation:   { ico: "§", label: "Impact on Regulation" },
    labor:        { ico: "⚒", label: "Impact on Labor" },
    government:   { ico: "⚖", label: "Impact on Government" },
    surveillance: { ico: "◎", label: "Impact on Surveillance" },
    communications:{ ico: "✉", label: "Impact on Communications" },
    computing:    { ico: "▦", label: "Impact on Computing" }
  };
  const IMPACT_ORDER = ["technology","computing","communications","surveillance","labor","society","regulation","government"];

  function openExhibit(id) {
    const ev = byId[id];
    if (!ev) return;
    lastFocus = document.activeElement;

    const era = ERAS.find(e => e.id === ev.era) || {};
    $("#ex-era").textContent = `${era.num || ""} · ${era.title || ""}`;
    $("#ex-date").textContent = ev.date;
    $("#ex-title").textContent = ev.title;
    $("#ex-summary").textContent = ev.summary;
    $("#ex-importance").textContent = ev.importance;

    // impacts
    const impactsWrap = $("#ex-impacts");
    impactsWrap.innerHTML = "";
    IMPACT_ORDER.forEach(k => {
      if (ev.impact && ev.impact[k]) {
        const m = IMPACT_META[k];
        const box = el("div", "ex-impact");
        box.innerHTML = `<h3><span class="ex-ico">${m.ico}</span> ${m.label}</h3><p>${ev.impact[k]}</p>`;
        impactsWrap.appendChild(box);
      }
    });

    // threads (causes / effects)
    const threadsWrap = $("#ex-threads");
    threadsWrap.innerHTML = "";
    const causes = (ev.causes || []).map(c => byId[c]).filter(Boolean);
    const effects = (ev.effects || []).map(c => byId[c]).filter(Boolean);
    if (causes.length || effects.length) {
      threadsWrap.appendChild(el("h3", null, "The Golden Thread"));
      causes.forEach(c => threadsWrap.appendChild(threadLink("←", c, "Grew from")));
      effects.forEach(c => threadsWrap.appendChild(threadLink("→", c, "Led to")));
    }

    // source
    $("#ex-source").innerHTML = `Reference: <a href="${sourceLink(ev)}" target="_blank" rel="noopener">${esc(ev.wiki)} — Wikipedia</a>.`;

    // media — cascade the hero through the gallery until one image verifiably loads
    exHeroImg.style.backgroundImage = "";
    exHeroImg.classList.add("empty");
    const gal = galleryFor(ev);          // only entries with a usable image url
    let heroSet = false;
    (function cascade(i) {
      if (i >= gal.length) return;       // none loaded -> placeholder stays
      setBg(exHeroImg, gal[i].t,
        () => { heroSet = true; exHeroImg.classList.remove("empty"); markSel(gal[i].t); },
        () => cascade(i + 1));
    })(0);

    exGallery.innerHTML = "";
    function markSel(url) {
      exGallery.querySelectorAll(".gal-thumb").forEach(x => x.classList.toggle("sel", x.dataset.url === url));
    }
    if (gal.length > 1) {
      gal.forEach(g => {
        const t = el("div", "gal-thumb");
        t.title = g.title;
        t.dataset.url = g.t;
        setBg(t, g.t, null, () => t.remove());   // hide thumbs that don't load
        t.addEventListener("click", () => {
          setBg(exHeroImg, g.t, () => {
            exHeroImg.classList.remove("empty");
            if (gsap) gsap.fromTo(exHeroImg, { opacity: .35 }, { opacity: 1, duration: .5 });
          });
          markSel(g.t);
        });
        exGallery.appendChild(t);
      });
    }

    // per-image credits (author + license for every Wikimedia Commons image shown)
    const credWrap = $("#ex-credits");
    credWrap.innerHTML = gal.length
      ? `<h4>Image credits</h4><ul>${gal.map(creditEntry).join("")}</ul><p class="ex-credits-note">Images via Wikimedia Commons, reused under public-domain or Creative Commons licenses.</p>`
      : "";

    // show + animate
    exhibit.classList.add("open");
    exhibit.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#exhibit-body").scrollTop = 0;
    $("#exhibit-close").focus();
    if (gsap) {
      gsap.fromTo("#exhibit-backdrop", { opacity: 0 }, { opacity: 1, duration: .4 });
      gsap.fromTo(exCard, { opacity: 0, y: 40, scale: .97 }, { opacity: 1, y: 0, scale: 1, duration: .55, ease: "power3.out" });
      gsap.fromTo("#exhibit-body > *", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .5, stagger: .045, delay: .15, ease: "power2.out" });
    }
    history.replaceState(null, "", "#" + ev.id);
  }

  function threadLink(dir, ev, verb) {
    const b = el("button", "thread-link");
    b.innerHTML = `<span class="thread-dir">${dir}</span><span class="thread-year">${ev.date}</span><span class="thread-title">${verb}: ${ev.title}</span>`;
    b.addEventListener("click", () => openExhibit(ev.id));
    return b;
  }

  function closeExhibit() {
    if (gsap) {
      gsap.to(exCard, { opacity: 0, y: 30, scale: .98, duration: .3, ease: "power2.in" });
      gsap.to("#exhibit-backdrop", { opacity: 0, duration: .35, delay: .05, onComplete: finish });
    } else finish();
    function finish() {
      exhibit.classList.remove("open");
      exhibit.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      history.replaceState(null, "", " ");
      if (lastFocus) lastFocus.focus();
    }
  }
  $("#exhibit-close").addEventListener("click", closeExhibit);
  $("#exhibit-backdrop").addEventListener("click", closeExhibit);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && exhibit.classList.contains("open")) closeExhibit();
  });

  // ============================================================
  //  IMAGE CREDITS OVERLAY (site-wide attribution)
  // ============================================================
  const credits = $("#credits");
  const creditsList = $("#credits-list");
  function buildCredits() {
    if (creditsList.dataset.built) return;
    const seen = new Set(), rows = [];
    Object.entries(IMAGES).forEach(([title, v]) => {
      if (!v.t || seen.has(v.t)) return;       // one row per distinct bundled image
      seen.add(v.t);
      rows.push({ title, ...v });
    });
    rows.sort((a, b) => a.title.localeCompare(b.title));
    creditsList.innerHTML = `<p class="credits-count">${rows.length} images</p><ul>${rows.map(creditEntry).join("")}</ul>`;
    creditsList.dataset.built = "1";
  }
  function openCredits() {
    buildCredits();
    credits.classList.add("open");
    credits.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $("#credits-close").focus();
  }
  function closeCredits() {
    credits.classList.remove("open");
    credits.setAttribute("aria-hidden", "true");
    if (!exhibit.classList.contains("open")) document.body.style.overflow = "";
  }
  $("#open-credits").addEventListener("click", openCredits);
  $("#credits-close").addEventListener("click", closeCredits);
  $("#credits-backdrop").addEventListener("click", closeCredits);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && credits.classList.contains("open")) closeCredits();
  });

  // ============================================================
  //  HERO / NAV / SCROLL behavior
  // ============================================================
  const chrome = $("#chrome");
  const chromeYear = $("#chrome-year");
  const progressFill = $("#progress-fill");
  const toTop = $("#to-top");

  $("#hero-cta").addEventListener("click", () => {
    const target = $("#controls");
    if (gsap && window.ScrollToPlugin) gsap.to(window, { duration: 1.2, scrollTo: { y: target, offsetY: 0 }, ease: "power2.inOut" });
    else target.scrollIntoView({ behavior: "smooth" });
  });
  $("#back-to-top").addEventListener("click", () => {
    if (gsap && window.ScrollToPlugin) gsap.to(window, { duration: 1.4, scrollTo: { y: 0 }, ease: "power2.inOut" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });
  toTop.addEventListener("click", () => {
    if (gsap && window.ScrollToPlugin) gsap.to(window, { duration: 1.1, scrollTo: { y: 0 }, ease: "power2.inOut" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $(".chrome-title").addEventListener("click", () => {
    if (gsap && window.ScrollToPlugin) gsap.to(window, { duration: 1.1, scrollTo: { y: 0 }, ease: "power2.inOut" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Combined height of the fixed chrome header + the sticky controls bar, so a
  // jump target lands in the space *below* the controls (not clipped under it).
  function topOffset() {
    const chromeEl = $("#chrome"), controlsEl = $("#controls");
    const ch = chromeEl ? chromeEl.getBoundingClientRect().height : 0;
    const co = controlsEl ? controlsEl.getBoundingClientRect().height : 0;
    return ch + co + 24;
  }

  function scrollToEra(id) {
    const head = eraHeads[id];
    if (!head) return;
    if (gsap && window.ScrollToPlugin) gsap.to(window, { duration: 1.1, scrollTo: { y: head, offsetY: topOffset() }, ease: "power2.inOut" });
    else { const y = head.getBoundingClientRect().top + window.scrollY - topOffset(); window.scrollTo({ top: y, behavior: "smooth" }); }
  }

  // year + progress + chrome on scroll
  const heroH = () => $("#hero").offsetHeight;
  function onScroll() {
    const y = window.scrollY;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.max(0, Math.min(1, y / docH));
    progressFill.style.width = (pct * 100) + "%";
    chrome.classList.toggle("visible", y > heroH() * 0.6);
    rail.classList.toggle("visible", y > heroH() * 0.6);
    toTop.classList.toggle("visible", y > heroH() * 0.9);

    // nearest event to viewport center sets the year readout
    const mid = y + window.innerHeight / 2;
    let nearest = null, best = Infinity;
    for (const row of allRows) {
      if (row.classList.contains("filtered")) continue;
      const r = row.getBoundingClientRect();
      const center = r.top + window.scrollY + r.height / 2;
      const d = Math.abs(center - mid);
      if (d < best) { best = d; nearest = row; }
    }
    if (nearest) {
      const ev = byId[nearest.dataset.id];
      chromeYear.textContent = ev.date.replace(/\s/g, " ");
    }

    // active era = the era section at the top of the viewport: the last era
    // header scrolled above the top offset. This matches where scrollToEra
    // lands, so the chips track the section being read rather than the event
    // nearest screen-center (which made boundaries fuzzy and skipped short eras).
    // Skip headers hidden by filtering.
    const line = y + topOffset() + 1;
    let activeEra = ERAS[0].id;
    for (const era of ERAS) {
      const head = eraHeads[era.id];
      if (!head || head.classList.contains("filtered")) continue;
      if (head.getBoundingClientRect().top + window.scrollY <= line) activeEra = era.id; else break;
    }
    rail.querySelectorAll(".rail-item").forEach(it => it.classList.toggle("active", +it.dataset.era === activeEra));
    syncEraChips(activeEra);
  }
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) { requestAnimationFrame(() => { onScroll(); ticking = false; }); ticking = true; }
  }, { passive: true });

  // ============================================================
  //  GSAP entrance animations
  // ============================================================
  function initAnimations() {
    if (!gsap) return;
    // hero
    gsap.timeline()
      .from(".hero-kicker", { opacity: 0, y: 20, duration: 1 })
      .from(".hero-line", { opacity: 0, y: 40, duration: 1, stagger: .12 }, "-=.6")
      .from(".hero-sub", { opacity: 0, y: 20, duration: 1 }, "-=.5")
      .from(".hero-cta", { opacity: 0, y: 20, duration: 1 }, "-=.6");

    if (!window.ScrollTrigger) return;
    // era heads
    Object.values(eraHeads).forEach(head => {
      gsap.from(head.querySelectorAll(".era-num, .era-title, .era-range, .era-blurb, .era-rule"), {
        scrollTrigger: { trigger: head, start: "top 78%" },
        opacity: 0, y: 40, duration: 1, stagger: .12, ease: "power3.out"
      });
    });
    // event rows
    allRows.forEach(row => {
      const card = row.querySelector(".ev-card");
      const fromX = row.classList.contains("left") ? -50 : 50;
      gsap.from(card, {
        scrollTrigger: { trigger: row, start: "top 88%" },
        opacity: 0, x: fromX, duration: .9, ease: "power3.out"
      });
      gsap.from(row.querySelector(".ev-year"), {
        scrollTrigger: { trigger: row, start: "top 88%" },
        opacity: 0, scale: .6, duration: .7, ease: "back.out(2)"
      });
      gsap.fromTo(row.querySelector(".ev-node"),
        { scale: 0 },
        { scrollTrigger: { trigger: row, start: "top 90%" }, scale: 1, duration: .5, ease: "back.out(3)" });
    });
    // epilogue
    gsap.from("#epilogue .epilogue-inner > *", {
      scrollTrigger: { trigger: "#epilogue", start: "top 75%" },
      opacity: 0, y: 30, duration: 1, stagger: .1
    });
  }

  // ============================================================
  //  AMBIENT DUST CANVAS
  // ============================================================
  function initDust() {
    const c = $("#dust"); if (!c) return;
    const ctx = c.getContext("2d");
    let w, h, particles, raf;
    function resize() {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
      const count = Math.min(110, Math.floor(w * h / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        r: Math.random() * 1.6 + .3,
        vx: (Math.random() - .5) * .12, vy: (Math.random() - .5) * .12,
        a: Math.random() * .5 + .15
      }));
    }
    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,163,90,${p.a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }
    resize(); draw();
    window.addEventListener("resize", resize);
    // pause when tab hidden
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf); else draw();
    });
  }

  // ============================================================
  //  BOOT
  // ============================================================
  function boot() {
    initDust();
    initAnimations();
    onScroll();
    // deep link
    if (location.hash) {
      const id = location.hash.slice(1);
      if (byId[id]) setTimeout(() => openExhibit(id), 600);
    }
    // dismiss loading veil
    const veil = $("#veil");
    if (gsap) gsap.to(veil, { opacity: 0, duration: .8, delay: .3, onComplete: () => veil.style.display = "none" });
    else { veil.style.opacity = 0; veil.style.display = "none"; }
  }

  window.__open = openExhibit; // verification hook

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  // expose a tiny stat for the console
  console.log(`%cThe Atlas of Technology and Civilization%c\n${EVENTS.length} exhibits across ${ERAS.length} galleries, 3400 BCE → 2026 CE.`,
    "color:#c9a35a;font-size:16px;font-family:Georgia,serif", "color:#b9ae99");
})();
