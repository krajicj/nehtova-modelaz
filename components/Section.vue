<template>
  <div :id="id" class="web-section-item" :class="{ 'last-item': isLast }">
    <div class="web-content">
      <div class="web-section-type">
        <div class="box-text flex-item" :class="{ 'section-right': isOdd }">
          <div class="">
            <h3 class="">
              {{ section.attributes.titulek }}
            </h3>
            <div v-html="section.html"></div>
          </div>
        </div>
        <div class="box-image flex-item " :class="{ 'section-left': isOdd }">
          <amp-img
            class=""
            :srcset="require(`~/assets${section.attributes.obrazek}`).srcSet"
            width="600"
            height="400"
            layout="responsive"
            sizes="(min-width: 768px) 400px, 80vw"
            :alt="section.attributes.titulek"
          ></amp-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['section', 'id', 'index', 'count'],
  computed: {
    isOdd () {
      return this.index % 2;
    },
    isLast () {
      return this.index === (this.count - 1);
    }
  }
}
</script>
