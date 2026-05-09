# HiveBoard project page

Source for the HiveBoard project website, deployed via GitHub Pages.

**Live at:** https://ricardovgodoy.github.io/hiveboard-web/

**Project repository:** https://github.com/ricardovgodoy/HiveBoard

## Structure

    /
    ├── index.html        # main page
    ├── style.css         # all styles
    ├── script.js         # copy-BibTeX button
    ├── assets/
    │   ├── hero.jpg              # hero shot of full board
    │   ├── hive_empty.jpg        # bare honeycomb base
    │   ├── twins/                # 24 paired photo+CAD images (12 attachments)
    │   └── categories/           # 3 category overview shots
    └── README.md

## Deploy

Push to the `main` branch and enable GitHub Pages in repo Settings → Pages, source: `main` branch / root folder. The site builds automatically.

## Local preview

Any static-file server works:

    python3 -m http.server 8000
    # then open http://localhost:8000

## Editing

- **Author list:** open `index.html` and find every occurrence of `<authors>`. There are two: the hero block and the BibTeX. Replace with the final list.
- **Paper link:** when the arXiv or RA-P PDF is up, set `href` on `#paper-link` (hero) and `#paper-card` (resources section).
- **Color theme:** all colors are CSS variables at the top of `style.css`. Swap `--teal-700`, `--teal-600`, etc. to retheme.
- **Adding sections:** copy any existing `<section>` block in `index.html` and adapt.

## License

Content released under the same license as the HiveBoard project.
