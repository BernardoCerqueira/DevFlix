import SlideComponent from "@/components/common/slideComponent"
import PageSpinner from "@/components/common/spinner"
import courseService from "@/services/courseService"
import styles from "@/styles/slideCategory.module.scss"
import useSWR from "swr"

const FavoriteCategory = function(){
    const { data, error } = useSWR("/favorites", courseService.getFavCourse)

    if (error) return error
    if (!data) {
        return(
            <PageSpinner/>
        )
    }

    return(
        <>
            <p className={styles.titleCategory}>Minha Lista</p>
            {(data.data.courses.length >= 1) ? (
                <SlideComponent course={data.data.courses}/>
            ) : (
                <p className="text-center pt-5 px-3 h5">
                    <strong>Você ainda não possui cursos favoritos.</strong>
                </p>
            ) }
        </>
    )
}

export default FavoriteCategory