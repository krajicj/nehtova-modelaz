<template>
 <div>
   
  <!-- Start Navbar -->
  <header class="ampstart-headerbar fixed flex justify-start items-center top-0 left-0 right-0 pl2 pr4 ">
    <div role="button" aria-label="open sidebar" on="tap:header-sidebar.toggle" tabindex="0" class="ampstart-navbar-trigger  pr2  ">☰
    </div>
  </header>

<!-- Start Sidebar -->
<amp-sidebar id="header-sidebar" class="ampstart-sidebar px3  " layout="nodisplay">
  <div class="flex justify-start items-center ampstart-sidebar-header">
    <div role="button" aria-label="close sidebar" on="tap:header-sidebar.toggle" tabindex="0" class="ampstart-navbar-trigger items-start">✕</div>
  </div>
  <nav class="ampstart-sidebar-nav ampstart-nav">
    <ul class="list-reset m0 p0 ampstart-label">
          <li class="ampstart-nav-item "><a class="ampstart-nav-link" href="#">Home</a></li>
          <li class="ampstart-nav-item "><a class="ampstart-nav-link" href="menu.amp.html">Menu</a></li>
          <li class="ampstart-nav-item "><a class="ampstart-nav-link" href="#locations">Locations & Hours</a></li>
    </ul>
  </nav>



