import Head from "next/head"
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth"
import PresentationSection from "@/components/homeNoAuth/presentationSection"
import CardsSection from "@/components/homeNoAuth/cardsSection"
import SlideSection from "@/components/homeNoAuth/slideSection"
import { GetStaticProps } from "next"
import courseService, { CourseType } from "@/services/courseService"
import { ReactNode, useEffect } from "react"
import Footer from "@/components/common/footer"
import AOS from "aos"
import "aos/dist/aos.css"

interface IndexPageProps {
  children?: ReactNode
  course: CourseType[]
}

const HomeNoAuth = ({ course }: IndexPageProps) => {

  useEffect(() => {
    AOS.init()
  }, [])

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
        <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <div id="cardsSection">
          <div data-aos="fade-right" data-aos-duration="1200">
            <CardsSection/>
          </div>
          <div data-aos="fade-up" data-aos-duration="1350">
            <SlideSection newestCourses={course}/>
          </div>
        </div>
        <Footer/>
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