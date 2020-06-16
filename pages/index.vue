<template>
  <div>
    <!-- Start Navbar -->
    <header
      id="top"
      class="ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4 "
    >
      <div
        role="button"
        aria-label="open sidebar"
        on="tap:header-sidebar.toggle"
        tabindex="0"
        class="ampstart-navbar-trigger  pr2  "
      >
        ☰
      </div>
    </header>

    <Sidebar :sections="sections" :about="about.attributes" />

    <Slider :slides="slides" :mainContent="mainContent.attributes" />
    <!-- End Navbar -->

    <main id="content" role="main">
      <div class="web-section-top">
        <div class="web-content">
          <h2 id="uvod" class="section-heading">
            {{ mainContent.attributes.obsah_nadpis }}
          </h2>
          <div v-html="mainContent.html" class="main-content"></div>
        </div>
      </div>

      <h2 class="section-heading">
        {{ mainContent.attributes.sekce_nadpis }}
      </h2>

      <Section
        v-for="(section, index) in sections"
        :key="section.titulek"
        :section="section"
        :id="section.attributes.id"
        :index="index"
        :count="sections.length"
      />

      <About :about="about" />

      <!-- Gallery -->

      <Gallery :images="images" :title="mainContent.attributes.titulek" />
    </main>

    <!-- Start Footer -->
    <footer class="ampstart-footer flex flex-column items-center px3 ">
      <small>
        © Alena Krajícová
      </small>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import About from "../components/About";

export default {
  components: {
    Sidebar,
    Slider,
    Gallery,
    Section,
    About
  },
  data: function () {
    return {
      slides: [],
      images: [],
      mainContent: {},
      sections: [],
      about: {},
      ogImage: ''
    }
  },
  head () {
    return {
      title: this.mainContent.attributes.titulek,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { name: 'description', content: `${this.mainContent.attributes.obsah}` },
        { name: 'og:title', content: `${this.mainContent.attributes.titulek}` },
        { name: 'og:description', content: `${this.mainContent.attributes.obsah}` },
        { name: 'og:image', content: this.ogImage },
        { name: 'google-site-verification', content: '-SFmZ9hcc33r5cnur1SNM-zBxmzWxGVLQuyZ61pGDEg' }


      ]
    }
  },
  created () {
    const mainContentMarkup = require(`~/content/main.md`);
    this.mainContent = mainContentMarkup;

    const aboutContentMarkup = require(`~/content/about.md`);
    this.about = aboutContentMarkup;

    const ogImage = require(`~/assets/og-nehtova-modelaz.jpg`);
    this.ogImage = ogImage;

  },
  async asyncData () {
    //  const slides = [];
    //const images = [];

    /*
        const imgs = await require.context('~/static/slider/', true, /\.jpg$/);
        imgs.keys().forEach(key => (slides.push("slider/" + key)));
    */
    /*
     const imgsGal = await require.context('~/static/gallery/', true, /\.jpg$/);
     imgsGal.keys().forEach(key => {
       images.push("gallery/" + key);
     });
 */
    const galleryMarkup = require(`~/content/gallery.md`);
    const images = galleryMarkup.attributes.gallery;



    const sectionsAll = await require.context("~/content/sections/", true, /\.md$/)
    const sections = sectionsAll.keys().map((key) => {
      // give back the value of each post context
      sectionsAll(key).attributes.id = encodeID(sectionsAll(key).attributes.titulek).toLowerCase();
      return sectionsAll(key)
    });


    return { images, sections };
  }
}

function encodeID (s) {
  if (s === '') return '_';
  return s.replace(/[^a-zA-Z0-9.-]/g, function (match) {
    return '_';
  });
}
</script>
