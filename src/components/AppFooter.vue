<template>
  <v-footer
      color="primary lighten-1"
      padless
  >
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          color="white"
          text
          rounded
          class="my-2"
      >
        <a href="https://github.com/tabatintores" target="_blank" class="app-footer__link">GitHub</a>
      </v-btn>
      <v-col
          class="primary py-4 text-center white--text"
          cols="12"
      >
        Made by Kanat Kolbekov
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
name: "AppFooter"
}
</script>

<style lang="scss" scoped>
  .app-footer {
    &__link {
      color: #FFF;
      text-decoration: none;
    }
  }
</style>
