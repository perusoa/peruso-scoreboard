<template>
  <v-container class="c-date-controls grey darken-1 mb-3" fluid>
    <v-row>
      <v-col class="c-date-controls__column">
        <v-btn @click="previousDay" icon>
          <v-icon large>mdi-chevron-left</v-icon>
        </v-btn>
        <div class="text-center font-weight-bold text-h4 pl-4 pr-4">{{ date.format('MMMM D, YYYY') }}</div>
        <v-btn @click="nextDay" icon>
          <v-icon large>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'DateControls',
  data () {
    return {
      date: dayjs()
    }
  },
  methods: {
    nextDay () {
      this.date = this.date.add(1, 'day');
      this.$emit('date-change', this.date);
    },
    previousDay () {
      this.date = this.date.subtract(1, 'day');
      this.$emit('date-change', this.date);
    }
  }
}
</script>

<style lang="scss">
.c-date-controls__column {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>