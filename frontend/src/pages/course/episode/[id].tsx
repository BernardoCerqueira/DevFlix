import styles from "@/styles/episodePlayer.module.scss"
import HeaderGeneric from "@/components/common/headerGeneric"
import courseService, { CourseType } from "@/services/courseService"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import PageSpinner from "@/components/common/spinner"
import { Button, Container } from "reactstrap"
import ReactPlayer from "react-player"

const EpisodePlayer = function(){
    const router = useRouter()
    const episodeOrder = parseFloat(router.query.id?.toString() || "")
    const courseId = router.query.courseid?.toString() || ""

    const [course, setCourse] = useState<CourseType>()

    const getCourse = async function(){
        if(typeof courseId !== "string") return

        const res = await courseService.getEpisodes(courseId)

        if(res.status === 200){
            setCourse(res.data)
        }
    }

    useEffect(() => {
        getCourse()
    }, [courseId])

    if(course?.episodes === undefined) return <PageSpinner/>

    return(
        <>
            <Head>
                <title>OneBitFlix - {course.episodes[episodeOrder].name}</title>
                <meta property="og:title" content="OneBitFlix" key="title" />
            </Head>
            <main>
                <HeaderGeneric
                    logoUrl="/home"
                    btnContent="Voltar ao curso"
                    btnUrl={`/course/${courseId}`}
                />
                <Container className="d-flex flex-column align-items-center gap-3 pt-5">
                    <p className={styles.episodeTitle}>
                        {course.episodes[episodeOrder].name}
                    </p>
                    {typeof window === 'undefined' ? null : (
                        <ReactPlayer
                            className={styles.player}
                            url={`${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${course.episodes[episodeOrder].videoUrl}&token=${sessionStorage.getItem('onebitflix-token')}`}
                            controls
                        />
                    )}
                    <div className={styles.episodeButton}>
                        <Button className={styles.episodeButton}>
                            <img
                                src="/episode/iconArrowLeft.svg"
                                alt="setaEsquerda"
                                className={styles.arrowImg}
                            />
                        </Button>
                        <Button className={styles.episodeButton}>
                            <img
                                src="/episode/iconArrowRight.svg"
                                alt="setaDireita"
                                className={styles.arrowImg}
                            />
                        </Button>
                    </div>
                </Container>
            </main>
        </>
    )
}

export default EpisodePlayer