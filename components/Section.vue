<template>
  <div>
    <div :id="id" class="row outer" v-if="isOdd">
      <div class="col col-4">
        <amp-img
          class="inner imageOdd"
          :src="section.obrazek"
          width="800"
          height="600"
          layout="responsive"
          :alt="section.titulek"
        ></amp-img>
      </div>
      <div class="col col-8">
        <div class="polaroid-text">
          <h3 class="">{{ section.titulek }}</h3>
          <p class="">
            {{ section.text }}
          </p>
        </div>
      </div>
    </div>

    <div :id="id" class="row outer" v-else>
      <div class="col col-8">
        <div class="polaroid-text">
          <h3 class="">{{ section.titulek }}</h3>
          <p class="">
            {{ section.text }}
          </p>
        </div>
      </div>
      <div class="col col-4">
        <amp-img
          class="inner imageNodd"
          :src="section.obrazek"
          width="800"
          height="600"
          layout="responsive"
          :alt="section.titulek"
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
