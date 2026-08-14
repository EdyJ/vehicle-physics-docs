# CODING_STANDARDS.md — Documentation authoring

Standards for content and markup in this MkDocs site. Follow existing pages in the same section when unsure.

## Voice and prose

- **Second person** for procedures (“Create an empty GameObject…”, “Configure the mass…”).
- **Present tense**, direct, technical. Prefer short paragraphs.
- Product name: **Vehicle Physics Pro**; short form **VPP** after first mention on a page when natural.
- Unity UI and API names match the product: bold or code where the UI label matters (`**VP Vehicle Controller**`, `` `VPWheelCollider` ``).
- Units: **SI** (m, kg, N, Nm, rpm, kW). Call this out when introducing setup topics. Imperial may appear in parentheses for intuition (e.g. km/h and mph) on marketing/demo copy only.
- Spell out acronyms on first use when the audience might not know them (ABS, TCS, CoM), or link to the defining page.
- British/American spelling is mixed historically; **do not mass-restyle**. Match the page you edit. Prefer clear technical American usage for new pages (e.g. “behavior”, “center”) unless extending a strongly consistent local spelling.
- Avoid hype in reference pages. Home/About may be promotional; User Guide / Components / Blocks / Advanced stay instructional.

## Page anatomy

1. **Single H1** (`# Title`) at the top — one per file. Title matches or closely matches `mkdocs.yml` nav label.
2. Opening paragraph: what the page is and when to use it (1–3 sentences). Link prerequisites.
3. Hero / inspector screenshot when documenting a component or block.
4. Body: `###` / `####` sections. Use definition lists for parameter reference.
5. Cross-links to related guides and deep dives (“Details: [Steering helper](/blocks/steering/)”).
6. Optional closing tip alert pointing to the next step in the learning path.

Do not add a second H1. Do not rely on a page-level `[TOC]` unless a long index page already uses an equivalent pattern.

### Heading levels

| Level | Use |
|-------|-----|
| `#` | Page title only |
| `###` | Major sections (common in this repo even under H1) |
| `####` | Subsections, parameter groups |
| `#####` | Rare; fine for dense reference sub-heads |

Heading style: **sentence case** or short title case for names (`### Center of mass`, `### Vehicle dynamics`). Do not use ALL CAPS headings.

### Page types

**Component / block reference** (`docs/components/*`, `docs/blocks/*`)

- H1 = type name (`# VPWheelCollider`, `# Engine block`)
- One-line role summary
- Main inspector screenshot with `{: .clickview }` (and size class if needed)
- Sections per setting group; parameters as definition lists
- Link “helper” or related block pages instead of duplicating full theory

**How-to / tutorial** (`docs/user-guide/*`, parts of `advanced/`)

- Numbered steps; screenshots per step when UI-heavy
- Keyboard and menu paths explicit (`Component > Vehicle Physics > …`)
- Carousel step pattern allowed for long rigging tutorials (see Creating vehicles)

**API-style reference** (`docs/advanced/*-reference.md`)

- Class/event/property names in backticks
- Behavior contracts stated as facts (when called, ordering, what not to override)
- Code samples compilable in spirit; namespace `VehiclePhysics`

**About / marketing** (`docs/about/*`, `index.md`)

- Feature lists, edition notes, external store/demo links
- Alerts for edition limits and product positioning

## File and folder naming

- Pages: **kebab-case** `.md` (`vehicle-controller.md`, `custom-addons.md`).
- Section folders match nav: `about/`, `user-guide/`, `components/`, `blocks/`, `advanced/`.
- Images: **kebab-case**, descriptive prefix `vpp-` when showing product UI (`vpp-vehicle-controller.png`).
- Place images under `docs/img/<section>/` matching the page section. Shared/branding assets may live in `docs/img/` root. Setup-guide screenshots use `docs/img/setup-guide/`.
- New pages **must** be added to `nav` in `mkdocs.yml` unless intentionally unlisted utility/history pages.
- `docs/markdown-test.md` is a markup sandbox — do not use it as a user-facing template beyond syntax checks.

## Markup conventions

### Links

- **Internal links:** root-absolute path with leading slash, optional trailing slash:  
  `[Getting started](/user-guide/getting-started/)`  
  Anchors: `[…](/components/vehicle-input/#vpstandardinput)` (lowercase anchors from heading text).
- Prefer paths that match live URLs (`/section/page/`) over `.md` relative links.
- Full `https://vehiclephysics.com/...` appears on some older index-style pages; for new links prefer root-absolute paths so local `mkdocs serve` works.
- **External:** normal Markdown links; use `{: target="_blank" }` when the existing page pattern opens store, social, or Q&A in a new tab.
- Link text names the target page or control, not “click here”.

### Images

