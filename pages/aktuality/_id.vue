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
                  <i class="fa fa-calendar"></i> {{ dateFormat }}
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

      <About :about="about" />
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
import Gallery from "../../components/Gallery";
import About from "../../components/About";
import { encodeID, replaceDiacritics } from "../../plugins/utils";

export default {
  components: {
    PageHeader,
    Sidebar,
    Gallery,
    About
  },
  data: function () {
    return {
      slides: [],
      images: [],
      mainContent: {},
      post: {},
      about: {},
      ogImage: ''
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
      title: this.mainContent.attributes.titulek,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { name: 'description', content: `${this.mainContent.attributes.obsah}` },
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

    const ogImage = require(`~/assets${post.attributes.obrazek}`);
    return { post, ogImage };
  }
}


</script>

