<template>
  <footer class="page-footer">
    <div class="footer-data web-content">
      <div class="footer-col">
        <div class="logo-footer">
          <h2>
            <nuxt-link to="/">
              {{ mainContent.attributes.nadpis2 }}
              <br />
              <small>
                {{ mainContent.attributes.nadpis }}
                {{ mainContent.attributes.nadpis3 }}
              </small>
            </nuxt-link>
          </h2>
        </div>
        <div class="cookie-text">
          <small>
            Aby vám u mě na webu všechno dobře fungovalo, používám cookies.
          </small>
        </div>
      </div>
      <div class="footer-col footer-contact">
        <p class="mb0">
          <a :href="`tel:${about.telefon}`">
            <PhoneIcon />
            &nbsp;
            {{ about.telefon }}
          </a>

          <br />

          <a :href="`mailto:${about.email}`">
            <MailIcon />
            &nbsp;

            {{ about.email }}
          </a>

          <br />

          <a target="_blank" :href="about.instagram">
            <IgIcon />
            &nbsp; aknehtovamodelaz
          </a>
        </p>
      </div>
    </div>
    <div class="footer-panel">
      <small>
        © Alena Krajícová
      </small>
    </div>
  </footer>
</template>

<script>
import PhoneIcon from "./icons/phoneIcon";
import MailIcon from "./icons/mailIcon";
import IgIcon from "./icons/IgIcon";

export default {
  props: ['about', 'mainContent'],
  components: {
    PhoneIcon,
    MailIcon,
    IgIcon
  }

}
</script>

<style>
</style>