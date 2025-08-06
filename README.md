# nehtova-modelaz

> Personal website built with [Nuxt.js](https://nuxtjs.org).

This repository contains the source for a small static site. It uses Nuxt in SPA mode with some AMP tweaks and responsive image generation.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Project Structure

- **assets/** – global CSS and images used by components.
- **components/** – Vue components such as `Header.vue`, `Gallery.vue` and `Price.vue`.
- **content/** – markdown files that provide page content. These are loaded with `frontmatter-markdown-loader`.
- **pages/** – Nuxt page components defining the routes of the site.
- **plugins/** – helper utilities. `plugins/utils.js` contains helpers for creating URL friendly IDs and removing diacritics.
- **static/** – files served directly without processing (e.g. `favicon.ico`).

### Nuxt configuration

`nuxt.config.js` configures AMP-friendly HTML output and responsive image handling via `nuxt-responsive-loader`. Markdown files are registered as routes using the `generate` option.

## TODOS

- in component price load prices from cms
