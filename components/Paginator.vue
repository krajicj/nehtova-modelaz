<template>
  <div class="paginator-wrapper">
    <div class="paginator">
      <div v-for="pageItem in paginatorItems" :key="pageItem.page">
        <nuxt-link
          v-if="pageItem.type != 'dots'"
          :to="'/aktuality/strana/' + pageItem.page"
          :class="[pageItem.type, 'btn-page']"
          ><span class="page-number">{{ pageItem.page }}</span></nuxt-link
        >
        <div class="btn-page dots" v-else><DotsIcon /></div>
      </div>
    </div>
  </div>
</template>

<script>
import DotsIcon from "./icons/dotsIcon.vue";

export default {
  props: ["page", "pagesNum"],
  components: {
    DotsIcon,
  },
  computed: {
    paginatorItems() {
      let paginatorItems = [];

      //Show all pages
      if (this.pagesNum < 5) {
        for (let i = 1; i <= this.pagesNum; i++) {
          paginatorItems.push({
            page: i,
            type: this.page == i ? "active" : "basic",
          });
        }
      } else {
        //Active page is not in center position
        //first page
        if (this.page == 1) {
          paginatorItems = [
            { page: 1, type: "active" },
            { page: 2, type: "basic" },
            { page: 3, type: "basic" },
            { page: 4, type: "dots" },
            { page: this.pagesNum, type: "basic" },
          ];
        } else {
          //Not on the end of the paginator
          if (this.pagesNum - this.page > 2) {
            paginatorItems = [
              { page: this.page - 1, type: "basic" },
              { page: this.page, type: "active" },
              { page: parseInt(this.page) + 1, type: "basic" },
              { page: 4, type: "dots" },
              { page: this.pagesNum, type: "basic" },
            ];
          } else {
            //End of the paginator
            for (let i = this.pagesNum - 4; i <= this.pagesNum; i++) {
              paginatorItems.push({
                page: i,
                type: this.page == i ? "active" : "basic",
              });
            }
          }
        }
      }

      return paginatorItems;
    },
  },
};
</script>
