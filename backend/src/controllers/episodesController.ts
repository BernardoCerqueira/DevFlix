import { Request, Response } from "express";
import { episodeService } from "../services/episodeService";
import { AuthenticatedRequest } from "../middlewares/auth";
import { Course, Episode, User, WatchTime } from "../models";
import { Op } from "sequelize";

export const episodesController = {
    // GET /episodes/stream?videoUrl=
    stream: async (req: Request, res: Response) => {
        const { videoUrl } = req.query

        try {
            if(typeof videoUrl !== 'string') throw new Error("videoUrl param must be of type string")
            
            const range = req.headers.range //bytes=0-1024

            episodeService.streamEpisodeToResponse(res, videoUrl, range)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message })
            }
        }
    },

    // GET /episodes/:id/watchTime
    getWatchTime: async(req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const episodeId = req.params.id

        try {
            const watchTime = await episodeService.getWatchTime(userId, +episodeId)
            return res.json(watchTime)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message })
            }
        }
    },

    // POST /episodes/:id/watchTime
    setWatchTime: async(req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const episodeId = +req.params.id
        const { seconds } = req.body

        try {
            const watchTime = await episodeService.setWatchTime({
                episodeId,
                userId,
                seconds
            })
            return res.json(watchTime)
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message })
            }
        }
    },

    // GET /episodes/:courseId/lastEpisodeWatched
    lastEpisodeWatched: async(req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const courseId = +req.params.courseId

        try {
            if(courseId === undefined) throw new Error("Não foi possível encontrar os episódios desse curso.")

            const courseEpisodes = await Episode.findAll({
                where: {
                    courseId: +courseId
                }
            })
            
            const episodesIds = courseEpisodes.map(el => el.id) 
            
            let watchTimes = await WatchTime.findAll({
                where:{
                    userId,
                    episodeId: {[Op.in]: episodesIds}
                },
                order: [['episodeId', 'DESC']]
            })

            let episodeId = watchTimes.find(el => el.seconds > 0)?.episodeId || 0

            let episodeIndex = courseEpisodes.findIndex(el => el.id == episodeId)
            if(episodeIndex === -1) episodeIndex = 0
            
            res.json({episodeIndex})

        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message })
            }
        }
    }
}