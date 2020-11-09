<template>
  <div class="comments-component card rounded shadow p-1 mb-2 bg-white align-items-center">
    <h5>{{ commentsProp.creator.name }}</h5>
    <p>{{ commentsProp.body }}</p>
    <!-- <span>
      <button type="button" v-if="commentsProp.creatorEmail == profile.email" class="btn btn-success" data-toggle="modal" data-target="#commentModal">
        Edit?
      </button>
      <button class="btn btn-danger" v-if="commentsProp.creatorEmail == profile.email" @click="removeComment">
        &times;
      </button></span> -->
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'

export default {
  name: 'CommentsComponent',
  props: {
    commentsProp: Object
  },
  setup(props) {
    // const route = useRoute()
    const state = reactive({
      editComment: {
        blog: props.commentsProp.blog,
        _id: props.commentsProp._id
      }
    })
    // onMounted(() => AppState.comments)
    return {
      state,
      profile: computed(() => AppState.profile),
      comments: computed(() => props.commentsProp),
      removeComment() {
        blogsService.removeComment(props.commentsProp._id, props.commentsProp.blog)
      },
      editComment() {
        blogsService.editComment(state.editComment)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
