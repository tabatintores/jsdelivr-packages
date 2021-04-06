<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <v-toolbar-title>Search packages</v-toolbar-title>
    <search class="ml-5"/>
  </v-app-bar>
</template>

<script>
import Search from "@/components/Search";
import axios from 'axios';

export default {
  name: "AppHeader",
  components: {Search},
  async mounted() {
  }
}
</script>

<style scoped>

</style>
