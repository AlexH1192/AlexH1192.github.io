# Alexander Haas Portfolio

React + Vite portfolio site for games, software engineering, and outdoor leadership applications.

## Local setup

```bash
npm install
npm run dev
```

## Build check

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

1. Create a GitHub repository. For a main portfolio, name it `YOUR_USERNAME.github.io`.
2. Push this project to the `main` branch.
3. In GitHub, open the repo: Settings -> Pages -> Source: GitHub Actions.
4. Push commits to `main`. The deploy workflow will publish the site.

## Editing content

Most portfolio content lives in `src/App.jsx` inside these arrays:

- `gameProjects`
- `softwareProjects`
- `outdoorHighlights`
- `experience`

Replace placeholder links with real GitHub, itch.io, Steam, video demo, or writeup links.
