<template>
  <div class="activeBlog-page">
    <div class="row justify-content-center text-center">
      <div class="col-8 card shadow-lg">
        <h1>{{ activeBlog.title }}</h1>
        <p>{{ activeBlog.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { blogsService } from '../services/BlogsService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
export default {
  name: 'ActiveBlogPage',
  setup() {
    const route = useRoute()
    onMounted(() => {
      blogsService.showActiveBlog(route.params.id)
    })
    return {
      activeBlog: computed(() => AppState.activeBlog)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
