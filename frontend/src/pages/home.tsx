import FavoriteCategory from "@/components/homeAuth/favoriteCategory"
import FeaturedSection from "@/components/homeAuth/featuredSection"
import NewestCategory from "@/components/homeAuth/newestCategory"
import Head from "next/head"

const HomeAuth = function(){
    return(
        <>
            <Head>
                <title>OneBitFlix - Home</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <FeaturedSection/>
                <NewestCategory/>
                <FavoriteCategory/>
            </main>
        </>
    )
}

export default HomeAuth

