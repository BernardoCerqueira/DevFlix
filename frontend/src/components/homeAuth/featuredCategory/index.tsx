import SlideComponent from "@/components/common/slideComponent"
import courseService from "@/services/courseService"
import styles from "@/styles/slideCategory.module.scss"
import useSWR from "swr"

const FeaturedCategory = function(){
    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses)

    if (error) return error
    if (!data) return (
        <>
            <p>Loading...</p>
        </>
    )
    
    return(
        <>
            <p className={styles.titleCategory}>Destaques</p>
            <SlideComponent course={data.data}/>
        </>
    )
}

export default FeaturedCategory