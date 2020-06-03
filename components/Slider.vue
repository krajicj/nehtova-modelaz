<template>
  <div id="topNavigation" class="center">
    <!-- Start Fullpage Hero -->
    <figure class="ampstart-image-fullpage-hero m0 relative mb4">
      <amp-img
        height="100vh"
        :alt="
          `${mainContent.nadpis} - ${mainContent.nadpis2} - ${mainContent.nadpis3}`
        "
        layout="fixed-height"
        :src="mainContent.main_image"
      ></amp-img>
      <figcaption class="absolute top-0 right-0 bottom-0 left-0">
        <header class="p3">
          <h1 class="ampstart-fullpage-hero-heading mb3 ">
            <span
              class="h6 block caps lune-anim-move-up lune-landing-title-top"
              >{{ mainContent.nadpis2 }}</span
            ><span
              class="h1 block bold caps my1 lune-anim-move-up lune-landing-title-middle"
              >{{ mainContent.nadpis }}</span
            ><span
              class="h6 block caps lune-anim-move-up lune-landing-title-bottom"
              >{{ mainContent.nadpis3 }}</span
            >
          </h1>
        </header>
        <footer class="absolute left-0 right-0 bottom-0">
          <a
            class="scrollDownBtn inline-block ampstart-fullpage-hero-cta  m3 text-decoration-none lune-anim-move-up"
            on="tap:content.scrollTo(duration=800)"
          >
            <i class="fa fa-angle-double-down angleAnime"></i>
          </a>
        </footer>
      </figcaption>
    </figure>
    <!-- End Fullpage Hero -->
  </div>
</template>

<script>
export default {
  props: ['slides', 'mainContent']
}
</script>
