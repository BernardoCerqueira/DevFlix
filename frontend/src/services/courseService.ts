import { error } from "console"
import api from "./api"

export type EpisodeType = {
    id: number
    name: string
    synopsis: string
    order: number
    videoUrl: string
    secondsLong: number
}

export type CourseType = {
    id: number
    name: string
    thumbnailUrl: string
    synopsis: string
    episodes?: EpisodeType[]
}

const courseService = {
    getNewestCourses: async (): Promise<CourseType[] | null> => {
      try {
        const res = await api.get("/courses/newest")
        return res.data
      } catch (error: any) {
        console.error(
          "Erro ao buscar os cursos mais recentes:",
          error.response?.data?.message || error.message
        )
        return null
      }
    },

    getFeaturedCourses: async () => {
      const token = sessionStorage.getItem("onebitflix-token")

      const res = await api.get("/courses/featured", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .catch((error) => {
          console.log(error.response.data.message)

          return error.response
        })

      return res
    }
}

export default courseService