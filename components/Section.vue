<template>
  <div :id="id" class="section">
    <h2 class="mb4">{{ section.titulek }}</h2>
    <amp-img
      :src="section.obrazek"
      width="1280"
      height="853"
      layout="responsive"
      :alt="section.titulek"
    ></amp-img>
    <p class="mb4">
      {{ section.text }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['section', 'id']
}
</script>
