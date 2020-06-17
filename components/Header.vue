<template>
  <header
    id="top"
    class="ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4 "
  >
    <div class="row">
      <div
        role="button"
        aria-label="open sidebar"
        on="tap:header-sidebar.toggle"
        tabindex="0"
        class="ampstart-navbar-trigger  pr2 col  "
      >
        ☰
      </div>
      <!-- <div class="ampstart-navbar-trigger col col-right logo">
        {{ mainContent.attributes.nadpis }}
      </div> -->
    </div>
  </header>
</template>

<script>
export default {
  props: ['mainContent']
}
</script>
