<template>
  <div class="tile p-3">
    <component :is="getTileComponent()"></component>
  </div>
</template>

<script>
import Tile from '../lib/models/tiles/Tile';
import TileTypes from '../lib/models/tiles/TileTypes';
import FieldTile from './tiles/FieldTile.vue';
import SpecialTile from './tiles/SpecialTile.vue';
import CardTile from './tiles/CardTile.vue';
import TaxTile from './tiles/TaxTile.vue';

const TILE_COMPONENTS = {
  [TileTypes.PROPERTY]: 'FieldTile',
  [TileTypes.CARD]: 'CardTile',
  [TileTypes.TAX]: 'TaxTile',
  [TileTypes.SPECIAL]: 'SpecialTile',
};

export default {
  name: 'Tile',
  components: {
    CardTile,
    FieldTile,
    SpecialTile,
    TaxTile,
  },
  props: {
    tile: {
      type: Tile,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getTileComponent() {
      return TILE_COMPONENTS[this.tile.getType()];
    },
  },
};
</script>

<style scoped>

</style>
