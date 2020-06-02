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

    <Sidebar />

    <Slider :slides="slides" :mainContent="mainContent" />
    <!-- End Navbar -->

    <main id="content" role="main">
      <article class="px3">
        <h2 id="story" class="my4 theme2-anchored">
          {{ mainContent.titulek }}
        </h2>
        <p class="mb1 ampstart-dropcap">
          {{ mainContent.obsah }}
        </p>

        <Section
          v-for="section in sections"
          :key="section.titulek"
          :section="section.attributes"
        />

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
  created () {
    const mainContentMarkup = require(`~/content/main.md`);
    this.mainContent = mainContentMarkup.attributes;

    const aboutContentMarkup = require(`~/content/about.md`);
    this.about = aboutContentMarkup.attributes;

  },
  async asyncData () {
    const slides = [];
    const images = [];


    const imgs = await require.context('~/static/slider/', true, /\.jpg$/);
    imgs.keys().forEach(key => (slides.push("slider/" + key)));

    const imgsGal = await require.context('~/static/gallery/', true, /\.jpg$/);
    imgsGal.keys().forEach(key => (images.push("gallery/" + key)));


    const sectionsAll = await require.context("~/content/sections/", true, /\.md$/)
    const sections = sectionsAll.keys().map((key) => {
      // give back the value of each post context
      return sectionsAll(key)
    });


    return { slides, images, sections };
  }
}
</script>
