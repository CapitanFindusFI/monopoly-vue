<template>
  <form @submit.prevent="setSettings">
    <div class="form-group">
      <label for="settings-playersInitialMoney">
        {{$t('game.settings.playersInitialMoney')}}
      </label>
      <input id="settings-playersInitialMoney" type="number" class="form-control"
             v-model="settings.playerInitialMoney"/>
    </div>
    <div class="form-check">
      <input id="settings-allowBid" type="checkbox" class="form-check-input"
             v-model="settings.allowBid"/>
      <label for="settings-allowBid" class="form-check-label">
        {{$t('game.settings.allowBid')}}
      </label>
    </div>
    <h4 class="text-center">{{$t('game.settings.players.title')}}</h4>
    <div class="row">
      <div class="form-group col-lg-12" v-for="(player, index) in playerNames" :key="index">
        <label :for="player.htmlID">
          {{$t('game.settings.players.name', {index})}}
        </label>
        <input :id="player.htmlID" type="text"
               class="form-control"
               v-model="player.name"/>
      </div>
      <div class="form-group col-lg-12">
        <button type="button" class="btn btn-sm btn-outline-primary" @click="addPlayer">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-block btn-outline-primary"
              :disabled="!playerNames.length">
        {{$t('game.settings.apply')}}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'GameSettings',
  data() {
    return {
      settings: {
        playerInitialMoney: 2000,
        allowBid: true,
      },
      playerNames: [],
    };
  },
  methods: {
    addPlayer() {
      this.playerNames.push({
        name: null,
        htmlID: `player-${this.playerNames.length}`,
      });
    },
    setSettings() {
      this.$emit('settings-set', {
        settings: this.settings,
        playerNames: this.playerNames.map((p) => p.name),
      });
    },
  },
};
</script>

<style scoped>

</style>
