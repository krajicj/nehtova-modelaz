<template>
  <div class="row outer">
    <div class="col col-4 ">
      <amp-img
        class="inner"
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
