<template>
  <header
    id="top"
    class="ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4 "
  >
    <div class="row row-header">
      <div
        role="button"
        aria-label="open sidebar"
        on="tap:header-sidebar.toggle"
        tabindex="0"
        class="ampstart-navbar-trigger  pr2 col  "
      >
        ☰
      </div>
      <div class="col col-right logo">
        <h2>
          <a href=".">
            {{ mainContent.attributes.nadpis2 }}<br />
            <small
              >{{ mainContent.attributes.nadpis }}
              {{ mainContent.attributes.nadpis3 }}</small
            >
          </a>
        </h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['mainContent']
}
</script>
