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
        :srcset="require(`~/assets${mainContent.main_image}`).srcSet"
      ></amp-img>
      <figcaption class="absolute top-0 right-0 bottom-0 left-0">
        <header class="">
          <h1 class="ampstart-fullpage-hero-heading mb3 ">
            <span class="h6 block caps lune-anim-move-up ">{{
              mainContent.nadpis2 &nbsp;
            }}</span
            ><span class="h1 block bold caps my1 lune-anim-move-up ">{{
              mainContent.nadpis &nbsp;
            }}</span
            ><span class="h6 block caps lune-anim-move-up ">{{
              mainContent.nadpis3 &nbsp;
            }}</span>
          </h1>
        </header>
        <footer class="absolute left-0 right-0 bottom-0">
          <div class="box">
            <a
              class="scrollDownBtn inline-block ampstart-fullpage-hero-cta  m3 text-decoration-none lune-anim-move-up"
              on="tap:content.scrollTo(duration=800)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="angleAnime"
                viewBox="0 0 100 95"
              >
                <path
                  d="m 5 5 l 45 50 l 45 -50 m -90 35 l 45 50 l 45 -50"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="10"
                ></path>
              </svg>
            </a>
          </div>
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
