<template>
  <div class="masonry">
    <div v-for="post in posts" :key="post.id" class="masonry-item">
      <article class="">
        <div class="img-wrapper">
          <nuxt-link :to="{ path: `${post.attributes.url}` }" append>
            <amp-img
              class=""
              :srcset="require(`~/assets${post.attributes.obrazek}`).srcSet"
              width="600"
              height="400"
              layout="responsive"
              :alt="post.attributes.titulek"
            ></amp-img>
          </nuxt-link>
        </div>
        <div class="post-min-text-wrapper">
          <div class="post-min-heading">
            <nuxt-link :to="{ path: `${post.attributes.url}` }" append>
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
