<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">
          Bloggz
        </h1>
        <p class="lead">
          See what others are saying
        </p>
      </div>
    </div>
  </div>

  <div class="row">
    <blogs-component @click="showActiveBlog(blogs.id)" v-for="blogs in allBlogs" :key="blogs.tags" :blogs-prop="blogs" />
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { blogsService } from '../services/BlogsService'
import BlogsComponent from '../components/BlogsComponent'
import { AppState } from '../AppState'
import router from '../router'

export default {
  name: 'Home',
  components: { BlogsComponent },
  setup() {
    onMounted(() => {
      blogsService.getAllBlogs()
    })
    return {
      allBlogs: computed(() => AppState.allBlogs),
      showActiveBlog(blogId) {
        blogsService.showActiveBlog(blogId)
        router.push({ name: 'ActiveBlogPage', params: { id: blogId } })
      }
    }
  }
}
</script>