```markdown
![Alt text](/img/components/vpp-wheelcollider.png){: .clickview }
![Alt text](/img/components/vpp-vehicle-controller-axles.png){: .img-small .clickview }
![Alt text](/img/setup-guide/vpp-setup-com.png){: .clickview .img-medium }
```

| Class | Role |
|-------|------|
| `.clickview` | Click-to-zoom lightbox (default for inspector/scene shots) |
| `.img-large` | max-width 600px |
| `.img-medium` | max-width 520px |
| `.img-medium-height` | max 520×450 |
| `.img-small` | max-width 320px |
| `.img-thumb` | max-width 120px |
| `.img-carousel` | carousel frames |

- Always set meaningful `alt` (and `title` when the caption matters for lightbox).
- Do not commit huge unoptimized screenshots; match resolution of neighboring images in the same folder.
- Source working files may go in `img-source/`; **published** bitmaps go under `docs/img/`.

### Definition lists (parameters and glossary)

Python-Markdown `extra` definition lists are the standard parameter pattern:

```markdown
Idle Rpm
:	Rpm, torque (Nm) and curve bias when no throttle is applied.

Peak Rpm
:	Rpm and torque when the engine generates most raw combustion torque.
```

Rules:

- Term on its own line; definition starts with `:	` (**colon + tab**).
- Indent continuation lines with tabs to match surrounding docs.
- Nested notes and alerts inside a definition are allowed; keep indentation consistent with neighbors.

### Admonitions vs alerts

Two callout systems are in use; pick by intent:

**Admonitions** (multi-paragraph, titled blocks):

```markdown
!!! info "&fa-info-circle; How to configure the Center of Mass"

	1. Step one…
	2. Step two…
```

```markdown
!!! warning "&fa-warning:lg; Current Project Settings will be overriden"
	Each file overrides the project’s settings…
```

- Types used: `info`, `warning` (capitalization of the tag varies in the wild: `info` / `Info`, `warning` / `Warning` — both work; prefer lowercase `info` / `warning` on new pages).
- Title string in **double quotes**, usually with a Font Awesome icon.

**Bootstrap-style alerts** (one-shot tips/warnings inline):

```markdown
&fa-thumbs-up:lg; Optional tip with a [link](/user-guide/getting-started/){: .alert-link }
{: .alert .alert-info }
```

| Classes | Typical use |
|---------|-------------|
| `.alert .alert-info` | Tip, note, safe guidance |
| `.alert .alert-success` | Next step / positive confirmation |
| `.alert .alert-warning` | Caution |
| `.alert .alert-danger` | Hard requirement / foot-gun |
| `.alert-link` | Link styled inside an alert |

Common icons (iconfonts / FA4-style): `&fa-info-circle;`, `&fa-warning;`, `&fa-thumbs-up;`, `&fa-thumbs-o-up;`, `&fa-exclamation-triangle;`, `&fa-exclamation-circle;`, `&fa-lightbulb-o;`, with optional `:lg` size suffix.

### Keyboard and UI chrome

- Keys: `<kbd>K</kbd>`, chords as adjacent kbd tags or `ctrl+K` inside kbd as in existing pages.
- Menus and Inspector labels in **bold** or exact UI spelling.
- Layers and special UI names may use kbd (`<kbd>User Layer 8</kbd>`).

### Tables

Pipe tables for structured reference (Data Bus channels, key bindings, feature matrices). Alignment colons optional; keep columns readable in source. Use `&nbsp;` sparingly when a cell must not wrap (legacy tables do this).

### Lists

- Hyphen `-` for unordered lists.
- Numbered lists for real sequences.
- Nested content indented with **tabs** (repo norm).

### Horizontal rules

`***` or `----` appear rarely (test page, separators). Prefer headings over rules on normal pages.

### Math

- Inline: `$...$`
- Block: `$$...$$` on their own lines  
Enabled via `mdx_math` + MathJax. Use for formulas (friction, inertia, BSFC), not for simple unit suffixes.

### Diagrams

**Mermaid** (block diagrams, drivetrain graphs):

```markdown
<div class="mermaid">
graph RL
subgraph VP Vehicle Controller
Eng(Engine<br>+<br>Clutch)
Gear[Gearbox]
Eng-->Gear
end
</div>
```

**Driveline canvas** (schematic axles/differentials): follow `docs/blocks/driveline.md` — `canvas.img-responsive` + `drivelinechartcanvas`, width/height comments (16 px × 17 px per grid unit), `drawCanvas` on `load`.

**Texture canvas** (2D sketches): `texturecanvas.js` pattern on `markdown-test.md` and advanced figures.

Do not introduce a new diagram stack without matching theme JS includes in `mkdocs.yml`.

### Carousels (step tutorials / home)

Copy the established structure from `docs/user-guide/vehicle-creation.md` or `docs/index.md`:

