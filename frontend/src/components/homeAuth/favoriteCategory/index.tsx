import SlideComponent from "@/components/common/slideComponent"
import courseService from "@/services/courseService"
import styles from "@/styles/slideCategory.module.scss"
import useSWR from "swr"

const FavoriteCategory = function(){
    const { data, error } = useSWR("/favorites", courseService.getFavCourse)

    if (error) return error
    if (!data) return (
        <>
            <p>Loading...</p>
        </>
    )

    return(
        <>
            <p className={styles.titleCategory}>MINHA LISTA</p>
            {(data.data.courses.length >= 1) ? (
                <SlideComponent course={data.data.courses}/>
            ) : (
                <p className="text-center pt-5 h5">
                    <strong>Você ainda não favoritou nenhum curso.</strong>
                </p>
            ) }
        </>
    )
}

export default FavoriteCategory