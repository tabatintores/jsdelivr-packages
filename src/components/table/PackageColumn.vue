<template>
  <tr class="table__package-column" @click="openPackageModal">
    <td>{{ package.name }}</td>
    <td>{{ package.publisher.username }}</td>
    <td>{{ package.version }}</td>
    <td>{{ package.description }}</td>
  </tr>
</template>

<script>
export default {
  name: "PackageColumn",
  props: {
    package: {
      type: Object,
      required: true
    }
  },
  methods: {
    openPackageModal() {
      console.log(this.package)
      const PackageModal = () => import(`@/components/table/PackageModal`);
      this.$modal.show(PackageModal, {
        package: this.package
      }, {
        name: 'PackageModal',
        maxWidth: 500,
        height: 'auto'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.table__package-column {
  cursor: pointer;
}
</style>
