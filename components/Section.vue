<template>
  <div class="row">
    <div v-if="isOdd" class="col col-4 "></div>

    <div class="col col-8 polaroid">
      <amp-img
        class="polaroid-image"
        :src="section.obrazek"
        width="640"
        height="480"
        layout="responsive"
        :alt="section.titulek"
      ></amp-img>
      <div class="polaroid-text">
        <h3 class="">{{ section.titulek }}</h3>
        <p class="">
          {{ section.text }}
        </p>
      </div>
    </div>
    <div v-id="!isOdd" class="col col-4"></div>
  </div>
</template>

<script>
export default {
  props: ['section', 'id', 'index'],
  computed: {
    isOdd () {
      return this.index % 2;
    }
  }
}
</script>
