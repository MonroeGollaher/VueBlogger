import { api } from './AxiosService'
import { AppState } from '../AppState'
// import { AppSate } from '../AppState'

class BlogsService {
  async getAllBlogs() {
    try {
      const res = await api.get('')
      AppState.allBlogs = res.data
      console.log(res.data + 'blogs servide')
    } catch (error) {
      console.error(error)
    }
  }
}

export const blogsService = new BlogsService()
