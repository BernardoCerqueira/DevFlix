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
          return error.response
        })

      return res
    },

    addToFav: async (courseId: number | string) => {
      const token = sessionStorage.getItem("onebitflix-token")

      const res = await api.post("/favorites", {courseId}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .catch((error) => {
          return error.response
        }) 

      return res
    },

    removeFav: async(courseId: number | string) => {
      const token = sessionStorage.getItem("onebitflix-token")

      const res = await api.delete("/favorites", {
        headers:{
          Authorization: `Bearer ${token}`
        },
        data:{
          courseId
        }
      })
        .catch((error) => {
          return error.response
        })

      return res
    },

    getFavCourse: async() => {
      const token = sessionStorage.getItem("onebitflix-token")

      const res = await api.get("/favorites", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .catch((error) => {
          return error.response
        })
      
      return res
    }
}

export default courseService