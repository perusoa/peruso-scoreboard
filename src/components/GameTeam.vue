<template>
  <div class="c-game-team">
    <v-img
      class="c-game-team__logo"
      contain
      max-width="50"
      :src="logo"
      :alt="teamName + ' Logo'" />
    <p class="text-overline mt-2 mb-0 text-center">{{ currentRecord }}</p>
  </div>
</template>

<script>
export default {
  name: 'GameTeam',
  props: {
    team: Object
  },
  computed: {
    logo () {
      return this.team.team.logo;
    },
    teamName () {
      return this.team.team.displayName;
    },
    currentRecord () {
      return this.team.records ? this.team.records.find(record => record.type === 'total').summary : '0-0';
    }
  }
}
</script>

<style>

</style>