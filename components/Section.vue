<template>
  <div :id="id" class="web-section-item" :class="{ 'last-item': isLast }">
    <div class="web-content">
      <div class="web-section-type">
        <div class="box-text flex-item" :class="{ 'section-right': isOdd }">
          <div class="">
            <h3 class="">
              {{ section.attributes.titulek }}
            </h3>
            <span v-if="hasDate"
              ><i class="fa fa-calendar"></i> {{ dateFormat }}</span
            >
            <div class="section-text" v-html="section.attributes.text">
              více
            </div>
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
    },
    hasDate () {
      return typeof (this.section.attributes.date) !== 'undefined';
    },
    dateFormat () {
      if (!this.hasDate) {
        return ''
      }
      const parseDate = new Date(this.section.attributes.date);
      const day = (parseDate.getDate() < 10 ? '0' : '') + parseDate.getDate();
      const month = (parseDate.getUTCMonth() < 9 ? '0' : '') + (parseDate.getUTCMonth() + 1);
      return `${day}.${month}.${parseDate.getFullYear()}`;

    }
  }
}
</script>
