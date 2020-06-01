<template>
  <div class="center">
    <!-- Start Fullpage Hero -->
    <figure
      v-for="slide in slides"
      :key="slide"
      class="ampstart-image-fullpage-hero m0 relative mb4"
    >
      <amp-img
        width="404"
        height="720"
        alt="Welcome to Beck &amp; Galo Modern American Cuisine"
        layout="responsive"
        src="http://localhost:3000/slider/DSC_3232.jpg"
      ></amp-img>
      <figcaption class="absolute top-0 right-0 bottom-0 left-0">
        <header class="p3">
          <h1 class="ampstart-fullpage-hero-heading mb3">
            <span class="ampstart-fullpage-hero-heading-text">
              {{ title }}
            </span>
          </h1>
        </header>
        <footer class="absolute left-0 right-0 bottom-0">
          <a
            class="ampstart-btn inline-block ampstart-fullpage-hero-cta h5 m3 text-decoration-none"
            href="menu.amp.html"
            >View Menu</a
          >
        </footer>
      </figcaption>
    </figure>
    <!-- End Fullpage Hero -->
  </div>
</template>

<script>
export default {
  props: ['slides', 'title']
}
</script>
