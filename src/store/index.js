import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import dayjs from 'dayjs';
import leagues from '../utils/leagues';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: [],
    date: dayjs()
  },
  mutations: {
    setGames (state, data) {
      state.games = data.games;
    },
    setDate (state, data) {
      state.date = data.date;
    }
  },
  actions: {
    async getGames ({ commit, state }, options) {
      const { sport } = options;
      const league = leagues[sport];
      const url = `https://site.api.espn.com/apis/site/v2/sports/${league}/scoreboard?dates=${state.date.format('YYYYMMDD')}&limit=200`;
      const games = (await axios.get(url)).data;
      commit('setGames', {
        sport,
        games: games.events
      });
    }
  },
  modules: {
  }
})