<ul class="ampstart-social-follow list-reset flex justify-around items-center flex-wrap m0 mb4">
    <li>
        <a href="#" target="_blank" class="inline-block p1" aria-label="Link to AMP HTML Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="22.2" viewBox="0 0 53 49"><title>Twitter</title><path d="M45 6.9c-1.6 1-3.3 1.6-5.2 2-1.5-1.6-3.6-2.6-5.9-2.6-4.5 0-8.2 3.7-8.2 8.3 0 .6.1 1.3.2 1.9-6.8-.4-12.8-3.7-16.8-8.7C8.4 9 8 10.5 8 12c0 2.8 1.4 5.4 3.6 6.9-1.3-.1-2.6-.5-3.7-1.1v.1c0 4 2.8 7.4 6.6 8.1-.7.2-1.5.3-2.2.3-.5 0-1 0-1.5-.1 1 3.3 4 5.7 7.6 5.7-2.8 2.2-6.3 3.6-10.2 3.6-.6 0-1.3-.1-1.9-.1 3.6 2.3 7.9 3.7 12.5 3.7 15.1 0 23.3-12.6 23.3-23.6 0-.3 0-.7-.1-1 1.6-1.2 3-2.7 4.1-4.3-1.4.6-3 1.1-4.7 1.3 1.7-1 3-2.7 3.6-4.6" class="ampstart-icon ampstart-icon-twitter"></path></svg></a>
    </li>
    <li>
        <a href="#" target="_blank" class="inline-block p1" aria-label="Link to AMP HTML Facebook"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23.6" viewBox="0 0 56 55"><title>Facebook</title><path d="M47.5 43c0 1.2-.9 2.1-2.1 2.1h-10V30h5.1l.8-5.9h-5.9v-3.7c0-1.7.5-2.9 3-2.9h3.1v-5.3c-.6 0-2.4-.2-4.6-.2-4.5 0-7.5 2.7-7.5 7.8v4.3h-5.1V30h5.1v15.1H10.7c-1.2 0-2.2-.9-2.2-2.1V8.3c0-1.2 1-2.2 2.2-2.2h34.7c1.2 0 2.1 1 2.1 2.2V43" class="ampstart-icon ampstart-icon-fb"></path></svg></a>
    </li>
    <li>
        <a href="#" target="_blank" class="inline-block p1" aria-label="Link to AMP HTML Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 54 54"><title>instagram</title><path d="M27.2 6.1c-5.1 0-5.8 0-7.8.1s-3.4.4-4.6.9c-1.2.5-2.3 1.1-3.3 2.2-1.1 1-1.7 2.1-2.2 3.3-.5 1.2-.8 2.6-.9 4.6-.1 2-.1 2.7-.1 7.8s0 5.8.1 7.8.4 3.4.9 4.6c.5 1.2 1.1 2.3 2.2 3.3 1 1.1 2.1 1.7 3.3 2.2 1.2.5 2.6.8 4.6.9 2 .1 2.7.1 7.8.1s5.8 0 7.8-.1 3.4-.4 4.6-.9c1.2-.5 2.3-1.1 3.3-2.2 1.1-1 1.7-2.1 2.2-3.3.5-1.2.8-2.6.9-4.6.1-2 .1-2.7.1-7.8s0-5.8-.1-7.8-.4-3.4-.9-4.6c-.5-1.2-1.1-2.3-2.2-3.3-1-1.1-2.1-1.7-3.3-2.2-1.2-.5-2.6-.8-4.6-.9-2-.1-2.7-.1-7.8-.1zm0 3.4c5 0 5.6 0 7.6.1 1.9.1 2.9.4 3.5.7.9.3 1.6.7 2.2 1.4.7.6 1.1 1.3 1.4 2.2.3.6.6 1.6.7 3.5.1 2 .1 2.6.1 7.6s0 5.6-.1 7.6c-.1 1.9-.4 2.9-.7 3.5-.3.9-.7 1.6-1.4 2.2-.7.7-1.3 1.1-2.2 1.4-.6.3-1.7.6-3.5.7-2 .1-2.6.1-7.6.1-5.1 0-5.7 0-7.7-.1-1.8-.1-2.9-.4-3.5-.7-.9-.3-1.5-.7-2.2-1.4-.7-.7-1.1-1.3-1.4-2.2-.3-.6-.6-1.7-.7-3.5 0-2-.1-2.6-.1-7.6 0-5.1.1-5.7.1-7.7.1-1.8.4-2.8.7-3.5.3-.9.7-1.5 1.4-2.2.7-.6 1.3-1.1 2.2-1.4.6-.3 1.6-.6 3.5-.7h7.7zm0 5.8c-5.4 0-9.7 4.3-9.7 9.7 0 5.4 4.3 9.7 9.7 9.7 5.4 0 9.7-4.3 9.7-9.7 0-5.4-4.3-9.7-9.7-9.7zm0 16c-3.5 0-6.3-2.8-6.3-6.3s2.8-6.3 6.3-6.3 6.3 2.8 6.3 6.3-2.8 6.3-6.3 6.3zm12.4-16.4c0 1.3-1.1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-1.2 1-2.3 2.3-2.3 1.2 0 2.3 1.1 2.3 2.3z" class="ampstart-icon ampstart-icon-instagram"></path></svg></a>
    </li>
    <li>
        <a href="#" target="_blank" class="inline-block p1" aria-label="Link to AMP HTML pin trest"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="28.5" viewBox="0 0 43 51"><title>pinterest</title><path d="M8.134 18.748c0-1.6.2-3 .8-4.4.5-1.4 1.2-2.6 2.2-3.6.9-1 2-1.9 3.2-2.6 1.2-.8 2.5-1.3 3.9-1.7 1.5-.4 2.9-.5 4.4-.5 2.2 0 4.3.4 6.2 1.4 1.9.9 3.5 2.3 4.7 4.1 1.2 1.9 1.8 3.9 1.8 6.2 0 1.4-.1 2.7-.4 4-.2 1.3-.7 2.6-1.2 3.8-.6 1.2-1.3 2.3-2.2 3.2-.8.9-1.8 1.7-3.1 2.2-1.2.6-2.5.9-4 .9-1 0-1.9-.3-2.9-.7-.9-.5-1.6-1.1-2-1.9-.1.5-.3 1.4-.6 2.4-.3 1.1-.4 1.7-.5 2-.1.3-.2.9-.4 1.6-.3.7-.4 1.2-.6 1.5-.1.3-.4.7-.7 1.3-.3.6-.6 1.2-1 1.7-.3.5-.7 1.1-1.3 1.8l-.3.1-.2-.2c-.2-2.2-.3-3.6-.3-4 0-1.3.2-2.8.5-4.4.3-1.7.8-3.7 1.4-6.2.6-2.5 1-3.9 1.1-4.4-.5-.9-.7-2.1-.7-3.6 0-1.2.4-2.3 1.1-3.3.8-1.1 1.7-1.6 2.8-1.6.9 0 1.6.3 2.1.9.4.6.7 1.3.7 2.2 0 .9-.3 2.3-1 4.1-.6 1.8-.9 3.1-.9 4 0 .9.3 1.6 1 2.2.6.6 1.4.9 2.3.9.8 0 1.5-.2 2.2-.5.6-.4 1.2-.9 1.6-1.5.5-.6.9-1.3 1.2-2 .4-.8.6-1.5.8-2.4.2-.8.4-1.6.5-2.4.1-.7.1-1.4.1-2.1 0-2.5-.8-4.4-2.3-5.8-1.6-1.4-3.6-2.1-6.1-2.1-2.8 0-5.2 1-7.1 2.8-1.9 1.9-2.9 4.2-2.9 7.1 0 .6.1 1.2.3 1.8.2.6.4 1.1.6 1.4.2.3.4.7.5 1 .2.3.3.5.3.6 0 .4-.1.9-.3 1.6-.2.6-.5 1-.8 1 0 0-.1-.1-.4-.1-.7-.2-1.3-.6-1.9-1.2-.5-.6-1-1.3-1.3-2-.3-.8-.5-1.6-.7-2.4-.2-.7-.2-1.5-.2-2.2z" class="ampstart-icon ampstart-icon-pinterest"></path></svg></a>
    </li>
    <li>
        <a href="#" target="_blank" class="inline-block p1" aria-label="Link to AMP HTML E-mail"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="18.4" viewBox="0 0 56 43"><title>email</title><path d="M10.5 6.4C9.1 6.4 8 7.5 8 8.9v21.3c0 1.3 1.1 2.5 2.5 2.5h34.9c1.4 0 2.5-1.2 2.5-2.5V8.9c0-1.4-1.1-2.5-2.5-2.5H10.5zm2.1 2.5h30.7L27.9 22.3 12.6 8.9zm-2.1 1.4l16.6 14.6c.5.4 1.2.4 1.7 0l16.6-14.6v19.9H10.5V10.3z" class="ampstart-icon ampstart-icon-email"></path></svg></a>
    </li>
