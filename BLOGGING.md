# Blog workflow

The blog is deliberately static: each published post has a Markdown draft and a matching HTML page. This keeps the public pages fast, accessible, and independent of a JavaScript renderer.

## Publishing a post

1. Write the post in Markdown in `posts/<slug>.md`. The first post source is `posts/context-engineering.md`.
2. Create `blog/<slug>.html` from the article structure in `blog/context-engineering.html`.
   - Set a unique `<title>`, description, canonical URL, and Open Graph fields.
   - Add the date and estimated reading time.
   - If a title introduces a term, include its pronunciation and a plain-language definition in the `term-definition` block.
3. Add the entry, newest first, to `blog/index.html` with its title, date, reading time, description, and link.
4. Feature the newest entry in the Blog section on `index.html` when appropriate.
5. Check links locally with the BrowserSync command in `AGENTS.md`, then review both desktop and mobile layouts.

## Conventions

- Slugs are lowercase and hyphenated, e.g. `context-engineering`.
- Keep the Markdown draft as the writing source; update its matching HTML before publishing.
- Use an ISO date in metadata if date-specific structured data is added later, and a human-readable date in the page.
- Keep posts sparse: no cards, feeds, or client-side Markdown dependencies.
