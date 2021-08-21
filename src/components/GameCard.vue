<template>
  <v-card color="grey darken-3" class="c-game-card">
    <div class="c-game-card__inner pa-4">
      <game-team
        :team="awayTeam" />
      <div class="c-game-card__divider">
        <div class="c-game-card__score text-h2 font-weight-bold">{{ awayTeam.score }}</div>
        <div class="c-game-card__status ml-4 mr-4 text-center">
          <span class="font-weight-bold text-h6">@</span>
          <div class="c-game-card__status-text text-overline text-center">{{ isScheduled || status.type.shortDetail }}</div>
        </div>
        <div class="c-game-card__score text-h2 font-weight-bold">{{ homeTeam.score }}</div>
      </div>
      <game-team
        :team="homeTeam" />
    </div>
    <v-progress-linear v-if="inProgress" indeterminate color="green" />
  </v-card>
</template>

<script>
import dayjs from 'dayjs';
import GameTeam from './GameTeam';

export default {
  name: 'GameCard',
  components: {
    GameTeam
  },
  props: {
    game: Object
  },
  computed: {
    status () {
      return this.game.status;
    },
    isScheduled () {
      if (this.status.type.name === 'STATUS_SCHEDULED') {
        return dayjs(this.game.date).format('h:mmA');
      }
      return false;
    },
    inProgress () {
      return this.status.type.name === 'STATUS_IN_PROGRESS';
    },
    teams () {
      return this.game.competitions[0].competitors;
    },
    homeTeam () {
      return this.teams.find(team => team.homeAway === 'home');
    },
    awayTeam () {
      return this.teams.find(team => team.homeAway === 'away');
    }
  }
}
</script>

<style lang="scss" scoped>
.c-game-card__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-game-card__divider {
  display: flex;
}
</style>