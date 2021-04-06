<template>
  <tr class="table__package-column">
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
  }
}
</script>

<style lang="scss" scoped>
.table__package-column {
  cursor: pointer;
}
</style>
