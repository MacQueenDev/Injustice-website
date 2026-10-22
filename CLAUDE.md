# Injustice-Website

A complete website for Injustice Mobile, providing guides on characters, combat, progression, game modes, and tips.

## Build & Development

The site uses Tailwind CSS for styling with PostCSS. All source files are in the root.

### Build Commands

```bash
# Generate tailwind.css from source
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/tailwind.css --config tailwind.config.js

# Alternative: using postcss.config.js
npx tailwindcss -i ./assets/css/input.css -o ./assets/css/tailwind.css --config postcss.config.js
```

### Project Structure

```
├─ assets/
│  ├─ css/         ← input.css and output tailwind.css
│  ├─ img/         ← character images and icons
│  └─ img/characters/ ← hero images
├─ dados/          ← external wiki data (JSON/html)
├─ characters.html ← character grid & modal
├─ conclusion.html ← conclusion page
├─ combat.html     ← combat strategies guide
├─ index.html      ← homepage with hero & navigation menu
├─ modes.html      ← game modes guide
├─ progression.html ← character progression guide
├─ style.css       ← custom CSS with CSS variables
├─ tips.html       ← tips and strategies
└─ .gitignore
```

### Configuration Files

- `tailwind.config.js` — Tailwind CSS configuration (colors, fonts, breakpoints)
- `postcss.config.js` — PostCSS plugins (tailwindcss, autoprefixer)
- `.gitignore` — Excludes `node_modules/`, `package-lock.json`, `package.json`, `assets/css/tailwind.css`
- `package.json` — devDependencies: `tailwindcss@^3.4.19`

### Design System

The site uses a consistent design with the following CSS variables:

```css
:root {
  --ink-950: #07080c;
  --ink-900: #0b0d13;
  --ink-850: #0f1219;
  --ink-800: #141822;
  --ink-700: #1c2130;
  --ink-600: #252b3d;
  --ink-500: #333a50;
  
  --brand: #e11d48;       /* Primary accent (red/pink) */
  --brand-light: #fb7185;
  --brand-dark: #9f1239;
  
  --gold: #f5c451;        /* Gold accent */
  --gold-light: #fde68a;
  --gold-dark: #b8912f;
  
  --aqua: #22d3ee;        /* Aqua accent */
  --aqua-dark: #0e7490;
  
  --accent-primary: #ff4767;      /* Primary action color */
  --accent-secondary: #46d396;    /* Secondary action color */
  
  --bg-panel: rgba(20,24,34,0.92); /* Panel/background overlay */
  --border: rgba(255,255,255,0.08); /* Borders */
  --glass: rgba(255,255,255,0.05); /* Glassmorphism effect */
  
  --text-main: #eae7f0;           /* Main text color */
  --text-muted: #9aa3b8;          /* Secondary text color */
}
```

## Adding New Pages

Add new HTML files following the pattern:
- Use `<body class="bg-ink-950 text-text-main">` for page background/text
- Header uses `<header class="app-header">` with the logo + stat user info
- Footer uses `<footer class="app-footer">` with the container pattern
- Navigation uses `<ul class="flex flex-wrap gap-2 text-center justify-center mb-8">` pattern

## Character Cards

Characters are displayed in a responsive grid using `grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6`. Each card has:
- Tier and level labels
- Portrait image (falls back to placeholder on error)
- Name and stats overlay
- Click handler to open modal

See `characters.html` for the complete implementation.