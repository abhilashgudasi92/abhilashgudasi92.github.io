# Abhilash Basappa Gudasi — Bio Site

A single-page bio site for job search, ready to host on GitHub Pages.

## Files

- `index.html` — page content
- `styles.css` — styling
- `script.js` — hero stat animation + mobile nav

## Deploy on GitHub Pages (user site)

Since your GitHub username is `abhilashgudasi92`, the simplest option is a **user site**,
which publishes at `https://abhilashgudasi92.github.io`.

1. Create a new repository on GitHub named exactly:
   `abhilashgudasi92.github.io`
2. Clone it locally, then copy `index.html`, `styles.css`, and `script.js` into the
   repo's root folder.
3. Commit and push:
   ```bash
   git add .
   git commit -m "Add bio site"
   git push origin main
   ```
4. Go to the repo's **Settings → Pages**. Under "Build and deployment", set
   **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`. Save.
5. Wait a minute or two, then visit `https://abhilashgudasi92.github.io`.

## Deploy as a project site instead

If you'd rather keep it under an existing or differently-named repo (e.g.
`bio-site`), the URL will instead be `https://abhilashgudasi92.github.io/bio-site/`.
Same steps as above, just skip naming the repo after your username.

## Customizing

- Colors and fonts are defined as CSS variables at the top of `styles.css` under `:root`.
- All text content lives in `index.html` — search for the section you want to edit
  (`id="about"`, `id="experience"`, etc.).
