<template>
  <div class="comments-component">
    {{ commentsProp.body }}
  </div>
</template>

<script>
export default {
  name: 'CommentsComponent',
  props: ['commentsProp'],
  setup(props) {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
