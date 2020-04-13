<template>
  <div class="tile">
    <component :is="getTileComponent()"></component>
  </div>
</template>

<script>
  import Tile from '../lib/models/tiles/Tile';
  import TileTypes from '../lib/models/tiles/TileTypes';

  const TILE_COMPONENTS = {
    [TileTypes.PROPERTY]: 'FieldTile',
    [TileTypes.CARD]: 'CardTile',
    [TileTypes.TAX]: 'TaxTile',
    [TileTypes.SPECIAL]: 'SpecialTile',
  };

  export default {
    name: 'Tile',
    props: {
      tile: {
        type: Tile,
        required: true,
      },
    },
    methods: {
      getTileComponent() {
        return TILE_COMPONENTS[this.tile.getType()];
      },
    }
  };
</script>

<style scoped>

</style>
