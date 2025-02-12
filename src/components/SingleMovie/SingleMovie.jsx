import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { movieShow } from '../../services/movieService'
import MovieRating from './Rating'
import Spinner from '../Spinner/Spinner'

import styles from './SingleMovie.module.css'

export default function SingleMovie() {

    // State
    const [movie, setMovie] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    // Location variables
    const { movieId } = useParams()

    // On initial render
    useEffect(() => {
        async function getMovie() {
            try {
                const data = await movieShow(movieId)
                setMovie(data)
            } catch (error) {
                if (error.status === 400) {
                    setError('Post not found.')
                } else {
                    setError(error.message)
                }

            } finally {
                setIsLoading(false)
            }
        }
        getMovie()
    }, [movieId]) // This empty dependency array ensures this effect only executes on initial render

    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>{error}</p>;
      }


    return (
        <section className={styles.movie}>
            <div>
                <img src={movie.poster_url} alt={movie.title} />
                <MovieRating />
            </div>
            <div>
                <h3>{movie.title}</h3>
                <p>Year: {movie.year}</p>
                <p>Cast: {movie.cast.join(', ')}</p>
                <p>Director: {movie.director}</p>
                <p>Genre: {movie.genre.join(', ')}</p>
                <p>Runtime: {movie.runtime}</p>
                <p>Certificate: {movie.certificate}</p>
                <div className={styles.icons}>
                    <img src="https://res.cloudinary.com/dvp3fdavw/image/upload/v1739356535/heart_1_yybbex.png" />
                    <img src="https://res.cloudinary.com/dvp3fdavw/image/upload/v1739356535/tv_rkyzjg.png" />
                </div>
                
                <Link to={`/movies/${movieId}/reviews`}>Read the Reviews
                </Link>
            </div>
        </section>
    )
}