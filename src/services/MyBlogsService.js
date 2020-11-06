import { api } from './AxiosService'
import { AppState } from '../AppState'

class MyBlogsService {
  async getMyBlogs() {
    try {
      const res = await api.get('')
      AppState.userBlogs = res.data
    } catch (error) {
      console.error(error)
    }
  }
}

export const myBlogsService = new MyBlogsService()
