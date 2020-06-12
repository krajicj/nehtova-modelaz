<template>
  <!-- Start Sidebar -->
  <amp-sidebar
    id="header-sidebar"
    class="ampstart-sidebar px3 "
    layout="nodisplay"
  >
    <div class="flex justify-start items-center ampstart-sidebar-header">
      <div
        role="button"
        aria-label="close sidebar"
        on="tap:header-sidebar.toggle"
        tabindex="0"
        class="ampstart-navbar-trigger items-start"
      >
        ✕
      </div>
    </div>
    <nav class="ampstart-sidebar-nav ampstart-nav">
      <ul class="list-reset m0 p0 ampstart-label">
        <li class="ampstart-nav-item ">
          <a class="ampstart-nav-link" href="#uvod">Úvod</a>
        </li>
        <li
          v-for="section in sections"
          :key="section.titulek"
          class="ampstart-nav-item "
        >
          <a class="ampstart-nav-link" :href="`#${section.attributes.id}`">
            {{ section.attributes.titulek }}
          </a>
        </li>
        <li class="ampstart-nav-item ">
          <a class="ampstart-nav-link" href="#kontakt">Kontakt</a>
        </li>
        <li class="ampstart-nav-item ">
          <a class="ampstart-nav-link" href="#gallery">Galerie</a>
        </li>
      </ul>
    </nav>
  </amp-sidebar>
  <!-- End Sidebar -->
</template>

<script>
export default {
  props: ['sections']
}
</script>
