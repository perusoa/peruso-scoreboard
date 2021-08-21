import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import dayjs from 'dayjs';
import leagues from '../utils/leagues';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: []
  },
  mutations: {
    setGames (state, data) {
      state.games = data.games;
    }
  },
  actions: {
    async getGames ({ commit }, options) {
      const { sport, date } = options;
      const currentDate = date ? date.format('YYYYMMDD') : dayjs().format('YYYYMMDD');
      const league = leagues[sport];
      const url = `https://site.api.espn.com/apis/site/v2/sports/${league}/scoreboard?dates=${currentDate}&limit=200`;
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
