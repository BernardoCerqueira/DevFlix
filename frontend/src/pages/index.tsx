import Head from "next/head"
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth"
import PresentationSection from "@/components/homeNoAuth/presentationSection"
import CardsSection from "@/components/homeNoAuth/cardsSection"
import SlideSection from "@/components/homeNoAuth/slideSection"
import { GetStaticProps } from "next"
import courseService, { CourseType } from "@/services/courseService"
import { ReactNode } from "react"

interface IndexPageProps {
  children?: ReactNode
  course: CourseType[]
}

const HomeNoAuth = ({ course }: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>OneBitFlix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="OneBitFlix" key="title" />
        <meta
          name="description"
          content="Tenha acesso aos melhores conteúdos de programação de uma forma simples e fácil!"
        />
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <div id="cardsSection">
          <CardsSection />
          <SlideSection newestCourses={course} />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses()
  return {
    props: {
      course: res
    },
    revalidate: 3600 * 24
  }
}

export default HomeNoAuth