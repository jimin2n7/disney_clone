import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { Container } from '../../globalStyles'
import db from '../../firebase'
import { 
  BackGround, 
  ImgTitle,
  Controls,
  PlayButton,
  TrailerButton,
  AddButton,
  GroupWatchButton,
  Subtitle,
  Description
} from './DetailStyles'

const Detail = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState({})

  useEffect(()=>{
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if(doc.exists){
          setMovie(doc.data())
        }else{
          navigate('/')
        }
      })
  },[])

  return (
    <Container>
        <BackGround>
            <img src={movie.backgroundImg}  />
        </BackGround>
        <ImgTitle>
            <img src={movie.titleImg}/>
        </ImgTitle>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png"  />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png"  />
            <span>TRAILER</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="/images/group-icon.png"  />
          </GroupWatchButton>
        </Controls>
        <Subtitle>
          {movie.subTitle}
        </Subtitle>
        <Description>
          {movie.description}
        </Description>
    </Container>
  )
}

export default Detail