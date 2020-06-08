<template>
  <div>
    <div :id="id" class="row outer" v-if="isOdd">
      <div class="col col-5 sm-col-12">
        <amp-img
          class="inner imageOdd"
          :src="section.attributes.obrazek"
          width="900"
          height="600"
          layout="responsive"
          :alt="section.attributes.titulek"
        ></amp-img>
      </div>
      <div class="col col-7 sm-col-12">
        <div class="">
          <h3 class="">{{ section.attributes.titulek }}</h3>
          <p class="">
            {{ section.attributes.text }}
          </p>
        </div>
      </div>
    </div>

    <div :id="id" class="row outer" v-else>
      <div class="col col-7 sm-col-12">
        <div class="">
          <h3 class="">{{ section.attributes.titulek }}</h3>
          <p class="">
            {{ section.attributes.text }}
          </p>
        </div>
      </div>
      <div class="col col-5 sm-col-12">
        <amp-img
          class="inner imageNodd"
          :src="section.attributes.obrazek"
          width="900"
          height="600"
          layout="responsive"
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
