import React, { useEffect } from 'react'
import { Container } from '../../globalStyles'
import ImgSlider from '../ImgSlider/ImgSlider'
import Viewers from '../Viewers/Viewers'
import Movies from '../Movies/Movies'
import db from '../../firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../../redux/moviesSlice'

const Home = () => {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    db.collection("movies").onSnapshot((snapshot) => {
        const tempMovies = snapshot.docs.map(doc =>{
          return {id: doc.id, ...doc.data()}
        })
        dispatch(setMovies(tempMovies))
    })
  }, [])

  return (
    <Container>
        <ImgSlider/>
        <Viewers/>
        <Movies/>
    </Container>
  )
}

export default Home