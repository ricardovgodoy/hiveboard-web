# HiveBoard project website

Static project page for HiveBoard, the open modular dexterity benchmark for industrial robotic manipulation.

- **Website:** https://www.ricardovgodoy.com/hiveboard-web/
- **Project repository:** https://github.com/EESC-LabRoM/HiveBoard
- **Demonstration video:** https://youtu.be/kaYB_Oc64nA

## Files

```text
/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── hiveboard-mark.svg
    ├── hero-clean.png
    ├── hero-clean.webp
    ├── hive_empty-clean.png
    ├── hive_empty-clean.webp
    └── twins/
```

The benchmark files do not live in this repository. STL, STEP, simulation, and protocol files are maintained in [`EESC-LabRoM/HiveBoard`](https://github.com/EESC-LabRoM/HiveBoard).

## Local preview

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Updating project metadata

- Update file-format links in the `#files` section of `index.html` when new simulation exports are released.
- Replace the URDF “coming soon” note with a repository link when those files are published.
- Replace the temporary repository citation after the paper metadata becomes public.
- Keep task conditions and timeouts synchronized with `Documentation/PROTOCOL.md` in the canonical repository.

## Deployment

GitHub Pages publishes the `main` branch from the repository root.
