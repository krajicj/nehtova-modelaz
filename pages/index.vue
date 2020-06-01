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

    <Slider :slides="slides" :title="mainContent.nadpis" />
    <!-- End Navbar -->

    <main id="content" role="main">
      <article class="px3">
        <h2 id="story" class="my4 theme2-anchored">
          {{ mainContent.titulek }}
        </h2>
        <p class="mb1 ampstart-dropcap">
          {{ mainContent.obsah }}
        </p>

        <div class="my4 mxn3 center">
          <!-- Start Image with heading -->
          <figure class="ampstart-image-with-heading  m0 relative mb4">
            <amp-img
              src="../img/themes_2/bar.jpg"
              width="600"
              height="450"
              alt="Happy Hour Monday through Friday 5 PM"
              layout="responsive"
            ></amp-img>
            <figcaption class="absolute right-0 bottom-0 left-0">
              <header class="ampstart-image-heading px2 py2 line-height-4">
                <h2 class="h1 bold">Happy Hour</h2>
                <p class="h4">Mon-Fri 5PM</p>
              </header>
            </figcaption>
          </figure>
          <!-- End Image with heading -->
        </div>
        <h2 id="locations" class="my4 theme2-anchored">
          Locations &amp; Hours
        </h2>
        <div class="col col-12 sm-col-6 mb4">
          <h3 class="mb1">San Francisco</h3>
          <p class="mb0">123 E Somewhere St.,<br />San Francisco, CA<br /></p>
          <p class="mb0">
            Mon-Thu 11am–2pm, 4pm–9pm<br />Fri-Sun 11am–3pm, 4pm–12am<br />
          </p>
        </div>
        <div class="col col-12 sm-col-6 mb4">
          <h3 class="mb1">San Jose</h3>
          <p class="mb0">123 S Elsewhere St.,<br />San Jose, CA<br /></p>
          <p class="mb0">
            Mon-Thu 11am–2pm, 4pm–9pm<br />Fri-Sun 11am–3pm, 4pm–11pm<br />
          </p>
        </div>

        <!-- Gallery -->
        <Gallery :images="images" />
      </article>
    </main>

    <!-- Start Footer -->
    <footer class="ampstart-footer flex flex-column items-center px3 ">
      <small>
        © Beck & Galo
      </small>
    </footer>
    <!-- End Footer -->
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import Slider from "../components/Slider";
import Gallery from "../components/Gallery";

export default {
  components: {
    Sidebar,
    Slider,
    Gallery
  },
  data: function () {
    return {
      slides: [],
      images: [],
      mainContent: {}
    }
  },
  created () {
    const mainContentMarkup = require(`~/content/main.md`);
    this.mainContent = mainContentMarkup.attributes;
    //console.log(mainContentMarkup);

  },
  async asyncData () {
    const slides = [];
    const images = [];
    try {
      const imgs = await require.context('~/static/slider/', true, /\.jpg$/);
      imgs.keys().forEach(key => (slides.push("slider/" + key)));
    } catch (err) {
    }
    try {
      const imgsGal = await require.context('~/static/gallery/', true, /\.jpg$/);
      imgsGal.keys().forEach(key => (images.push("gallery/" + key)));
    } catch (err) {
    }

    return { slides, images };
  }
}
</script>
