<template>
  <div class="center">
    <!-- Start Fullpage Hero -->
    <figure class="ampstart-image-fullpage-hero m0 relative mb4">
      <amp-img
        width="404"
        height="720"
        alt="Welcome to Beck &amp; Galo Modern American Cuisine"
        layout="responsive"
        :src="mainContent.main_image"
        media="(max-width: 415px)"
      ></amp-img>
      <amp-img
        height="720"
        alt="Welcome to Beck &amp; Galo Modern American Cuisine"
        layout="fixed-height"
        :src="mainContent.main_image"
        media="(min-width: 416px)"
      ></amp-img>
      <figcaption class="absolute top-0 right-0 bottom-0 left-0">
        <header class="p3">
          <h1 class="ampstart-fullpage-hero-heading mb3">
            <span class="h6 block caps">{{ mainContent.nadpis2 }}</span
            ><span class="h1 block bold caps my1">{{ mainContent.nadpis }}</span
            ><span class="h6 block caps">{{ mainContent.nadpis3 }}</span>
          </h1>
        </header>
        <footer class="absolute left-0 right-0 bottom-0">
          <a
            class="ampstart-btn inline-block ampstart-fullpage-hero-cta h5 m3 text-decoration-none"
            href="#locations"
            >Kontakt</a
          >
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
