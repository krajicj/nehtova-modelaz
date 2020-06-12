<template>
  <div class="web-content">
    <h2 id="gallery" class="section-heading">Galerie</h2>

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
      ></amp-img>
    </amp-carousel>
  </div>
</template>

<script>
export default {
  props: ['images', 'title']
}
</script>

<style>
</style>