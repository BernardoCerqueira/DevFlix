import styles from "@/styles/coursePage.module.scss"
import HeaderAuth from "@/components/common/headerAuth"
import courseService, { CourseType } from "@/services/courseService"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const CoursePage = function(){
    const [course, setCourse] = useState<CourseType>()

    const router = useRouter()
    const {id} = router.query

    const getCourse = async function(){
        if(typeof id !== "string") return

        const res = await courseService.getEpisodes(id)

        if(res.status === 200){
            setCourse(res.data)
        }
    }

    useEffect(() => {
        getCourse()
    }, [])

    return(
        <>
            <Head>
                <title>OneBitFlix - {course?.name}</title>
                <meta property="og:title" content="OneBitFlix" key="title" />
            </Head>
            <main>
                <HeaderAuth/>
                <p>{course?.name}</p>
            </main>
        </>
    )
}

export default CoursePage