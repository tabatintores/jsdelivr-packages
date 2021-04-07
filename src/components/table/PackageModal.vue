<template>
  <div class="package-modal">
    <v-row class="package-modal__links">
      <a class="package-modal__link" :href="package.links.homepage" target="_blank">
        <v-icon
            large
        >
          mdi-home
        </v-icon>
      </a>
      <a class="package-modal__link" :href="package.links.github" target="_blank">
        <v-icon
            large
        >
          mdi-github
        </v-icon>
      </a>
      <a class="package-modal__link" :href="package.links.npm" target="_blank">
        <v-icon
            large
        >
          mdi-npm
        </v-icon>
      </a>
      <a class="package-modal__link" :href="package.links.bugs" target="_blank">
        <v-icon
            large
            color="green darken-2"
        >
          mdi-bug
        </v-icon>
      </a>
    </v-row>
    <v-row >
      <h3 class="package-modal__title">
        {{package.name}} by <a :href="'mailto:' + package.publisher.email">{{package.publisher.username}}</a>
      </h3>
    </v-row>
    <v-row>
      <span class="package-modal__tag" v-if="package.keywords" v-for="tag in package.keywords">
        #{{tag}}
      </span>
    </v-row>
    <v-row>
      <span>Version: {{package.version}}</span>
    </v-row>
    <v-row>
      <span>Description: {{package.description}}</span>
    </v-row>
    <v-row class="d-flex">
      <span style="margin-right: 5px;">Maintainers:</span>
      <a class="package-modal__maintainer" v-for="maintainer in package.maintainers" :href="'mailto:' + maintainer.email">{{maintainer.username}}</a>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "PackageModal",
  props: {
    package: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .package-modal {
    padding: 30px;
    font-family: Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    &__title {
      font-size: 24px;
    }
    &__tag {
      color: #757474;
      margin-right: 5px;
    }
    &__maintainer {
      margin-right: 5px;
      &:first-child {
        margin-left: 5px;
      }
    }
    &__links {
      margin-bottom: 10px;
    }
    &__link {
      text-decoration: none;
      &:nth-child(n+2) {
        margin-left: 10px;
      }
    }
  }
</style>