</ul>

</amp-sidebar>
<!-- End Sidebar -->
  <!-- End Navbar -->

  <div class="center">

  <!-- Start Fullpage Hero -->
  <figure class="ampstart-image-fullpage-hero m0 relative mb4">
    <amp-img width="404" height="720" alt="Welcome to Beck &amp; Galo Modern American Cuisine" layout="responsive" src="../img/themes_2/hero.jpg" media="(max-width: 415px)"></amp-img>
    <amp-img height="720" alt="Welcome to Beck &amp; Galo Modern American Cuisine" layout="fixed-height" src="../img/themes_2/hero.jpg" media="(min-width: 416px)"></amp-img>
    <figcaption class="absolute top-0 right-0 bottom-0 left-0">
      <header class="p3">
        <h1 class="ampstart-fullpage-hero-heading mb3">
          <span class="ampstart-fullpage-hero-heading-text">
            <span class="h6 block caps">Welcome to</span><span class="h1 block bold caps my1">Beck & Galo</span><span class="h6 block caps">Modern American Cuisine</span>
          </span>
        </h1>

    </header>
    <footer class="absolute left-0 right-0 bottom-0">
      <a class="ampstart-btn inline-block ampstart-fullpage-hero-cta h5 m3 text-decoration-none" href="menu.amp.html">View Menu</a>
    </footer>
    </figcaption>
  </figure>
  <!-- End Fullpage Hero -->
  </div>

  <main id="content" role="main">
      <article class="px3">
            <h2 id="story" class="my4 theme2-anchored">Our Story</h2>
            <p class="mb1 ampstart-dropcap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus suscipit dictum. Duis posuere magna eget congue sodales. Maecenas auctor, ipsum at convallis tincidunt, nibh sem feugiat purus, et dapibus justo metus sit amet ante. Sed eu turpis sodales, convallis orci vel, congue tortor. Ut in ornare eros. Mauris nec faucibus libero. Pellentesque in magna justo. Aenean varius eleifend ante vel euismod.</p>
            <p class="mb1">Nulla egestas est in dui iaculis, at placerat nibh tincidunt. Curabitur at elit sit amet magna finibus congue. Donec non ante bibendum, tempus mauris at, pharetra lorem. Pellentesque lobortis in eros ac tincidunt. Praesent eu nisl sit amet massa suscipit faucibus a eu augue. Donec ipsum est, interdum non blandit vitae, bibendum vitae tellus. Suspendisse ultrices mollis elit, in hendrerit tellus pharetra vitae. Proin sed lectus maximus mauris tristique bibendum id vel sem. Curabitur sollicitudin ligula et purus dictum euismod. Donec tempus lacus in iaculis iaculis.</p>
            <p class="mb1">Suspendisse eu aliquet libero. Aenean malesuada vestibulum iaculis. Curabitur vitae ipsum interdum, feugiat odio non, lacinia nibh. Nulla vitae volutpat massa. Curabitur porttitor viverra massa, id lacinia est ornare non. Aliquam erat volutpat. Integer lobortis dictum dolor, at convallis nulla lacinia vitae. Cras sit amet placerat lectus. Vestibulum pulvinar finibus dui eget egestas. Quisque et sagittis urna. Nulla facilisi. Nunc malesuada, arcu quis volutpat hendrerit, dui libero eleifend ipsum, sit amet hendrerit dui ligula nec enim. Nunc dictum efficitur tempus. Fusce suscipit feugiat tellus, ac bibendum nunc semper suscipit.</p>
            <div class="my4 mxn3 center">

  <!-- Start Image with heading -->
  <figure class="ampstart-image-with-heading  m0 relative mb4">
    <amp-img src="../img/themes_2/bar.jpg" width="600" height="450" alt="Happy Hour Monday through Friday 5 PM" layout="responsive"></amp-img>
    <figcaption class="absolute right-0 bottom-0 left-0">
      <header class="ampstart-image-heading px2 py2 line-height-4"><h2 class="h1 bold">Happy Hour</h2><p class="h4">Mon-Fri 5PM</p></header>
    </figcaption>
  </figure>
  <!-- End Image with heading -->

            </div>
            <h2 id="locations" class="my4 theme2-anchored">Locations &amp; Hours</h2>
            <div class="col col-12 sm-col-6 mb4">
              <h3 class="mb1">San Francisco</h3>
              <p class="mb0">123 E Somewhere St.,<br>San Francisco, CA<br></p>
              <p class="mb0">Mon-Thu 11am–2pm, 4pm–9pm<br>Fri-Sun 11am–3pm, 4pm–12am<br></p>
            </div>
            <div class="col col-12 sm-col-6 mb4">
              <h3 class="mb1">San Jose</h3>
              <p class="mb0">123 S Elsewhere St.,<br>San Jose, CA<br></p>
              <p class="mb0">Mon-Thu 11am–2pm, 4pm–9pm<br>Fri-Sun 11am–3pm, 4pm–11pm<br></p>
            </div>
            <h2 id="gallery" class="my4 theme2-anchored">Photo Gallery</h2>
            <amp-image-lightbox id="lightbox" layout="nodisplay"></amp-image-lightbox>
            <amp-carousel class="my2 mxn3" height="200" layout="fixed-height" type="carousel">
                <amp-img src="../img/themes_2/hero.jpg" width="300" height="200" alt="Dining area" on="tap:lightbox" role="button" tabindex="0"></amp-img>
                <amp-img src="../img/themes_2/bar.jpg" width="267" height="200" alt="Bar area" on="tap:lightbox" role="button" tabindex="0"></amp-img>
                <amp-img src="../img/themes_2/waffles.jpg" width="300" height="200" alt="Caramel Banana Waffles" on="tap:lightbox" role="button" tabindex="0"></amp-img>
                <amp-img src="../img/themes_2/soup.jpg" width="300" height="200" alt="Pumpkin Soup" on="tap:lightbox" role="button" tabindex="0"></amp-img>
                <amp-img src="../img/themes_2/steak.jpg" width="300" height="200" alt="Steak" on="tap:lightbox" role="button" tabindex="0"></amp-img>
                <amp-img src="../img/themes_2/pie.jpg" width="300" height="200" alt="Key Lime Pie" on="tap:lightbox" role="button" tabindex="0"></amp-img>
            </amp-carousel>
      </article>
  </main>

  <!-- Start Footer -->
  <footer class="ampstart-footer flex flex-column items-center px3 ">


    <small>
      © Beck & Galo
    </small>
  </footer>
  <!-- End Footer -->

 </div>
</template>

<script>


export default {
 
}
</script>
