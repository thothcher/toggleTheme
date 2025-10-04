
# toggleTheme (darktheme)

A tiny static web project that demonstrates a theme toggle (light/dark) using minimal HTML, CSS, and JavaScript.

## Overview

This repository contains a simple example for switching between light and dark themes in a webpage. It's intended for learning, quick prototyping, or embedding into other projects.

Features:
- Toggle between light and dark themes
- Uses CSS custom properties for easy theming
- Small, dependency-free JavaScript

## Files

- `index.html` — The demo page and UI for the theme toggle.
- `style.css` — Styling and CSS variables for light and dark themes.
- `script.js` — JavaScript that handles the toggle logic and persists the user's preference.
- `README.md` — This file.

## How it works (summary)

The demo uses CSS custom properties (variables) to define colors for the light and dark themes. The JavaScript toggles a `data-theme` attribute (or a class) on the document's root element and stores the user's preference in `localStorage` so the choice persists across page reloads.

## Usage

1. Open `index.html` in your browser.
2. Click the theme toggle control to switch between light and dark modes.

## Development

No build tools are required — the project is plain HTML/CSS/JS. To develop or test:

1. Open the folder in your editor or serve it with a static server (optional).

Optional: Serve with a simple HTTP server (Python 3):

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000` and open `index.html`.

## Notes and Next Steps

- Consider adding an accessible toggle with ARIA attributes.
- Add animations for smoother transitions between themes.
- Provide system-preference detection (`prefers-color-scheme`) as a default.

## License

This project is provided under the MIT License. See LICENSE file if present.
