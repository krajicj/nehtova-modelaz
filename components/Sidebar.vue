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
          <a class="ampstart-nav-link" href="/#uvod">Úvod</a>
        </li>
        <!-- <li
          v-for="section in sections"
          :key="section.titulek"
          class="ampstart-nav-item "
        >
          <a class="ampstart-nav-link" :href="`#${section.attributes.id}`">
            {{ section.attributes.titulek }}
          </a>
        </li> -->
        <li class="ampstart-nav-item ">
          <a class="ampstart-nav-link" href="/#co-nabizim">{{
            mainContent.attributes.sekce_nadpis
          }}</a>
        </li>
        <li class="ampstart-nav-item ">
          <a class="ampstart-nav-link" href="/#kontakt">Kontakt</a>
        </li>
        <li class="ampstart-nav-item ">
          <a class="ampstart-nav-link" href="/#galerie">Galerie</a>
        </li>

        <li class="ampstart-nav-item ">
          <a class="ampstart-nav-link" href="/#aktuality">Aktuality</a>
        </li>
        <li class="ampstart-nav-item ">
          <a class="ampstart-nav-link" href="/#cenik">Ceník</a>
        </li>
      </ul>
    </nav>
    <hr />
    <ul
      class="ampstart-social-follow list-reset flex justify-around items-center flex-wrap m0 mb4"
    >
      <li v-if="about.facebook">
        <a
          :href="about.instagram"
          target="_blank"
          class="inline-block p1"
          aria-label="Link to Facebook"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="23.6"
            viewBox="0 0 56 55"
          >
            <title>Facebook</title>
            <path
              d="M47.5 43c0 1.2-.9 2.1-2.1 2.1h-10V30h5.1l.8-5.9h-5.9v-3.7c0-1.7.5-2.9 3-2.9h3.1v-5.3c-.6 0-2.4-.2-4.6-.2-4.5 0-7.5 2.7-7.5 7.8v4.3h-5.1V30h5.1v15.1H10.7c-1.2 0-2.2-.9-2.2-2.1V8.3c0-1.2 1-2.2 2.2-2.2h34.7c1.2 0 2.1 1 2.1 2.2V43"
              class="ampstart-icon ampstart-icon-fb"
            ></path></svg
        ></a>
      </li>

      <li v-if="about.instagram">
        <a
          :href="about.instagram"
          target="_blank"
          class="inline-block p1"
          aria-label="Link to Instagram"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 54 54"
          >
            <title>instagram</title>
            <path
              d="M27.2 6.1c-5.1 0-5.8 0-7.8.1s-3.4.4-4.6.9c-1.2.5-2.3 1.1-3.3 2.2-1.1 1-1.7 2.1-2.2 3.3-.5 1.2-.8 2.6-.9 4.6-.1 2-.1 2.7-.1 7.8s0 5.8.1 7.8.4 3.4.9 4.6c.5 1.2 1.1 2.3 2.2 3.3 1 1.1 2.1 1.7 3.3 2.2 1.2.5 2.6.8 4.6.9 2 .1 2.7.1 7.8.1s5.8 0 7.8-.1 3.4-.4 4.6-.9c1.2-.5 2.3-1.1 3.3-2.2 1.1-1 1.7-2.1 2.2-3.3.5-1.2.8-2.6.9-4.6.1-2 .1-2.7.1-7.8s0-5.8-.1-7.8-.4-3.4-.9-4.6c-.5-1.2-1.1-2.3-2.2-3.3-1-1.1-2.1-1.7-3.3-2.2-1.2-.5-2.6-.8-4.6-.9-2-.1-2.7-.1-7.8-.1zm0 3.4c5 0 5.6 0 7.6.1 1.9.1 2.9.4 3.5.7.9.3 1.6.7 2.2 1.4.7.6 1.1 1.3 1.4 2.2.3.6.6 1.6.7 3.5.1 2 .1 2.6.1 7.6s0 5.6-.1 7.6c-.1 1.9-.4 2.9-.7 3.5-.3.9-.7 1.6-1.4 2.2-.7.7-1.3 1.1-2.2 1.4-.6.3-1.7.6-3.5.7-2 .1-2.6.1-7.6.1-5.1 0-5.7 0-7.7-.1-1.8-.1-2.9-.4-3.5-.7-.9-.3-1.5-.7-2.2-1.4-.7-.7-1.1-1.3-1.4-2.2-.3-.6-.6-1.7-.7-3.5 0-2-.1-2.6-.1-7.6 0-5.1.1-5.7.1-7.7.1-1.8.4-2.8.7-3.5.3-.9.7-1.5 1.4-2.2.7-.6 1.3-1.1 2.2-1.4.6-.3 1.6-.6 3.5-.7h7.7zm0 5.8c-5.4 0-9.7 4.3-9.7 9.7 0 5.4 4.3 9.7 9.7 9.7 5.4 0 9.7-4.3 9.7-9.7 0-5.4-4.3-9.7-9.7-9.7zm0 16c-3.5 0-6.3-2.8-6.3-6.3s2.8-6.3 6.3-6.3 6.3 2.8 6.3 6.3-2.8 6.3-6.3 6.3zm12.4-16.4c0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3 1.2 0 2.3 1.1 2.3 2.3z"
              class="ampstart-icon ampstart-icon-instagram"
            ></path></svg
        ></a>
      </li>

      <li v-if="about.email !== ''">
        <a
          :href="`mailto:${about.email}`"
          target="_blank"
          class="inline-block p1"
          aria-label="E-mail"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18.4"
            viewBox="0 0 56 43"
          >
            <title>email</title>
            <path
              d="M10.5 6.4C9.1 6.4 8 7.5 8 8.9v21.3c0 1.3 1.1 2.5 2.5 2.5h34.9c1.4 0 2.5-1.2 2.5-2.5V8.9c0-1.4-1.1-2.5-2.5-2.5H10.5zm2.1 2.5h30.7L27.9 22.3 12.6 8.9zm-2.1 1.4l16.6 14.6c.5.4 1.2.4 1.7 0l16.6-14.6v19.9H10.5V10.3z"
              class="ampstart-icon ampstart-icon-email"
            ></path></svg
        ></a>
      </li>
    </ul>
  </amp-sidebar>
  <!-- End Sidebar -->
</template>

<script>
export default {
  props: ['mainContent', 'about']
}
</script>
