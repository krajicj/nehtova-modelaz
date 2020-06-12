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
        srcset="
DSC_3232_diw37s_c_scale,w_1190.jpg 1190w,
DSC_3232_diw37s_c_scale,w_1410.jpg 1410w,
DSC_3232_diw37s_c_scale,w_1607.jpg 1607w,
DSC_3232_diw37s_c_scale,w_1792.jpg 1792w,
DSC_3232_diw37s_c_scale,w_1964.jpg 1964w,
DSC_3232_diw37s_c_scale,w_2000.jpg 2000w"
        :src="mainContent.main_image"
      ></amp-img>
      <figcaption class="absolute top-0 right-0 bottom-0 left-0">
        <header class="">
          <h1 class="ampstart-fullpage-hero-heading mb3 ">
            <span class="h6 block caps lune-anim-move-up ">{{
              mainContent.nadpis2
            }}</span
            ><span class="h1 block bold caps my1 lune-anim-move-up ">{{
              mainContent.nadpis
            }}</span
            ><span class="h6 block caps lune-anim-move-up ">{{
              mainContent.nadpis3
            }}</span>
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
