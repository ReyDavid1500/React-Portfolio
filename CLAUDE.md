# React Portfolio — Architecture

A client-only React SPA (Vite + React 18 + React Router 6). No backend, no API,
no database — content is plain JS/JSX modules imported at build time.

## Stack

| Layer | Library | Version | Role |
|---|---|---|---|
| Build tool | `vite` | 5.4 | Dev server, bundling, code-splitting |
| UI framework | `react` / `react-dom` | 18.3 | Component rendering |
| Routing | `react-router-dom` | 6.0 | Client-side routing, lazy pages |
| Styling | `tailwindcss` | 3.4 | Utility classes, class-based dark mode |
| Animation | `framer-motion` | 5.3 | Page/element transitions |
| Icons | `react-icons` | 5.2 | Feather icon set (`Fi*`) throughout |
| Misc UI | `react-scroll`, `react-countup`, `styled-components` | — | In `package.json`; only exercised by components listed as unused below |
| Linting | `eslint` 9 (flat config) | 9.13 | `eslint.config.js` |

## Render tree & data flow

```
index.html → main.jsx (createRoot + StrictMode) → App.jsx
                                                      │
                              Router · AnimatePresence · AppHeader/Footer · Suspense
                                                      │
                         Routes → React.lazy()  (each page is its own bundle chunk)
        ┌───────────┬────────────┬────────────────┬──────────┬──────────────┬─────────┐
      Home      Projects   ProjectDetails      AboutMe    Certificates    Contact
        │           │            │                 │            │             │
        ▼           ▼            ▼                 ▼            ▼             ▼
  components/  components/  components/       components/  components/   (self-contained,
   shared       projects     projects           about         about       no subcomponents)
        │           │            │                 │            │
        ▼           ▼            ▼                 ▼            ▼
  static import — no fetch, no API — from src/data/*.js(x)
   aboutMeData.js  projects.js  singleProjectData.jsx  (hardcoded, see below)  coursesData.js
```

- **Entry:** `src/main.jsx` mounts `App.jsx` into `#root`.
- **Shell:** `App.jsx` wraps everything in `BrowserRouter` + `AnimatePresence`,
  renders the persistent `AppHeader`/`AppFooter`, and lazy-loads six routes inside
  one `Suspense` boundary. Confirmed by the per-page chunks in `dist/assets`
  (`Home-*.js`, `AboutMe-*.js`, `Projects-*.js`, etc.).
- **Pages** (`src/pages/*.jsx`) compose presentational components from the matching
  `src/components/<folder>`:
  - `Home` → `AppBanner` (shared) + `ProjectsGrid` (projects)
  - `Projects` → `ProjectsGrid` → `ProjectSingle`
  - `ProjectDetails` → `ProjectHeader`, `ProjectGallery`, `ProjectInfo` (projects)
  - `AboutMe` → `AboutMeBio` (about)
  - `Certificates` → `AboutClients` → `AboutClientSingle` (about)
  - `Contact` → hand-rolled JSX in the page itself, no subcomponents
- **Data:** components `import` plain arrays/objects directly from `src/data`
  (`projects.js`, `singleProjectData.jsx`, `coursesData.js`, `aboutMeData.js` for
  `cvURL`). There is no store, no context provider actually feeding the tree, and
  no runtime fetch anywhere in the app.
- **Theme:** `useThemeSwitcher` (in `src/hooks`) toggles a class on
  `document.documentElement` and persists the choice to `localStorage`; every
  component's Tailwind `dark:` variants react to that one class.

## Unwired code (present in `src/`, absent from the render tree)

A grep of every import in the codebase turns up files nothing ever pulls in.
None of this breaks the running app — it's dead weight, not a live bug — except
the one item marked broken:

- `src/context/AboutMeContext.jsx` — Provider never mounted anywhere; imports
  `../data/clientsData`, which **does not exist** in the repo — would throw on
  import if anything ever used it.
- `src/context/SingleProjectContext.jsx` — same pattern, a working Provider
  with zero consumers.
- `src/components/contact/ContactForm.jsx` and `ContactDetails.jsx` — full form
  component with validation; the live `Contact` page is a separate, hand-rolled
  JSX block that doesn't render either.
- `src/components/reusable/FormInput.jsx` — only consumer is the unused
  `ContactForm`.
- `src/components/about/AboutCounter.jsx` and `CounterItem.jsx` — stat-counter
  block (`react-countup`); not rendered by `AboutMe` or `Certificates`.
- `src/components/experience/ExperienceTimeline.jsx` — imported in `Home.jsx`
  but its JSX tag is commented out (`{/* <ExperienceTimeline /> */}`);
  `src/data/experienceData.js` has no other consumer.
- `src/components/shared/AppFooterCopyright.jsx` — `AppFooter.jsx` builds its
  own copyright line inline instead of using this.
- `src/components/BackToTop.jsx` — unused; `src/hooks/useScrollToTop.jsx`
  (rendered as `<UseScrollToTop />` in `App.jsx`) handles scroll behavior
  instead.
- `src/components/HireMeModal.jsx` and `src/components/Loader.tsx` — not
  imported anywhere; `Loader.tsx` is also the only TypeScript file in an
  otherwise JS/JSX codebase.

## Content model notes

- Content ("bio", project entries, courses, experience) lives as plain
  exported arrays/objects in `src/data`, imported wherever needed at build
  time. Editing content means editing those files directly — no CMS, nothing
  fetched at runtime.
- This isn't fully consistent: `AboutMeBio.jsx` (the actual `/about` page)
  hardcodes its bio, highlights, and photo URLs (including two external
  `r2.dev` image URLs) in the component instead of reading
  `data/aboutMeData.js` — that file's `bio` field is never read anywhere.

## Working in this repo

- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint (flat config, `eslint.config.js`)
- Fonts are self-hosted in `src/fonts` (GeneralSans family, multiple weights)
  and referenced from `src/css`.
- Static assets served as-is: `public/files` (CV + certificate PDFs),
  `public/icons`, `public/images`.
