import { api } from './AxiosService'
import { AppState } from '../AppState'

class BlogsService {
  async getAllBlogs() {
    try {
      const res = await api.get('')
      AppState.allBlogs = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async showActiveBlog(blogId) {
    try {
      const res = await api.get('' + blogId)
      AppState.activeBlog = res.data
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }
}

export const blogsService = new BlogsService()
