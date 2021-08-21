<template>
  <div class="c-games">
    <v-container class="grey darken-4" fluid>
      <v-row>
        <v-col>
          
        </v-col>
        <v-col>
          <v-select
            v-model="sport"
            :items="leagues"
            label="Leagues"
            outlined
          ></v-select>
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
  name: 'Baseball',
  components: {
    DateControls,
    GameCard
  },
  data () {
    return {
      sport: 'baseball',
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
    async getGames (date) {
      await this.$store.dispatch('getGames', {
        sport: this.sport,
        date: date || null
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
