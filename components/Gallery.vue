<template>
  <div v-if="images.length" class="web-content content-gallery">
    <h2 v-if="heading" id="galerie" class="section-heading">{{ heading }}</h2>

    <amp-carousel
      lightbox
      class="my2 mxn3"
      height="200"
      layout="fixed-height"
      type="carousel"
    >
        <amp-img
          v-for="image in images"
          :key="image"
          :srcset="require(`~/assets${image}`).srcSet"
          width="300"
          height="200"
          :alt="title"
          on="tap:lightbox"
          role="button"
          tabindex="0"
          class="img-cover"          
        ></amp-img>                  
    </amp-carousel>
  </div>
</template>

<script>
export default {
  props: ["images", "title", "heading"],
};
</script>

<style>
</style>