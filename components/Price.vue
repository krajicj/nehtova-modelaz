<template>
  <div class="web-section">
    <div class="web-content">
      <h2 id="cenik" class="section-heading">Ceník</h2>

      <div class="price-cards">
        <div class="price-card">
          <div class="price-card-header"><h3>Nová modeláž nehtů</h3></div>
          <div class="price-card-footer">800 Kč</div>
        </div>
        <div class="price-card">
          <div class="price-card-header"><h3>Gel lak / Shellac</h3></div>
          <div class="price-card-footer">630 Kč</div>
        </div>
        <div class="price-card">
          <div class="price-card-header"><h3>Doplnění modeláže</h3></div>
          <div class="price-card-footer">660 Kč</div>
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
  ]
}
</script>

<style>
</style>