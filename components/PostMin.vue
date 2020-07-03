<template>
  <div>
    <div class="web-section-right">
      <div class="web-content">
        <h2 id="aktuality" class="section-heading">
          Poslední aktuality
        </h2>
        <div class="flex post-min-section">
          <div v-for="post in posts" :key="post.id" class="post-min">
            <article class="">
              <div class="img-wrapper">
                <nuxt-link
                  :to="{ path: `aktuality/${post.attributes.url}` }"
                  append
                >
                  <amp-img
                    class=""
                    :srcset="
                      require(`~/assets${post.attributes.obrazek}`).srcSet
                    "
                    width="600"
                    height="400"
                    layout="responsive"
                    :alt="post.attributes.titulek"
                  ></amp-img>
                </nuxt-link>
              </div>
              <div class="post-min-text-wrapper">
                <div class="post-min-heading">
                  <nuxt-link
                    :to="{ path: `aktuality/${post.attributes.url}` }"
                    append
                  >
                    <h3>{{ post.attributes.titulek }}</h3>
                  </nuxt-link>
                </div>
                <div class="post-min-date">
                  <CalendarIcon /> &nbsp;{{ post.attributes.date | dateFormat }}
                </div>
                <div v-html="post.attributes.text" class="post-min-text"></div>
              </div>
            </article>
          </div>
        </div>
        <!-- <div class="only-mobile">
          <div v-for="post in posts" :key="post.id" class="news-strip flex">
            <nuxt-link
              :to="{ path: `aktuality/${post.attributes.url}` }"
              append
            >
              <div class="post-min-mobile-text">
                <h3>{{ post.attributes.titulek }}</h3>
              </div>
              <amp-img
                :srcset="require(`~/assets${post.attributes.obrazek}`).srcSet"
                width="200"
                height="200"
                layout="responsive"
              ></amp-img>
              <u
                ><CalendarIcon /> &nbsp;{{
                  post.attributes.date | dateFormat
                }}</u
              >
            </nuxt-link>
          </div>
        </div> -->

        <a href="/aktuality" class="button btn-center">Všechny aktuality</a>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarIcon from "./icons/calendarIcon";

export default {
  props: ['posts'],
  components: {
    CalendarIcon
  },
  filters: {
    dateFormat: function (dateToFormat) {
      const parseDate = new Date(dateToFormat);
      const day = (parseDate.getDate() < 10 ? '0' : '') + parseDate.getDate();
      const month = (parseDate.getUTCMonth() < 9 ? '0' : '') + (parseDate.getUTCMonth() + 1);
      return `${day}.${month}.${parseDate.getFullYear()}`;
    }
  }
}
</script>
