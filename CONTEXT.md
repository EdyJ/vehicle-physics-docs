# CONTEXT.md — Vehicle Physics Pro Documentation

## Purpose

Hand-written documentation site for **Vehicle Physics Pro (VPP)**: a realistic vehicle simulation kit for Unity. Published at [https://vehiclephysics.com/](https://vehiclephysics.com/).

This repository holds **documentation sources only**, not the VPP product code or Unity package.

## Audience

- Unity developers integrating or extending VPP
- Vehicle tuners applying real-world specs and setup techniques
- Licensees evaluating editions (Community / Professional / Enterprise)
- Advanced users writing custom vehicles, blocks, and add-ons

## Product domain (what the docs describe)

VPP simulates full vehicle dynamics in Unity: powertrain (engine, clutch, gearbox, driveline, differentials), tires, suspension, brakes, steering, aids (ABS, TCS, ESC, …), ground materials, input, telemetry, cameras, and specialized vehicle types (trucks, articulated machinery, EVs, tracked, etc.).

Core extension model documented here:

| Concept | Role |
|--------|------|
| **VPVehicleController** | Stock vehicle controller (most vehicle types) |
| **VPWheelCollider** | Per-wheel collider / suspension |
| **Blocks** | Modular drivetrain parts (engine, gearbox, differential, …) |
| **VehicleBehaviour** | Base for add-on components synced to vehicle lifecycle |
| **VehicleBase** | Base for custom vehicle controllers |
| **Data Bus** | OBD-II-inspired integer channels for I/O with the vehicle |

Editions and licensing differ by feature set; docs call out edition-specific features where needed.

## Toolchain

| Item | Detail |
|------|--------|
| Generator | [MkDocs](https://www.mkdocs.org/) (classic `mkdocs` theme) |
| Config | `mkdocs.yml` at repo root (`strict: true`) |
| Custom theme | `custom_theme/` (extends base; Twitter cards, click-to-zoom modal, footer) |
| Markdown extensions | `extra`, `admonition`, `iconfonts` (Font Awesome), `mdx_math` (MathJax `$`/`$$`), `toc` with permalink ` #` |
| Highlighting | Built-in HighlightJS (not `codehilite`); languages limited to `cs` and `shell` via `custom_theme/js/highlightjs-setup.js` |
| Math | MathJax 2.7.1 from CDN |
| Diagrams | Mermaid 8 (CDN); custom Fabric.js canvases (`texturecanvas.js`, `drivelinechartcanvas.js`) |
| UI extras | Slick carousels, ClickView lightbox |
| Local extensions | `extensions/` — install notes for `iconfonts` and `mdx_math` (pip from GitHub or copy into site-packages) |
| Analytics | Google Analytics UA-58719504-1 |

**Build / serve (typical MkDocs):**

```bash
mkdocs serve
mkdocs build
```

Output directory `site/` is gitignored. Hosting target is the live site at vehiclephysics.com (deployment pipeline is outside this repo).

## Repository layout

```
mkdocs.yml              # Site config, nav, theme, extensions, assets
docs/                   # All page content and images
  index.md              # Home
  about/                # Product, licensing, demos, changelog, support
  user-guide/           # Setup, getting started, creation, setup, 3D, extending
  components/           # Unity components reference
  blocks/               # Drivetrain block / helper reference
  advanced/             # Custom code, API-style references, deep topics
  img/                  # Page images (mirrored by section + shared assets)
  markdown-test.md      # Markup / theme sandbox (not in nav)
  thankyou.md           # Utility page (not in nav)
custom_theme/           # Theme override: main.html, css/, js/, img/
extensions/             # Vendored/local Markdown extension sources + install notes
img-source/             # Occasional source assets (not the live img tree)
README.md               # Short contributor note
```

## Information architecture

Nav is defined only in `mkdocs.yml`. Top-level sections:

1. **Home** (`index.md`) — product pitch, carousel, CE link, contact, customers  
2. **About** — features, showcase, demos, licensing, changelog, support  
3. **User Guide** — install → first scenes → create vehicle → configure → 3D/environment → extend  
4. **Components** — component guide + one page per major component family  
5. **Blocks** — one page per major block/helper (inertia, steering, brakes, tires, driveline, …)  
6. **Advanced** — custom add-ons/vehicles/blocks, VehicleBehaviour / VehicleBase / Block / Data Bus references, suspension theory, realistic setup, rigging, edition switching  

**Reading paths:**

- New user: Setting up VPP → Getting started → Creating vehicles → Configuring vehicles  
- Integrator: Component Guide → specific component pages → Extending VPP  
- Systems programmer: Block reference → custom blocks/vehicles → Data Bus / VehicleBehaviour / VehicleBase  

### Pages present on disk but not in `nav`

These exist under `docs/` and may be linked from content or kept for historical/utility use; they are not primary nav entries:

- `user-guide/project-settings.md`
- `about/comparison.md`, `about/release-notes-sdk-v9.*.md`
- `advanced/git-repository-setup.md`, `advanced/source-code-vs-sdk.md`, `advanced/vehicle-inertia.md`
- `markdown-test.md`, `thankyou.md`

Prefer root-relative internal links (`/section/page/`) so orphan pages still resolve on the live site.

## Content pipeline

- **All documentation pages are hand-written Markdown** under `docs/`.
- No API extraction from C# sources in this repo.
- Images are static files under `docs/img/…`.
- Interactive figures are inline HTML + JS in Markdown (canvas + `drivelinechartcanvas` / `texturecanvas`, or Mermaid `div class="mermaid"`).
- PDF license agreement lives under `docs/`.

## Assets and theme behavior

- **Images:** `docs/img/` with subfolders per section (`user-guide/`, `components/`, `blocks/`, `advanced/`, `about/`, `setup-guide/`, `carousel/`, `gallery/`, `demos/`, `showcase/`).
- **CSS:** `custom_theme/css/` — tables, admonitions, Bootstrap-like alerts, image size classes, slick, clickview, fixes.
- **JS:** HighlightJS setup, ClickView, image gallery, slick, driveline/texture canvases, Fabric custom build.
- Default image presentation: block, centered, `max-width: 100%` (see `extras.css`).

## Versioning and localization

- Single-language site (English).
- No mike / versioned docs folders in-repo.
- Product version history is editorial content (`about/changelog.md`, occasional release-note pages).

## Known gaps for agents

- Exact MkDocs and Python package versions are not pinned in-repo (install instructions only for iconfonts / mdx_math).
- Deploy/hosting steps are not defined here.
- VPP C# product source is **not** in this repository; code samples in docs are illustrative snippets only.
- Some pages and images may lag the latest product UI; treat live Inspector labels in the current VPP package as authoritative when they disagree with a screenshot.
