<template>
  <div>
    <!-- Start Navbar -->
    <header
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

    <Sidebar :sections="sections" />

    <Slider :slides="slides" :mainContent="mainContent.attributes" />
    <!-- End Navbar -->

    <main id="content" role="main">
      <article class="px3">
        <h2 id="story" class="my4 theme2-anchored">
          {{ mainContent.attributes.obsah_nadpis }}
        </h2>
        <div v-html="mainContent.html"></div>

        <hr />
        <h2 class="my4 theme2-anchored">
          {{ mainContent.attributes.sekce_nadpis }}
        </h2>

        <Section
          v-for="section in sections"
          :key="section.titulek"
          :section="section.attributes"
          :id="section.attributes.id"
        />
        <hr />
        <About :about="about" />

        <!-- Gallery -->

        <Gallery :images="images" />
      </article>
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
      about: {}
    }
  },
  head () {
    return {
      title: this.mainContent.attributes.titulek,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: this.mainContent.attributes.nadpis, content: `${this.mainContent.attributes.titulek} - ${this.mainContent.attributes.nadpis3}` }
      ]
    }
  },
  created () {
    const mainContentMarkup = require(`~/content/main.md`);
    this.mainContent = mainContentMarkup;

    const aboutContentMarkup = require(`~/content/about.md`);
    this.about = aboutContentMarkup;

  },
  async asyncData () {
    //  const slides = [];
    const images = [];

    /*
        const imgs = await require.context('~/static/slider/', true, /\.jpg$/);
        imgs.keys().forEach(key => (slides.push("slider/" + key)));
    */
    const imgsGal = await require.context('~/static/gallery/', true, /\.jpg$/);
    imgsGal.keys().forEach(key => (images.push("gallery/" + key)));


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
