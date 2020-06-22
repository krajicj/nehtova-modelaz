<template>
  <div :id="id" class="web-section-item" :class="{ 'last-item': isLast }">
    <div class="web-content">
      <div class="web-section-type">
        <div class="box-text flex-item" :class="{ 'section-right': isOdd }">
          <div class="">
            <h2 v-if="post.attributes.url" class="h3">
              <nuxt-link :to="{ path: post.attributes.url }" append>
                {{ post.attributes.titulek }}
              </nuxt-link>
            </h2>
            <h2 v-else class="h3">
              {{ post.attributes.titulek }}
            </h2>
            <div v-if="hasDate" class="date-blog">
              <!-- <i class="fa fa-calendar"></i>  -->
              <CalendarIcon />&nbsp;{{ dateFormat }}
            </div>
            <div class="section-text" v-html="post.attributes.text"></div>
            <nuxt-link
              :to="{ path: post.attributes.url }"
              class="post-show-more"
              v-if="post.attributes.url"
              append
              >Více...</nuxt-link
            >
          </div>
        </div>
        <div
          class="box-image flex-item "
          :class="{ 'section-left': isOdd, 'section-right': !isOdd }"
        >
          <amp-img
            class=""
            :srcset="require(`~/assets${post.attributes.obrazek}`).srcSet"
            width="600"
            height="400"
            layout="responsive"
            sizes="(min-width: 768px) 400px, 80vw"
            :alt="post.attributes.titulek"
          ></amp-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarIcon from "./icons/calendarIcon";

export default {
  props: ['post', 'id', 'index', 'count'],
  components: {
    CalendarIcon
  },
  computed: {
    isOdd () {
      return this.index % 2;
    },
    isLast () {
      return this.index === (this.count - 1);
    },
    hasDate () {
      return typeof (this.post.attributes.date) !== 'undefined';
    },
    dateFormat () {
      if (!this.hasDate) {
        return ''
      }
      const parseDate = new Date(this.post.attributes.date);
      const day = (parseDate.getDate() < 10 ? '0' : '') + parseDate.getDate();
      const month = (parseDate.getUTCMonth() < 9 ? '0' : '') + (parseDate.getUTCMonth() + 1);
      return `${day}.${month}.${parseDate.getFullYear()}`;

    }
  }
}
</script>
