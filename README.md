# The Atlas of Technology and Civilization

An interactive, museum-style timeline of five thousand years of technology, labor,
communication, surveillance, and the laws that answered them — from the first
cuneiform tax ledgers (c. 3400 BCE) to AI agents and the EU AI Act (2026).

**243 exhibits across 7 galleries.** Every moment is clickable: each opens a
closeable exhibit with its importance and history, its impact on technology,
society, regulation, labor, and government, a gallery of real photographs, and
"golden thread" links to the events it grew from and led to.

Built as a static site — **HTML, CSS, and vanilla JavaScript only** — animated with
[GSAP](https://gsap.com/). No build step or framework is required to view it.

## Viewing it

It's a static site. Serve the `site/` directory with any static file server:

```sh
cd site
python3 -m http.server 8000      # or: npx serve .
# open http://localhost:8000
```

Then open `index.html`. (Opening the file directly via `file://` also works, but a
local server is recommended so the image paths resolve cleanly.)

## What's where

```
site/
  index.html          # the page shell
  css/styles.css      # all styling (museum theme)
  js/
    eras.js           # the 7 gallery definitions + category list
    data/era1..7.js   # the 243 exhibits (one file per gallery)
    images.js         # title -> local image path map (generated)
    app.js            # timeline build, popups, filters, GSAP, ambient canvas
  img/                # ~600 locally-bundled images (generated)
  favicon.svg
tools/                # build-time Node scripts (not shipped to the site)
extracted/            # plain-text extraction of the source PDFs
```

## Sources & integrity

- The chronology, causal links, and analytical framing are drawn from three source
  timelines on surveillance, labor, communications, and regulation (the project's
  `*.pdf` files, extracted to `extracted/`), woven together with the histories of
  computing and AI in the spirit of James Gleick's *The Information*, Lewis Mumford's
  *Technics and Civilization*, and Cade Metz's *Genius Makers*.
- **No facts or images are fabricated.** Every image is a real photograph or
  document pulled from Wikimedia Commons via the Wikipedia REST API, resized, and
  bundled locally under `img/`. Each exhibit links to its Wikipedia source, where the
  image's own attribution and license can be found.

## Rebuilding the data/images (optional)

These Node scripts regenerate the generated files. They are build tooling only — the
site itself ships as static assets.

```sh
npm install
node tools/extract-pdfs.mjs        # PDFs -> extracted/*.txt
node tools/validate-data.mjs       # check ids, cross-links, fields; emit wiki-titles.json
node tools/fetch-images.mjs        # resolve image URLs via Wikipedia REST API
node tools/localize-images.mjs     # download originals, resize, write site/img/ + images.js
node tools/patient-localize.mjs    # retry loop that respects Wikimedia rate limits
```

Wikimedia throttles bursts of thumbnail requests, so `localize-images.mjs` pulls the
un-throttled original files and resizes them locally with `sharp`;
`patient-localize.mjs` retries until every exhibit has a bundled image.
