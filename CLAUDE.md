# CLAUDE.md

Guidance for Claude Code (and other agents) working in this repository.

## What this is

**The Atlas of Technology and Civilization** — an interactive timeline of ~5,000 years
of technology, labor, communication, surveillance, and the laws that answered them
(c. 3400 BCE → 2026 CE). Hundreds of exhibits across 7 "galleries." It is a **static
site**, publicly available, built as a companion to a book in progress by C. Raynor —
a research aid that anyone can explore. It is styled like a gallery exhibit, but it is
not a museum: don't call it one in the prose. Use "this atlas" / "this timeline" for
self-reference (never "this museum").

## Hard constraints

- **JavaScript and HTML only for the shipped site.** No Python, no other languages,
  no framework, no build step required to view it. (Node scripts under `tools/` are
  build-time tooling only and are not shipped.)
- **Never fabricate facts or images.** Every exhibit's history is drawn from the
  source timelines; every image is a real photograph/document from Wikimedia Commons,
  bundled locally under `site/img/`, with the exhibit linking to its Wikipedia source.
  If you add or edit an exhibit, do not invent dates, quotes, or pictures.

## Layout

```
site/                 # THE SHIPPED SITE (static; serve this directory)
  index.html
  css/styles.css
  js/eras.js          # gallery + category definitions
  js/data/era1..7.js  # the 243 exhibits, one file per gallery
  js/images.js        # generated: wiki-title -> local image path
  js/app.js           # timeline build, exhibit popups, filters, GSAP, canvas
  img/                # generated: bundled, resized images
tools/                # build-time Node scripts (NOT shipped, gitignored)
extracted/            # source PDF text extraction (gitignored)
*.pdf                 # source timelines (gitignored)
```

## The exhibit data model

Each exhibit in `js/data/eraN.js` is an object pushed to `window.ATLAS_EVENTS`:

```js
{ id:"telegraph", year:1844, date:"1844", era:3, cat:"communications",
  title:"…", wiki:"Electrical telegraph", gallery:["Samuel Morse","Morse code"],
  summary:"one-sentence hook",
  importance:"the longer history paragraph",
  impact:{ technology:"…", society:"…", regulation:"…", labor:"…", government:"…",
           surveillance:"…", communications:"…", computing:"…" },  // any subset
  causes:["…ids…"], effects:["…ids…"] }   // cross-links by exhibit id ("golden thread")
```

- `id` must be unique. `cat` must be one of the keys in `ATLAS_CATEGORIES`
  (`technology, communications, computing, surveillance, labor, law, power`).
- `wiki` and every `gallery` entry must be a real, exact Wikipedia article title —
  these are resolved to images by the tooling.
- `causes`/`effects` reference other exhibit `id`s; dangling refs are flagged by the
  validator and must be fixed.

## After editing exhibit data — always validate

```sh
node tools/validate-data.mjs   # checks unique ids, required fields, dangling
                               # causes/effects links, valid categories; regenerates
                               # tools/wiki-titles.json
```

If you added/changed `wiki`/`gallery` titles, refresh images:

```sh
node tools/fetch-images.mjs      # resolve image URLs via Wikipedia REST API
node tools/localize-images.mjs   # download originals, resize (sharp), write img/ + images.js
```

**Wikimedia rate-limits bursts.** `localize-images.mjs` pulls *original* files (not
on-demand thumbnails, which throttle first) and resizes locally. If you get `429`s,
back off hard — `patient-localize.mjs` retries with long cool-downs. The app is built
to tolerate any not-yet-localized image gracefully (preload-verified; hero cascades to
the first image that loads; failed images are hidden — never a broken frame).

## Running / verifying

```sh
cd site && python3 -m http.server 8000   # any static server works
node tools/shoot.mjs <url> <out.png> [scrollY] [exhibitId]   # headless screenshot (needs Chrome)
```

Verify visually after meaningful changes — the whole point is the gallery-exhibit aesthetic.

## Style notes

- Match the existing voice in exhibit prose: dense, essayistic, specific, no padding.
  Each `impact` line is one sharp sentence.
- The visual theme (bone/gold on near-black, serif display type, golden spine) lives
  entirely in `css/styles.css`; keep new UI consistent with it.
- Exhibit prose should be self-contained, general explanation. Do **not** name or quote
  specific books or authors as the framing device (e.g. no "as the author writes…", no
  "the book argues…"). State the history and ideas directly. (Exhibits that are *about* a book
  — e.g. the "Empire of AI" card — are fine; the rule is against using a book as the
  narrative lens for unrelated exhibits.)
