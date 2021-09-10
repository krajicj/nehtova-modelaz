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

        <Paginator :page="page" :pagesNum="pagesNum" />
        <nuxt-link to="/" class="button btn-center">Hlavní stránka</nuxt-link>
        
      </div>
      <About :about="about" />

      <!-- Gallery -->
    </main>

    <PageFooter :about="about.attributes" :mainContent="mainContent" />
  </div>
</template>

<script>
import PageHeader from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Post from "../../../components/Post";
import About from "../../../components/About";
import PageFooter from "../../../components/Footer";
import { encodeID, replaceDiacritics } from "../../../plugins/utils";
import { ITEM_PER_PAGE } from '../../../plugins/constants';
import Paginator from '../../../components/Paginator.vue';

export default {
  components: {
    PageHeader,
    Sidebar,
    Post,
    About,
    PageFooter,
    Paginator
  },
  data: function () {
    return {
      mainContent: {},
      about: {},
      ogImage: '',
      page: '1'
      
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
  async asyncData ({ params }) {
    const page = params.id;
    const itemPerPage = ITEM_PER_PAGE;
    const offsetEnd = page * itemPerPage;
    const offsetStart = offsetEnd - itemPerPage;

    const postsAll = await require.context("~/content/blog/", true, /\.md$/)    

    let posts = postsAll.keys().map((key) => {
      postsAll(key).attributes.url = key.split('.').slice(0, -1).join('.').split('/').slice(1).join('/');
      postsAll(key).attributes.id = encodeID(replaceDiacritics((postsAll(key).attributes.titulek).toLowerCase()));
      return postsAll(key)
    }).sort(function (a, b) {
      var dateA = new Date(a.attributes.date), dateB = new Date(b.attributes.date);
      return dateB - dateA;
    });

    const pagesNum = Math.ceil(posts.length / itemPerPage);

    posts = posts.slice(offsetStart, offsetEnd);

    return { posts, pagesNum, page };
  }
}
</script>

<style>
</style>