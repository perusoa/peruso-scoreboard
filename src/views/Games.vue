<template>
  <div class="c-games">
    <v-container class="grey darken-4 mb-4" fluid>
      <v-row>
        <v-col class="text-center mt-6">
          <h1>Sport Scoreboard</h1>
          <h4>By: Anthony Peruso</h4>
          <p class="mt-3">This is a simple scoreboard that allows you to see a specific American sport league by date using the free ESPN API. In progress games will have a green progress bar displayed. Enjoy!</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="pb-0">
          <v-select
            v-model="sport"
            :items="leagues"
            label="Leagues"
            outlined
          ></v-select>
        </v-col>
        <v-col cols="12" md="6" class="pb-0">
          <v-btn
            color="primary"
            block
            x-large
            @click="getGames">
            Refresh Games
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <date-controls
      @date-change="getGames" />
    <v-container fluid>
      <v-row v-if="games.length > 0">
        <v-col
          v-for="game in games"
          :key="game.id"
          md="4">
          <game-card
            :game="game" />
        </v-col>
      </v-row>
      <v-row v-else class="mt-6 pa-6">
        <v-col>
          <h2 class="text-center">There are no games on today, please change your date and try again!</h2>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DateControls from '../components/DateControls';
import GameCard from '../components/GameCard';

export default {
  name: 'Games',
  components: {
    DateControls,
    GameCard
  },
  data () {
    return {
      sport: 'football',
      leagues: [
        {
          text: 'MLB',
          value: 'baseball'
        },
        {
          text: 'NFL',
          value: 'football'
        },
        {
          text: 'NHL',
          value: 'hockey'
        },
        {
          text: 'NBA',
          value: 'basketball'
        }
      ]
    }
  },
  async created () {
    await this.getGames();
  },
  computed: {
    games () {
      return this.$store.state.games;
    }
  },
  methods: {
    async getGames () {
      await this.$store.dispatch('getGames', {
        sport: this.sport
      });
    }
  },
  watch: {
    async sport () {
      await this.getGames();
    }
  }
}
</script>

<style>
.v-text-field__details {
  display: none !important;
}
</style>
