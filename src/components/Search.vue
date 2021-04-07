<template>
  <v-text-field
      v-throttle:[1000]
      @input="searchHandler"
      v-model="search"
      label="Поиск пакета"
      dark
      flat
      solo-inverted
      hide-details
  />
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      search: '',
      timer: null,
    }
  },
  methods: {
    searchHandler() {
      clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        try {
          this.$store.dispatch('setSearchingState', true);
          await this.$store.dispatch('getPackagesFromSearch', {query: this.search});
        } catch(err) {
          console.error(err)
        } finally {
          this.$store.dispatch('setSearchingState', false);
        }
      }, 500);
    }
  },
}
</script>

<style scoped>

</style>
