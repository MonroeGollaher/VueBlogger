<template>
  <div class="blogs-component col-3 card shadow-lg">
    <h1>{{ blogsProp.title }}</h1>
    <p>{{ blogsProp.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'BlogsComponent',
  props: ['blogsProp'],
  setup(props) {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