- Outer `div.slick-carousel` (home uses `slick-home`)
- `section.slider` / `slider-home`
- Per-slide `div` with `markdown=1`, image, optional `{: .header}` caption line, bullets

Requires slick CSS/JS already wired in `mkdocs.yml`.

## Code samples

Applies to **C# (and other) snippets in Markdown under `docs/`** — what readers see on the site. Theme/JS under `custom_theme/` is separate and not a style model for samples.

- Fences: plain ` ``` ` is the norm on tutorial/reference pages. Language tags (`csharp`, `cs`, `C#`) appear on some newer pages (e.g. release notes); either is fine when matching the surrounding page. HighlightJS is configured for **`cs`** and **`shell`** only.
- To suppress highlighting: HTML `<pre><code class="nohighlight">…</code></pre>` (see comment in `highlightjs-setup.js`).
- **Canonical C# sample style** (match `advanced/custom-addons.md`, `custom-vehicles.md`, `custom-blocks.md`, and scripting blocks in `*-reference.md`):

  - Namespace `VehiclePhysics` when relevant
  - `using` lines at top of full samples
  - **Tabs** for indentation (not spaces)
  - **Brace on the next line, indented one tab; body at the same indent as the brace** (Whitesmiths-like — not K&R, not classic Allman with braces at the declaration’s column):

        public class SimpleVehicleAddon : VehicleBehaviour
            {
            public Text uiText;

            public override void OnEnableVehicle ()
                {
                if (uiText == null)
                    {
                    enabled = false;
                    return;
                    }
                }
            }

  - Space before `()` on method declarations: `void OnEnableVehicle ()`
  - File name in bold before the fence when showing a full example: `**SimpleVehicleAddon.cs**`
  - Prefer real API names: `VehicleBehaviour`, `VehicleBase`, `Block`, `vehicle.data.Set/Get`, `Channel.*`, `InputData.*`

- **Exceptions:** short migration/release-note snippets may use space indentation and conventional brace placement (`about/release-notes-sdk-v9.8.md`). Do not “fix” those to the canonical style unless rewriting the page. Prefer the canonical style for all new tutorial and reference samples.
- Inline code for identifiers, properties, enum-like bus values, folder paths (`Assets/Vehicle Physics Pro`).
- Do not invent APIs. If unsure, describe behavior in prose and link to the reference page.
- Comments in samples explain non-obvious constraints (e.g. never override `OnEnable` on `VehicleBehaviour`).

## Cross-references and naming of VPP types

| Writing about | Convention |
|---------------|------------|
| Component type | `VPVehicleController`, `VPWheelCollider` (no space) in code/API voice |
| Inspector title | “VP Vehicle Controller” as shown in UI / screenshots |
| Block concept | Engine block, Differential block; link to `/blocks/…` |
| Base classes | `VehicleBehaviour`, `VehicleBase`, `Block` |
| Data bus | “Data Bus”; channels `Input`, `Vehicle`, `Settings` |

Keep component page filenames aligned with nav slugs already in `mkdocs.yml`.

## Theme, CSS, and JS changes

- Site-wide look-and-feel: `custom_theme/` only (not under `docs/`).
- Page-specific CSS/JS: prefer existing classes and scripts. New global assets must be registered in `mkdocs.yml` `extra_css` / `extra_javascript`.
- Do not enable the `codehilite` Markdown extension; server highlighting depends on HighlightJS setup.
- `strict: true` — broken internal links and nav mistakes fail the build. Fix warnings; do not disable strict mode.

## Nav edits (`mkdocs.yml`)

- Mirror section order: About → User Guide → Components → Blocks → Advanced.
- Label text is human-facing; entry path is relative to `docs/` without leading slash: `user-guide/getting-started.md`.
- Home uses a thin-space label `"&#8201;"` for `index.md` — leave as-is.
- When adding a page, add nav + file + images in the same change set.

## What not to do

- Do not edit generated output under `site/`.
- Do not document by pasting large unrelated C# dumps; keep samples minimal and complete enough to compile conceptually.
- Do not replace definition lists with ad-hoc bold paragraphs for parameter refs on component/block pages.
- Do not add Material-for-MkDocs-only syntax; theme is classic MkDocs + custom_dir.
- Do not put agent process rules here (see `AGENTS.md` if present). This file is authoring standards only.

## Quick checklist for a new page

1. Create `docs/<section>/<page>.md` with one H1 and an intro paragraph.  
2. Add images under `docs/img/<section>/` with `{: .clickview }` as appropriate.  
3. Use definition lists for parameters; admonitions/alerts for warnings and tips.  
4. Link related pages with root-absolute paths.  
5. Register the page in `mkdocs.yml` `nav`.  
6. Run `mkdocs build` or `mkdocs serve` and fix strict-mode issues.  
