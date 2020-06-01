<template>
  <div>
    <h2 id="locations" class="my4 theme2-anchored">
      {{ about.titulek }}
    </h2>
    <div class="col col-12 sm-col-6 mb4">
      {{ about.adresa }}
    </div>
    <div class="col col-12 sm-col-6 mb4">
      <h3 class="mb1">San Jose</h3>
      <p class="mb0">123 S Elsewhere St.,<br />San Jose, CA<br /></p>
      <p class="mb0">
        Mon-Thu 11am–2pm, 4pm–9pm<br />Fri-Sun 11am–3pm, 4pm–11pm<br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['about']
}
</script>
