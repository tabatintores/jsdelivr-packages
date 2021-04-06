<template>
  <v-app-bar
      app
      color="primary"
      dark
  >
    <v-toolbar-title>jsdelivr-packages</v-toolbar-title>
    <search class="ml-5"/>
  </v-app-bar>
</template>

<script>
import Search from "@/components/Search";

export default {
  name: "AppHeader",
  components: {Search}
}
</script>

<style scoped>

</style>
