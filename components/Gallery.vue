<template>
  <div>
    <h2 id="gallery" class="my4 theme2-anchored">Photo Gallery</h2>
    <amp-image-lightbox id="lightbox" layout="nodisplay"></amp-image-lightbox>
    <amp-carousel
      class="my2 mxn3"
      height="300"
      layout="fixed-height"
      type="carousel"
    >
      <amp-img
        v-for="image in images"
        :key="image"
        :src="image"
        width="400"
        height="300"
        alt="Dining area"
        on="tap:lightbox"
        role="button"
        tabindex="0"
      ></amp-img>
    </amp-carousel>
  </div>
</template>

<script>
export default {
  props: ['images']
}
</script>

<style>
</style>