<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <tile v-for="tile in tiles" :key="tile.getName()" :tile="tile"></tile>
  </div>
</template>

<script>
import Tile from './components/Tile.vue';

export default {
  name: 'App',
  components: {
    Tile,
  },
  data() {
    return {
      tiles: this.$root.$game.getTiles(),
    };
  },
  created() {
    console.log(this.$root.$game);
  },
};
</script>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
