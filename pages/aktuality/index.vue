<template>
  <div>
    <!-- Start Navbar -->
    <PageHeader :mainContent="mainContent" />
    <Sidebar :mainContent="mainContent" :about="about.attributes" />

    <main id="content" role="main">
      <div class="web-section-top">
        <div class="web-content">
          <h1 class="section-heading">
            Aktuality
          </h1>
        </div>
      </div>

      <Post
        v-for="(post, index) in posts"
        :key="post.titulek"
        :post="post"
        :id="post.attributes.id"
        :index="index"
        :count="post.length"
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
import PageHeader from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Post from "../../components/Post";
import About from "../../components/About";
import { encodeID, replaceDiacritics } from "../../plugins/utils";

export default {
  components: {
    PageHeader,
    Sidebar,
    Post,
    About
  },
  data: function () {
    return {
      mainContent: {},
      posts: [],
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

    const ogImage = require(`~/assets${this.mainContent.attributes.main_image}`);
    this.ogImage = ogImage;

  },
  async asyncData () {
    const postsAll = await require.context("~/content/blog/", true, /\.md$/)
    const posts = postsAll.keys().map((key) => {
      postsAll(key).attributes.url = key.split('.').slice(0, -1).join('.').split('/').slice(1).join('/');
      postsAll(key).attributes.id = encodeID(replaceDiacritics((postsAll(key).attributes.titulek).toLowerCase()));
      return postsAll(key)
    });


    return { posts };
  }
}

</script>
