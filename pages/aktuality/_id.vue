<template>
  <div>
    <!-- Start Navbar -->
    <PageHeader :mainContent="mainContent" />

    <Sidebar :mainContent="mainContent" :about="about.attributes" />

    <!-- End Navbar -->

    <main id="content" role="main">
      <div class="web-section-top">
        <div class="web-content">
          <h1 class="section-heading h1-mobile">
            {{ post.attributes.titulek }}
          </h1>
        </div>
      </div>
      <div class="web-content">
        <div class="web-section">
          <div class="web-content post-text">
            <div class="web-section-type">
              <div class="box-image flex-item section-right">
                <amp-img
                  class="post-img"
                  :srcset="require(`~/assets${post.attributes.obrazek}`).srcSet"
                  width="600"
                  height="400"
                  :alt="post.attributes.titulek"
                  sizes="(min-width: 768px) 500px, 80vw"
                  layout="responsive"
                ></amp-img>
              </div>
              <div class="box-text flex-item section-left">
                <div v-if="hasDate" class="date-blog">
                  <CalendarIcon /> &nbsp; {{ dateFormat }}
                </div>
                <div v-html="post.html" class="main-content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gallery -->

      <Gallery
        :images="post.attributes.gallery"
        :title="mainContent.attributes.titulek"
        :heading="`Další foto`"
      />

      <PostMin :posts="posts" />

      <Price :prices="prices" />

      <About :about="about" />
    </main>

    <!-- Start Footer -->
    <PageFooter :about="about.attributes" :mainContent="mainContent" />
    <!-- End Footer -->
  </div>
</template>

<script>
import PageHeader from "../../components/Header";
import PageFooter from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import Gallery from "../../components/Gallery";
import About from "../../components/About";
import PostMin from "../../components/PostMin";
import Price from "../../components/Price";
import { encodeID, replaceDiacritics } from "../../plugins/utils";
import CalendarIcon from "../../components/icons/calendarIcon";

export default {
  components: {
    PageHeader,
    Sidebar,
    Gallery,
    About,
    CalendarIcon,
    PageFooter,
    PostMin,
    Price
  },
  data: function () {
    return {
      slides: [],
      images: [],
      mainContent: {},
      post: {},
      posts: [],
      about: {},
      ogImage: '',
      prices: []
    }
  },
  computed: {
    hasDate () {
      return typeof (this.post.attributes.date) !== 'undefined';
    },
    dateFormat () {
      if (!this.hasDate) {
        return ''
      }
      const parseDate = new Date(this.post.attributes.date);
      const day = (parseDate.getDate() < 10 ? '0' : '') + parseDate.getDate();
      const month = (parseDate.getUTCMonth() < 9 ? '0' : '') + (parseDate.getUTCMonth() + 1);
      return `${day}.${month}.${parseDate.getFullYear()}`;

    }
  },
  head () {
    return {
      title: this.post.attributes.titulek,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { name: 'description', content: `${this.post.attributes.text.replace(/<\/?[^>]+(>|$)/g, "")}` },
        { name: 'og:title', content: `${this.mainContent.attributes.titulek}` },
        { name: 'og:description', content: this.post.attributes.titulek },
        { name: 'og:image', content: this.ogImage },
        { name: 'google-site-verification', content: '-SFmZ9hcc33r5cnur1SNM-zBxmzWxGVLQuyZ61pGDEg' }


      ],
      link: [{
        rel: 'canonical',
        href: 'https://www.nehtova-modelaz-plzen.cz/aktuality/' + this.post.attributes.url
      }]
    }
  },
  created () {
    const mainContentMarkup = require(`~/content/main.md`);
    this.mainContent = mainContentMarkup;

    const aboutContentMarkup = require(`~/content/about.md`);
    this.about = aboutContentMarkup;

  },
  async asyncData ({ params }) {
    let post = null;
    const sectionsAll = await require.context("~/content/blog/", true, /\.md$/)
    sectionsAll.keys().map((key) => {
      const url = key.split('.').slice(0, -1).join('.').split('/').slice(1).join('/');
      if (params.id === url) {
        post = (sectionsAll(key));
        post.attributes.url = url;
      }
    });

    const limit = 3;

    const postsAll = await require.context("~/content/blog/", true, /\.md$/)
    const postsBig = postsAll.keys().map((key) => {
      postsAll(key).attributes.url = key.split('.').slice(0, -1).join('.').split('/').slice(1).join('/');
      postsAll(key).attributes.id = encodeID(replaceDiacritics((postsAll(key).attributes.titulek).toLowerCase()));
      return postsAll(key)
    });
    const postsBigSorted = postsBig.sort(function (a, b) {
      var dateA = new Date(a.attributes.date), dateB = new Date(b.attributes.date);
      return dateB - dateA;
    });

    const posts = [];
    let i = 0;
    postsBigSorted.forEach(element => {
      if (element.attributes.id !== post.attributes.id && limit != i) {
        posts.push(element);
        i = i + 1;
      }
    });

    const priceMarkup = require(`~/content/cenik.md`);
    const prices = priceMarkup.attributes.sluzba;

    const ogImage = require(`~/assets${post.attributes.obrazek}`);

    return { post, ogImage, posts, prices };
  }
}


</script>

