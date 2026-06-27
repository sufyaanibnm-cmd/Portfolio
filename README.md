# Mushtaq Ahmad — Portfolio

Static portfolio site built with React + Vite + Tailwind CSS v4.  
Converted from TanStack Start (SSR) to a fully static SPA for GitHub Pages hosting.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Before you publish

1. **Portrait photo** — put your photo at `public/portrait.jpg` (or `.png`).  
   Update the filename in `src/App.tsx` line 10 if you use `.png`:
   ```ts
   const portrait = "/portrait.jpg"; // ← change extension if needed
   ```

2. **Resume PDF** — put your CV at `public/resume.pdf`.  
   The Download Resume and Resume buttons will serve this file.

3. **LinkedIn URL** — search for `https://linkedin.com` in `src/App.tsx` and  
   replace with your actual LinkedIn profile URL.

4. **Base path** — if your GitHub repo is named differently than `mushtaq-s-project-hub`,  
   update `VITE_BASE_PATH` in:
   - `vite.config.ts` (for local builds)
   - `.github/workflows/deploy.yml` (for GitHub Actions)

## GitHub Pages deployment

### Option A — GitHub Actions (automatic, recommended)

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Source** and select **GitHub Actions**.
3. Every push to `main` will build and deploy automatically.

### Option B — Manual

```bash
npm run build          # outputs to /dist
```
Upload the contents of `dist/` to your GitHub Pages branch, or use:
```bash
npx gh-pages -d dist
```

## Project structure

```
mushtaq-portfolio/
├── public/
│   ├── portrait.jpg     ← add your photo here
│   └── resume.pdf       ← add your CV here
├── src/
│   ├── App.tsx          ← all page sections
│   ├── main.tsx         ← React entry point
│   ├── styles.css       ← Tailwind v4 + design tokens
│   └── lib/utils.ts
├── index.html
├── vite.config.ts
└── .github/workflows/deploy.yml
```
