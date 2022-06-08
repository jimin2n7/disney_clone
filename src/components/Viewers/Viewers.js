import React from 'react'
import { Container, Wrap } from './ViewersStyles'

const Viewers = () => {
  return (
    <Container>
        <Wrap>
            <img src="/images/viewers-disney.png" />
            <video loop autoPlay muted src="/videos/1564674844-disney.mp4"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-marvel.png" />
            <video loop autoPlay muted src="/videos/1564676115-marvel.mp4"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-national.png" />
            <video loop autoPlay muted src="/videos/1564676296-national-geographic.mp4"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-pixar.png" />
            <video loop autoPlay muted src="/videos/1564676714-pixar.mp4"/>
        </Wrap>
        <Wrap>
            <img src="/images/viewers-starwars.png" />
            <video loop autoPlay muted src="/videos/1608229455-star-wars.mp4"/>
        </Wrap>
    </Container>
  )
}

export default Viewers