<template>
  <div class="blogs-component col-3 card shadow-lg text-center rounded" v-if="blogsProp.creator">
    <h2>{{ blogsProp.title }}</h2>
    <p>{{ blogsProp.body }}</p>
    <p>Author: {{ blogsProp.creator.name }}</p>
  </div>
  <div class="blogs-component col-3 card shadow-lg text-center" v-else>
    <h2>{{ blogsProp.title }}</h2>
    <p>{{ blogsProp.body }}</p>
    <p>Author: {{ blogsProp.creatorEmail }}</p>
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
