<template>
  <div class="web-section-right">
    <div class="web-content">
      <h2 id="kontakt" class="section-heading">
        {{ about.attributes.titulek }}
      </h2>
      <div class="row">
        <div class="col col-6 sm-col-12 ">
          <span class="h3">{{ about.attributes.ulice_cp }}</span>
          <p class="mb1">
            {{ about.attributes.psc }} {{ about.attributes.mesto }}
            <br />
          </p>
          <p class="mb0">
            <i class="fa fa-phone">
              &nbsp;
              <a :href="`tel:${about.attributes.telefon}`">
                {{ about.attributes.telefon }}
              </a>
            </i>
            <br />
            <i class="fa fa-envelope">
              &nbsp;
              <a :href="`mailto:${about.attributes.mail}`">
                {{ about.attributes.email }}
              </a>
            </i>
            <br />
          </p>
          <a
            href="https://goo.gl/maps/YCeSLStiYoEnviuN8"
            target="_blank"
            class="button"
            ><span>Mapa</span></a
          >
        </div>
        <div v-html="about.html" class="col col-6 sm-col-12 "></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["about"]
};
</script>
