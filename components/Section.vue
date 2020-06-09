<template>
  <div :id="id">
    <div class="web-section">
      <div class="box-text flex-item" :class="{ 'section-right': isOdd }">
        <div class="">
          <h3 class="">{{ section.attributes.titulek }}</h3>
          <div v-html="section.html"></div>
        </div>
      </div>
      <div class="box-image flex-item " :class="{ 'section-left': isOdd }">
        <amp-img
          class=""
          :src="section.attributes.obrazek"
          width="600"
          height="400"
          layout="responsive"
          sizes="(min-width: 768px) 400px, 80vw"
          :alt="section.attributes.titulek"
        ></amp-img>
      </div>
    </div>
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
