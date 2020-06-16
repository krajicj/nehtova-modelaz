<template>
  <div class="web-section-right">
    <div class="web-content">
      <h2 id="kontakt" class="section-heading">
        {{ about.attributes.titulek }}
      </h2>
      <div class="row">
        <div class="col col-6 sm-col-12 ">
          <h3>
            <span class="h3">{{ about.attributes.ulice_cp }}</span>
          </h3>

          <h3>{{ about.attributes.psc }} {{ about.attributes.mesto }}</h3>

          <p class="mb0">
            <a :href="`tel:${about.attributes.telefon}`">
              <i class="fa fa-phone"> </i>
              &nbsp;
              {{ about.attributes.telefon }}
            </a>

            <br />

            <a :href="`mailto:${about.attributes.email}`">
              <i class="fa fa-envelope">
                &nbsp;
              </i>
              {{ about.attributes.email }}
            </a>

            <br />
          </p>
          <a
            href="https://goo.gl/maps/YCeSLStiYoEnviuN8"
            target="_blank"
            class="button"
            ><span>Mapa</span></a
          >
        </div>
        <div class="col col-6 sm-col-12 ">
          <br />
          <div v-html="about.html" class=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["about"]
};
</script>
