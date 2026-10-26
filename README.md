# AFCON FINISHES — portable static website

A complete responsive website based on the supplied approved homepage concept. Everything needed to run it is inside `dist/`. No build system, npm install, database, account, paid plugin, external font request or ChatGPT backend is required.

## Files

- `dist/index.html`: page text, real navigation, section structure and static fallback links.
- `dist/styles.css`: colours, spacing, responsive layouts and optional Open Sauce font setup.
- `dist/site-config.js`: the single image list, image descriptions, captions, phone details and optional email.
- `dist/site.js`: mobile navigation and configuration application.
- `dist/assets/images/`: separate optimized WebP photographs and transparent logo assets.
- `dist/assets/fonts/`: add licensed Open Sauce WOFF2 files here if available.
- `ASSETS.md`: image provenance and hero-generation brief.
- `VERIFICATION.md`: checks completed and limits.

Only `dist/` should be deployed. These instructions and documentation stay outside it.

## Preview on your computer

1. Download and unzip the project completely. Keep the folder structure intact.
2. Open `dist/index.html` in your browser. It works directly from disk.
3. Alternatively, if Python 3 is installed, open a terminal in the project folder and run:

   ```sh
   python3 -m http.server 8000 --directory dist
   ```

   On Windows, `py -m http.server 8000 --directory dist` also works.
4. Visit `http://localhost:8000`. Press Ctrl+C in the terminal to stop the server.
5. Resize the browser to inspect the mobile layout. The Menu button appears on narrow screens.

## Replace photographs and captions

Open `dist/site-config.js` in a plain text or code editor. Each named image (`hero`, `venetian`, `textured`, `feature`, `repairs`, `residential`, `commercial`, `contact`) has:

- `src`: local file path relative to `dist/index.html`.
- `alt`: a concise description for screen readers.
- `caption`: the visible caption, where that image has one.

To replace a photograph:

1. Save your new photo inside `dist/assets/images/` with a descriptive lowercase filename, such as `regina-venetian-plaster-living-room.webp`. Avoid spaces.
2. Change only the relevant `src` value, for example `assets/images/regina-venetian-plaster-living-room.webp`.
3. Update its `alt` and, where present, `caption` in the same file. Do not remove the surrounding quotes or commas.
4. Refresh the page. If necessary, use a hard refresh to clear the old cached photo.
Recommended source sizes: hero about 2000px wide, background about 1600px wide, finish cards 700–1000px wide, residential/commercial images 1200px wide. Use WebP or compressed JPEG. Prefer photos around 4:3 for space images and square for finish cards. Hero and backgrounds crop to fill; adjust the corresponding `object-position` in `styles.css` if the subject gets cut off.

The HTML also contains initial image paths for display before JavaScript loads and if JavaScript is disabled. For a fully updated no-JavaScript fallback, mirror new paths, descriptions and captions in `index.html`; the normal website reads the central configuration automatically.

## Edit wording and phone details

- Edit headings, service descriptions, biographies and service area in `dist/index.html`. Preserve the IDs (`finishes`, `spaces`, `about`, `contact`) because navigation uses them.
- Edit `phone.display` and `phone.international` in `dist/site-config.js`. Keep international format, e.g. `+13063512564`.
- If changing the phone number, also update the initial `tel:` and `sms:` links and visible number in `index.html`, including its description meta tag, for search engines and visitors without JavaScript.
- Page title and search description are near the top of `index.html`.
- Colour variables are at the beginning of `styles.css`.

Call Diego uses `tel:+13063512564`. Text Your Project uses `sms:+13063512564`. These links open the visitor's available phone or messaging application; desktop computers may not have one configured. Estimate buttons move to the contact section. There is no inquiry form or simulated submission.

## Add email later

In `dist/site-config.js`, change `email: ''` to your real email address inside quotes. A real `mailto:` link then appears in the contact section automatically. Leave it empty until an address exists. For a no-JavaScript email fallback, you can also replace the hidden `email-contact` paragraph in `index.html` with your actual mail link and remove its `hidden` attribute. A mail link opens an email application; it does not submit a website form.

## Add licensed Open Sauce later

No Open Sauce font files or licence were supplied. The website uses Arial/Helvetica for body/navigation and Georgia for headings, without downloading fonts from third parties.

1. Obtain webfont files with a licence that permits web embedding.
2. Copy regular and semibold WOFF2 files to `dist/assets/fonts/` as `open-sauce-regular.woff2` and `open-sauce-semibold.woff2`.
3. Uncomment the two `@font-face` rules at the very top of `dist/styles.css` (remove the surrounding `/*` and `*/`, retaining the explanatory sentence as a CSS comment).
4. The existing `--body` font stack already names Open Sauce first. Refresh and confirm both files load.

## Deploy through GitHub to your own Cloudflare Pages account

These are instructions for when you choose to publish. Your private Sites preview does not automatically connect to your GitHub, Cloudflare account or domain.

1. Create a new GitHub repository (a private repository is suitable for keeping source private).
2. Upload the contents of this extracted project folder at the repository root. You must see `dist/index.html` in GitHub, not an extra nested project folder. GitHub's **Add file → Upload files** supports uploading the `dist` folder and the documentation. Commit the upload to `main`.
3. In Cloudflare, open **Workers & Pages → Create application → Pages → Import an existing Git repository** (labels may vary slightly).
4. Connect GitHub and choose this repository.
5. Use these settings:

   | Setting | Value |
   | --- | --- |
   | Production branch | `main` |
   | Framework preset | None |
   | Build command | `exit 0` |
   | Build output directory | `dist` |
   | Root directory | Leave blank (repository root) |
   | Environment variables | None required |

6. When you are ready for a public site, select the Cloudflare deployment action. It creates a `pages.dev` URL. A private GitHub repository does **not** make the resulting Pages website private. Do not deploy there yet if you want to keep the website private.
7. Check that URL on desktop and a real phone, including the call and SMS buttons.
8. Future commits to `main` update the Pages site. A custom domain can be connected separately when you are ready; none has been connected as part of this delivery.

If you see a 404, confirm the output directory is `dist` and the repo contains `dist/index.html`.

Official reference, checked for this delivery: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## Accessibility and portability

Semantic sections, a skip link, visible keyboard focus, native anchor links, an accessible mobile menu with expanded state and Escape handling, descriptive image alternatives, and reduced-motion support are included. Without JavaScript, the navigation stays visible and all essential content/contact links work. No external scripts, cookies, analytics, tracking or remote photo URLs are used.
