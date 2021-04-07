<template>
  <v-app>
    <app-header/>
    <v-main>
      <table-wrap/>
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script>

import TableWrap from "@/components/table/TableWrap";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  name: 'App',

  components: {
    AppFooter,
    AppHeader,
    TableWrap
  },

  data () {
    return {
    }
  },
};
</script>
