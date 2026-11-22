# MACreatives.

A responsive cinematic creative portfolio for Mheil Andrei Cenita, built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons. Netlify Forms handles inquiries, and Netlify Image CDN delivers responsive WebP imagery. No custom backend or database is required.

## Run locally

Install Node.js 22 or later, then run `npm ci`. The committed `.npmrc` includes development dependencies so Vite and the React/Tailwind build plugins are available during deployment. Use `netlify dev --port 8889` for the full local experience, including image transformations. `npm run dev` also starts Vite, but Netlify image transformations and form processing require Netlify. Contact submissions are processed on the deployed site. Run `npm run build` to create `dist`, or `npm run preview` to preview an existing build.

## Personal information and contact details

Edit `src/data/content.js`. The `profile` object contains the name, email, LinkedIn, Instagram, portfolio link, and résumé URL. Set null fields to your actual values; no fictional addresses or accounts are shipped. For example, set `resume` to `/media/resume.pdf` after adding your PDF to `public/media`. The download button and social links activate when their corresponding URLs are supplied. The inquiry form works independently of these contact links.

About copy is in `src/App.jsx`. Update the title and SEO/social descriptions in the `index.html` head when changing the brand. The Open Graph image is supplied by the hosting platform.

## Add or edit portfolio projects

The `projects` array in `src/data/content.js` is the source of truth. Duplicate an entry, give it a unique `id`, and update its title, category, label, description, thumbnail, alt text, aspect, type, role, tools, process, media, and gallery. Categories must match one of the `filters` entries. Filtering and dialogs update automatically.

All shipped entries are explicitly labeled sample concepts and explorations. Stock photographs are visual references, not representations of completed client work. Replace these entries with your real projects before presenting them as completed work. Update the concept labels in the card and dialog components when publishing verified completed projects.

### Media formats

- MP4: `media: { type: 'mp4', src: '/media/project.mp4' }`
- YouTube: `media: { type: 'youtube', id: 'VIDEO_ID' }`
- Vimeo: `media: { type: 'vimeo', id: '123456789' }`
- Still-image preview: `media: null`
- Image gallery: `gallery: [{ src: '/img/detail.jpg', alt: 'Describe the image' }]`

Use `aspect: '16 / 9'` or `'9 / 16'`. Portrait previews are contained, and playback preserves the original ratio. Only the selected project mounts a player. No videos autoplay. The native dialog handles focus trapping and Escape; click the backdrop or close button to dismiss it. MP4 playback failures show inline feedback. External embeds depend on the video's privacy and embedding settings.

## Replace imagery and portrait

Place images in `public/img` and videos in `public/media`. References begin with `/img/` or `/media/`, without `public`. Update image alternative text alongside each image. `src/utils.js` creates Netlify Image CDN URLs. SVG artwork is served directly. Replace `/img/studio.png` to update the hero. The hero is a generated studio image; project photography is downloaded from Unsplash, and the two design previews are original SVG concepts. Replace the aperture portrait placeholder in the About section with your real portrait and descriptive alt text.

## Toolkit and services

Edit `toolkit` and `services` in `src/data/content.js`. Toolkit items are marked “To be confirmed” to avoid claiming expertise. Remove or change that status in `src/App.jsx` after confirming actual tools. Project tools are independently editable arrays.

## Contact form

The React form is in `src/components/ContactForm.jsx`. The matching static definition in `public/__forms.html` enables Netlify's build-time detection. Keep the form name and every field name synchronized between the files. Fields are name, email, project-type, message, form-name, and the bot-field honeypot. Submissions are URL-encoded and sent to the static form path, with validation and success/error feedback. A failed request preserves the visitor's text. The deployment feature marker enables form detection. View submissions in the Netlify Forms dashboard and optionally configure notifications there.

## Deploy to Netlify

Connect the repository to Netlify. The included `netlify.toml` configures build command `npm run build` and publish directory `dist`. No application secrets are required. No SPA redirects are necessary because navigation uses section anchors on a single page. Deploy through Netlify's repository workflow. Verify form registration and submit a real inquiry after deployment.

## Accessibility and motion

The site includes semantic sections, a skip link, labeled form fields, visible focus rings, keyboard-accessible dialogs, responsive navigation, and reduced-motion support. Animations use opacity and transform. Web fonts include local serif/sans-serif fallbacks.
