<template>
  <div class="web-section">
    <div class="web-content">
      <h2 id="cenik" class="section-heading">Ceník</h2>

      <div class="price-cards">
        <div
          class="price-card"
          v-for="price in displayedPrices"
          :key="price.nazev"
        >
          <div class="price-card-header"><h3>{{ price.nazev }}</h3></div>
          <div class="price-card-footer">{{ price.cena }} Kč</div>
        </div>
      </div>
      <a href="/cenik" class="button btn-center">Kompletní ceník</a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'prices'
  ],
  computed: {
    displayedPrices () {
      return Array.isArray(this.prices)
        ? this.prices.filter(price => price.homepage)
        : []
    }
  }
}
</script>

<style>
</style>