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
}

export default courseService