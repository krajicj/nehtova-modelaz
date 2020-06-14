import path from "path";

const modifyHtml = (html) => {
  // Add amp-custom tag to added CSS
  html = html.replace(/<style data-vue-ssr/g, '<style amp-custom data-vue-ssr')
  // Remove every script tag from generated HTML
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  // Add AMP script before </head>
  const ampScript = '<script async src="https://cdn.ampproject.org/v0.js"></script><script custom-element="amp-carousel" src="https://cdn.ampproject.org/v0/amp-carousel-0.2.js" async=""></script><script custom-element="amp-image-lightbox" src="https://cdn.ampproject.org/v0/amp-image-lightbox-0.1.js" async=""></script><script custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js" async=""></script><script async custom-element="amp-lightbox-gallery" src="https://cdn.ampproject.org/v0/amp-lightbox-gallery-0.1.js"></script>'

  html = html.replace('</head>', ampScript + '</head>')
  return html
}

export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,minimum-scale=1' }
    ],
    link: [
      { rel: 'canonical', href: '/' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Roboto:wght@100;300;400;500;700&display=swap' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,700%7CLora%7CLato' },
    ]
  },
  css: ['~/assets/main.css'],
  loading: false, // Disable loading bar since AMP will not generate a dynamic page
  render: {
    // Disable resourceHints since we don't load any scripts for AMP
    resourceHints: false
  },
  modules: ['nuxt-responsive-loader'],
  responsiveLoader: {
    // name: 'img/hello-world-[width].[ext]',
    // sizes: [200, 500],
    min: 640, // minimum image width generated
    max: 1300, // maximum image width generated
    steps: 5, // five sizes per image will be generated
    placeholder: false, // no placeholder will be generated
    quality: 80, // images are compressed with medium quality
  },
  hooks: {
    // This hook is called before generatic static html files for SPA mode
    'generate:page': (page) => {
      page.html = modifyHtml(page.html)
    },
    // This hook is called before rendering the html to the browser
    'render:route': (url, page, { req, res }) => {
      page.html = modifyHtml(page.html)
    }
  },
  build: {
    /*
     ** Using frontmatter-markdown-loader here to parse md files
     */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content')
      });
    }
  },
}