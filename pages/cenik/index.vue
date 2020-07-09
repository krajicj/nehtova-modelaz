<template>
  <div>
    <!-- Start Navbar -->
    <PageHeader :mainContent="mainContent" />
    <Sidebar :mainContent="mainContent" :about="about.attributes" />

    <main id="content" role="main">
      <div class="web-section-top">
        <div class="web-content">
          <h1 class="section-heading">
            Ceník
          </h1>
        </div>
      </div>
      <div class="web-content">
        <nuxt-link to="/" class="button btn-center">Hlavní stránka</nuxt-link>
      </div>
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
import PageHeader from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import About from "../../components/About";
import { encodeID, replaceDiacritics } from "../../plugins/utils";

export default {
  components: {
    PageHeader,
    Sidebar,
    About
  },
  data: function () {
    return {
      mainContent: {},
      prices: [],
      about: {},
      ogImage: ''
    }
  },
  head () {
    return {
      title: 'Ceník - ' + this.mainContent.attributes.nadpis + ' ' + this.mainContent.attributes.nadpis3,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { name: 'description', content: `${this.mainContent.attributes.obsah}` },
        { name: 'og:title', content: `${this.mainContent.attributes.titulek}` },
        { name: 'og:description', content: `${this.mainContent.attributes.obsah}` },
        { name: 'og:image', content: this.ogImage },
        { name: 'google-site-verification', content: '-SFmZ9hcc33r5cnur1SNM-zBxmzWxGVLQuyZ61pGDEg' }


      ],
      link: [{
        rel: 'canonical',
        href: 'https://www.nehtova-modelaz-plzen.cz/aktuality'
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

    const priceMarkup = require(`~/content/cenik.md`);
    const prices = priceMarkup.attributes.sluzba;

    return { prices };
  }
}

</script>
