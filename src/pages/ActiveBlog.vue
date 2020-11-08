<template>
  <div class="activeBlog-page">
    <div class="row d-flex justify-content-center align-items-center text-center currentblog">
      <div class="col-6 card shadow-lg rounded">
        <h1 class="mr-5">
          {{ activeBlog.title }}<span v-if="activeBlog.creatorEmail"><button type="button" class="btn btn-secondary justify-self-end" data-toggle="modal" data-target="#blogModal">
            Edit
          </button><button class="btn btn-danger" @click="removeBlog">&times;</button></span>
        </h1>
        <p>{{ activeBlog.body }}</p>
        <p>{{ comments.body }}</p>
        <h1>Comments:</h1>
        <!-- Edit Modal -->
        <form @submit.prevent="editBlog">
          <div class="modal" tabindex="-1" role="dialog" id="blogModal">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">
                    <input class="border border-none" type="text" v-model="state.editBlog.title" placeholder="Title">
                  </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Content</span>
                    </div>
                    <textarea class="form-control" aria-label="With textarea" v-model="state.editBlog.body">
                  </textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-primary" id="submitBtn">
                    Save changes
                  </button>
                  <button type="button" class="btn btn-danger" data-dismiss="modal">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        <!-- Comment Cpmponent  -->
        <comments-component v-for="comments in comments" :key="comments.body" :comments-prop="comments" />

        <!-- Add Comment Modal -->
        <form class="form-group d-flex justify-content-center mt-3" @submit.prevent="addComment">
          <input type="text" name="comment" placeholder="Add comment" v-model="state.newComment.body">
          <button class="btn btn-info" type="submit">
            &#43;
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, computed, reactive } from 'vue'
import { blogsService } from '../services/BlogsService'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
import CommentsComponent from '../components/CommentsComponent'
import router from '../router'
export default {
  name: 'ActiveBlogPage',
  components: { CommentsComponent },
  setup() {
    const route = useRoute()
    const state = reactive({
      newComment: {
        blog: route.params.blogId
      },
      editBlog: {
        blogId: route.params.blogId
      }
    })
    onMounted(() => {
      blogsService.showActiveBlog(route.params.blogId)
      blogsService.getComments(route.params.blogId)
    })
    return {
      state,
      activeBlog: computed(() => AppState.activeBlog),
      comments: computed(() => AppState.comments),
      removeBlog() {
        blogsService.removeBlog(route.params.blogId)
        router.push({ name: 'Home' })
      },
      addComment() {
        blogsService.addComment(state.newComment)
      },
      editBlog() {
        blogsService.editBlog(state.editBlog)
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
