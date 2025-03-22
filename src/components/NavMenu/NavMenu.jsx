import styled from 'styled-components'
import {useContext, useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import { UserContext } from '../../contexts/UserContext'
import { getToken, removeToken } from '../../utils/auth'
import { Link, NavLink } from 'react-router'
import '../../App.css'
import styles from './NavMenu.module.css'

const MainHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 20px;
`
const Tagline = styled.p`
    margin-top: -15px;
`

const TitleImage = styled.div`
    display: flex;
`
const Heading = styled.h1`
    font-size: 4.5rem;
    color: white;
`
const Image = styled.img`
    height: 100px;
`

export default function NavMenu() {
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    const [isButtonVisible, setIsButtonVisible] = useState(true)

    const signOut = () => {
        removeToken()
        setUser(null)
        setIsButtonVisible(true)
        setTimeout(() => navigate('/'), 100)
    }

    const signIn = () => {
        setIsButtonVisible(false)
        navigate('/signin')
    }

    return (
        <>
            <MainHeading>
                <TitleImage>
                    <Link to="/" className={styles.headinglink}>
                    <div>
                        <Heading>Sticky Popcorn</Heading>
                        <Tagline><p className={styles.tagline}>Reviews that stick with you - Freshly Popped!</p></Tagline>
                    </div>
                    <div>
                        <Image src="https://res.cloudinary.com/dvp3fdavw/image/upload/v1739356536/pngimg.com_-_popcorn_PNG21_lo8zgy.png" />
                    </div>
                    </Link>
                </TitleImage>

                <div>
                {user && user._id
                ? (
                    <>
                        <button onClick={() => navigate(`/movies/favourites`)}className='button'> ❤️ Favourites</button>
                        <button onClick={() => navigate(`/movies/watchlist`)}className='button'> 📺 Watchlist</button>
                        <button onClick={signOut}className='button'>Sign out</button>
                    </> 
                )
                : isButtonVisible && (
                    <>
                        <button onClick={signIn}className='button'>Sign in</button>
                    </>
                )
                }
                </div>
            </MainHeading>
        </>
    )
}