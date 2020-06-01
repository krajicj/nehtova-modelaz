<template>
  <!-- Start Sidebar -->
  <amp-sidebar
    id="header-sidebar"
    class="ampstart-sidebar px3  "
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
          <a class="ampstart-nav-link" href="#">Home</a>
        </li>
        <li class="ampstart-nav-item ">
          <a class="ampstart-nav-link" href="menu.amp.html">Menu</a>
        </li>
        <li class="ampstart-nav-item ">
          <a class="ampstart-nav-link" href="#locations">Locations & Hours</a>
        </li>
      </ul>
    </nav>
  </amp-sidebar>
  <!-- End Sidebar -->
</template>

<script>
export default {

}
</script>
