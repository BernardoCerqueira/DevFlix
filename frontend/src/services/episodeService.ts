import api from "./api"
import { CourseType } from "./courseService"

interface watchTimeParams{
    episodeId: number
    seconds: number
}

const watchEpisodeService = {
    getWatchTime: async (episodeId: number) => {
        const token = sessionStorage.getItem("onebitflix-token")
  
        const res = await api.get(`/episodes/${episodeId}/watchTime`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .catch((error) => {
            return error.response
          })
  
        return res
      },

      setWatchTime: async ({episodeId, seconds}: watchTimeParams) => {
        const token = sessionStorage.getItem("onebitflix-token")
  
        const res = await api.post(`/episodes/${episodeId}/watchTime`, {seconds}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .catch((error) => {
            return error.response
          })
  
        return res
      },

      getLastEpisodeWatched: async(courseId: number) => {
        const token = sessionStorage.getItem("onebitflix-token")

        const res = await api.get(`/episodes/${courseId}/lastEpisodeWatched`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).catch((error) => {
          return error.response
        })

        return res.data
      }
}

export default watchEpisodeService