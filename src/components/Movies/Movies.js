import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectMovies } from '../../redux/moviesSlice'
import { Container, Content, ContentTitle, Wrap } from './MoviesStyles'

const Movies = () => {
    const movies = useSelector(selectMovies)
  return (
    <Container>
        <ContentTitle>Recommended For You</ContentTitle>
        <Content>
            {
                movies && movies.map((movie, index) =>{
                    return (
                        <Wrap key={index}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt={movie.title} />
                                </Link>
                        </Wrap>
                    )
                }) 
            }
        </Content>
    </Container>
  )
}

export default Movies