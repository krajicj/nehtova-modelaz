<template>
  <div>
    <h2 id="kontakt" class="my4 theme2-anchored">
      {{ about.attributes.titulek }}
    </h2>
    <div class="col col-12 sm-col-6 mb4">
      <h3 class="mb1">{{ about.attributes.ulice_cp }}</h3>
      <p class="mb1">
        {{ about.attributes.psc }} {{ about.attributes.mesto }}<br />
      </p>
      <p class="mb0">
        <i class="fa fa-phone">
          &nbsp;
          <a :href="`tel:${about.attributes.telefon}`">{{
            about.attributes.telefon
          }}</a></i
        ><br />
        <i class="fa fa-envelope">
          &nbsp;
          <a :href="`mailto:${about.attributes.mail}`">{{
            about.attributes.email
          }}</a></i
        ><br />
      </p>
    </div>
    <div v-html="about.html" class="col col-12 sm-col-6 mb4"></div>
  </div>
</template>

<script>
export default {
  props: ['about']
}
</script>
