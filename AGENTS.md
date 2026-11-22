# Project guide

MACreatives. is a client-rendered React/Vite portfolio. Tailwind CSS v4 is integrated through the Vite plugin; the primary visual system lives in src/styles.css. Framer Motion handles restrained reveals and respects reduced-motion preferences through MotionConfig. Lucide supplies icons.

## Architecture

- index.html: static document head, SEO and social metadata, font links, React entry point.
- src/main.jsx: root mounting and global styles.
- src/App.jsx: section composition, mobile navigation, active-section observer, portfolio filtering, selected project state.
- src/data/content.js: editable profile, projects, filters, services, and unconfirmed toolkit entries.
- src/components/ProjectDialog.jsx: native modal dialog, MP4/YouTube/Vimeo support, fallback concept preview, project metadata and gallery.
- src/components/ContactForm.jsx: validated Netlify Forms submission, status feedback and honeypot.
- src/utils.js: local asset URLs through Netlify Image CDN. SVGs are passed through.
- public/img: studio and project reference assets; original SVG design concepts.
- public/media: user-supplied videos and résumé.
- public/__forms.html: static Netlify form discovery definition. Field names must match the React form.
- netlify.toml: Vite build and dist publishing, basic security headers.

## Conventions and decisions

Use functional React components and keep editable content separate from rendering. Palette: #101010, #252525, #f2ede4, #e6ae59, with readable muted text. Use Cormorant Garamond for editorial headlines and Manrope for body text. Maintain responsive section anchors; routing and SPA rewrites are unnecessary.

Do not invent personal contact information, experience, software proficiency, client outcomes, or completed projects. The initial projects are labeled sample concepts, their photos are visual references, and no videos are fabricated. Personal links remain null until confirmed. The portrait is intentionally an abstract placeholder. Retain concept labels until real work is supplied. Toolkit labels explicitly indicate unconfirmed entries.

Only one selected project player is mounted at once. Keep native dialog accessibility, Escape behavior, focus restoration, body scroll locking, and aspect ratios intact. Do not add autoplay to the gallery. Add new media types in the dialog rather than project cards.

The contact form uses Netlify Forms, not custom backend storage. Preserve the static skeleton and .netlify/features/netlify-forms marker. Never expose credentials. No database is needed for the portfolio's static content. Future persistent features must use Netlify primitives.

Read README.md for content editing and deployment instructions. Platform automation runs the production build; this initial implementation was reviewed through source inspection without local build/start/test commands.
