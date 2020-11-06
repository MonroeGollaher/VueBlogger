<template>
  <div class="home">
    <h1>Blogzz</h1>
    <div class="row">
      <blogs-component v-for="blogs in allBlogs" :key="blogs.tags" :blogs-prop="blogs" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { blogsService } from '../services/BlogsService'
import BlogsComponent from '../components/BlogsComponent'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  components: { BlogsComponent },
  setup() {
    onMounted(() => {
      blogsService.getAllBlogs()
    })
    return {
      allBlogs: computed(() => AppState.allBlogs)
    }
  }
}
</script>
