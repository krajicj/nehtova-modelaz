<template>
  <div>
    <!-- Start Navbar -->
    <PageHeader :mainContent="mainContent" />
    <Sidebar :mainContent="mainContent" :about="about.attributes" />

    <main id="content" role="main">
      <h2 class="section-heading">
        Aktuality
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
import PageHeader from "../components/Header";
import Sidebar from "../components/Sidebar";
import Section from "../components/Section";
import About from "../components/About";

export default {
  components: {
    PageHeader,
    Sidebar,
    Section,
    About
  },
  data: function () {
    return {
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
    const sectionsAll = await require.context("~/content/blog/", true, /\.md$/)
    const sections = sectionsAll.keys().map((key) => {
      sectionsAll(key).attributes.id = encodeID(sectionsAll(key).attributes.titulek).toLowerCase();
      return sectionsAll(key)
    });


    return { sections };
  }
}

function encodeID (s) {
  if (s === '') return '_';
  return s.replace(/[^a-zA-Z0-9.-]/g, function (match) {
    return '_';
  });
}
</script>
