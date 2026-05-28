# yupengtang.github.io

Source for my personal site. Jekyll + GitHub Pages.

**Site:** [yupengtang.github.io](https://yupengtang.github.io)

## Local dev

```bash
bundle install
jekyll serve -l -H localhost
```

Then open `localhost:4000`.

## Structure

- `_pages/` — main pages (about, cv, portfolio, teaching)
- `_portfolio/` — project write-ups
- `_sass/_custom.scss` — all custom styling, dark mode, design tokens
- `_includes/` — partials (masthead, sidebar, footer)

## Notes

- Dark mode: `Ctrl+K` or the toggle button
- Print stylesheet included for the CV page
- Built on top of [Academic Pages](https://github.com/academicpages/academicpages.github.io)
