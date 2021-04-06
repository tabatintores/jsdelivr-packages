<template>
  <v-spacer class="max-width">
    <v-simple-table
        fixed-header
    >
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            Название
          </th>
          <th class="text-left">
            Автор
          </th>
          <th class="text-left">
            Версия
          </th>
          <th class="text-left">
            Описание
          </th>
        </tr>
        </thead>
        <tbody>
        <package-column
            v-if="packagesList.length"
            v-for="item in packagesList"
            :package="item.package"
            :key="item.package.name"
        />
        <tr v-else>
          <td>
            Поиск не дал результатов
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center" v-if="packagesList.length">
      <v-container class="max-width">
        <v-pagination
            v-model="page"
            :length="Math.floor(totalPackages/10)"
        ></v-pagination>
      </v-container>
    </div>
  </v-spacer>
</template>

<script>
import PackageColumn from "@/components/table/PackageColumn";
import {mapGetters} from "vuex";

export default {
  name: "TableWrap",
  components: {PackageColumn},
  data() {
    return {
      page: 1
    }
  },
  computed: {
    ...mapGetters(['packagesList', 'totalPackages', 'isSearching'])
  },
  watch: {
    page(newValue, oldValue) {
      this.$store.dispatch('getPackagesFromSearch', {offset: newValue * 10 - 10});
    }
  },
}
</script>

<style scoped>

</style>
