<template>
  <div>
    <!-- Start Navbar -->
    <PageHeader :mainContent="mainContent" />

    <Sidebar :mainContent="mainContent" :about="about.attributes" />

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

      <h2 class="section-heading" id="co-nabizim">
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

      <Gallery
        :images="images"
        :title="mainContent.attributes.titulek"
        :heading="`Galerie`"
      />

      <PostMin :posts="posts" />
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
import Slider from "../components/Slider";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import About from "../components/About";
import PostMin from "../components/PostMin";
import { encodeID, replaceDiacritics } from "../plugins/utils";

export default {
  components: {
    PageHeader,
    Sidebar,
    Slider,
    Gallery,
    Section,
    About,
    PostMin
  },
  data: function () {
    return {
      slides: [],
      images: [],
      mainContent: {},
      sections: [],
      about: {},
      ogImage: '',
      posts: []
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
        { name: 'google-site-verification', content: '-SFmZ9hcc33r5cnur1SNM-zBxmzWxGVLQuyZ61pGDEg' },
        { name: 'seznam-wmt', content: 'lN9Uuhg9TreFa5LH7qaoi1TErZJdSZfD' }


      ],
      link: [{
        rel: 'canonical',
        href: 'https://www.nehtova-modelaz-plzen.cz'
      }]
    }
  },
  created () {
    const mainContentMarkup = require(`~/content/main.md`);
    this.mainContent = mainContentMarkup;

    const aboutContentMarkup = require(`~/content/about.md`);
    this.about = aboutContentMarkup;

    const ogImage = require(`~/assets${this.mainContent.attributes.main_image}`);
    this.ogImage = ogImage;

  },
  async asyncData () {

    const galleryMarkup = require(`~/content/gallery.md`);
    const images = galleryMarkup.attributes.gallery;


    const sectionsAll = await require.context("~/content/sections/", true, /\.md$/)
    const sections = sectionsAll.keys().map((key) => {
      // give back the value of each post context
      sectionsAll(key).attributes.id = encodeID(replaceDiacritics((sectionsAll(key).attributes.titulek).toLowerCase()));
      return sectionsAll(key)
    });

    const limit = 2;

    const postsAll = await require.context("~/content/blog/", true, /\.md$/)
    const postsBig = postsAll.keys().map((key) => {
      postsAll(key).attributes.url = key.split('.').slice(0, -1).join('.').split('/').slice(1).join('/');
      postsAll(key).attributes.id = encodeID(replaceDiacritics((postsAll(key).attributes.titulek).toLowerCase()));
      return postsAll(key)
    });
    const posts = postsBig.slice(0, limit);


    return { images, sections, posts };
  }
}


</script>

