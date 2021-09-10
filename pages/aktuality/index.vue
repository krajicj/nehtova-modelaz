<template>
  <div>
    <!-- Start Navbar -->
    <PageHeader :mainContent="mainContent" />
    <Sidebar :mainContent="mainContent" :about="about.attributes" />

    <main id="content" role="main">
      <div class="web-section-top">
        <div class="web-content">
          <h1 class="section-heading">Aktuality</h1>
        </div>
      </div>
      <div class="web-content">
        <Post :posts="posts" />

        <nuxt-link
          v-if="hasNextPage"
          to="/aktuality/strana/2"
          class="button btn-center"
          >Zobrazit starší příspěvky</nuxt-link
        >

        <nuxt-link to="/" class="button btn-center">Hlavní stránka</nuxt-link>

      </div>
      <About :about="about" />

      <!-- Gallery -->
    </main>

    <!-- Start Footer -->
    <PageFooter :about="about.attributes" :mainContent="mainContent" />
    <!-- End Footer -->
  </div>
</template>

<script>
import PageHeader from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Post from "../../components/Post";
import About from "../../components/About";
import PageFooter from "../../components/Footer";
import { encodeID, replaceDiacritics } from "../../plugins/utils";
import { ITEM_PER_PAGE } from "../../plugins/constants";

export default {
  components: {
    PageHeader,
    Sidebar,
    Post,
    About,
    PageFooter
  },
  data: function () {
    return {
      mainContent: {},
      posts: [],
      about: {},
      ogImage: '',
      hasNextPage: false
    }
  },
  head () {
    return {
      title: 'Aktuality - ' + this.mainContent.attributes.nadpis + ' ' + this.mainContent.attributes.nadpis3,
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
    const postsAll = await require.context("~/content/blog/", true, /\.md$/)
    const posts = postsAll.keys().map((key) => {
      postsAll(key).attributes.url = key.split('.').slice(0, -1).join('.').split('/').slice(1).join('/');
      postsAll(key).attributes.id = encodeID(replaceDiacritics((postsAll(key).attributes.titulek).toLowerCase()));
      return postsAll(key)
    }).sort(function (a, b) {
      var dateA = new Date(a.attributes.date), dateB = new Date(b.attributes.date);
      return dateB - dateA;
    }).slice(0, ITEM_PER_PAGE);

    let hasNextPage = false;
    if (postsAll.keys().length > ITEM_PER_PAGE) {
      hasNextPage = true;
    }


    return { posts, hasNextPage };
  }
}

</script>
