import { useState, useEffect, useContext } from "react"
import { reviewIndex } from "../../services/reviewService.js"
import { useParams, Link } from "react-router"
import { UserContext } from "../../contexts/UserContext.jsx"
import styles from "./AllReviews.module.css"

export default function AllReviews() {

    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { movieId } = useParams()
    const { user } = useContext(UserContext)


    useEffect(() => {
        if (!movieId) return
        setIsLoading(true)
        reviewIndex(movieId)
            .then(data => setReviews(data))
            .catch(error => console.log("Error fetching reviews", error))
            .finally(() => setIsLoading(false))
    }, [movieId])


    return (
        <>
            <section className={styles.header}>
                <h1>All reviews for</h1>
            </section>

            <section className={styles.allReviews}>
                {isLoading
                    ? <p>Loading Reviews...</p>
                    : reviews.length > 0
                    ? reviews.map((review) => {
                        return (
                            <div className={styles.reviewCard} key={review._id}>
                                <p className={styles.reviewContent}>{review.content}</p>
                                <p>Written by <span className={styles.authorName}>{review.author.username}</span></p>
                                <span className={styles.reviewDate}>{new Date(review.createdAt).toUTCString()}</span>

                                    {user?._id === review.author._id && (
                                        <div className={styles.reviewButtons}>
                                               <p><Link to={`/movies/${movieId}/reviews/${review._id}`} className={styles.reviewLink}>
                                                Read Full Review
                                                </Link></p>                             
                                            <Link to={`/movies/${movieId}/reviews/${review._id}/edit`} className={styles.button}>
                                                Edit
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )
                        })
                        : <p>There are no reviews for this movie yet.</p>
                }
            </section>

            <section className={styles.reviewLink}>
                <div>
                    <Link to={`/movies/${movieId}/create-review`} className={styles.button}>
                        Add your review
                    </Link>
                    <Link to={`/movies/${movieId}`} className={styles.button}>
                        Back to Movie
                    </Link>
                </div>
            </section>
        </>
    )
}