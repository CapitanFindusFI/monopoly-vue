<template>
  <div id="app">
    <h1>{{$t('game.title')}}</h1>
    <div class="container">
      <div class="row justify-content-center">
        <template v-if="gameRunning">
          <tile v-for="(tile, index) in tiles" :key="tile.getName()"
                :index="index"
                :tile="tile"></tile>
        </template>
        <game-settings v-else
                       class="col-lg-6 col-md-10 col-sm-12"
                       @settings-set="onSettingsSet">

        </game-settings>
      </div>
    </div>
  </div>
</template>

<script>
import Tile from './components/Tile.vue';
import GameSettings from './components/settings/GameSettings.vue';

export default {
  name: 'App',
  components: {
    GameSettings,
    Tile,
  },
  data() {
    return {
      tiles: [],
      gameRunning: false,
    };
  },
  methods: {
    onSettingsSet($gameSettings) {
      const { playerNames, settings } = $gameSettings;
      this.$root.$game.setupGame(playerNames, settings);
      this.beginGame();
    },
    beginGame() {
      this.tiles = this.$root.$game.getTiles();
      this.$root.$game.beginGame();
      this.gameRunning = this.$root.$game.getIsGameRunning();
    },
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
