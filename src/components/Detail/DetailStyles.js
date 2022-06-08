import styled from 'styled-components'

export const BackGround = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.7;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const ImgTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-bottom: 25px;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img{
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`
export const Controls = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
`
export const PlayButton = styled.button`
  border: 1px solid #fff;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(249,249,249);
  cursor: pointer;
  border-radius: 4px;
  padding: 10px 25px;
  margin-right: 22px;
  transition: all 0.2s linear;

  img{
    width: 32px;
  }

  span{
    font-size: 15px;
    letter-spacing: 1.2px;
  }

  &:hover{
    background: rgb(198, 198, 198);
  }
  @media screen and (max-width: 768px){
    padding: 10px 15px;
    margin-right: 10px;
    img{
      width: 25px;
    }

    span{
      font-size: 12px;
    }
  }
`
export const TrailerButton = styled(PlayButton)`
  color: rgb(249,249,249);
  background: rgba(0,0,0,0.3);
`
export const AddButton = styled.button`
  cursor: pointer;
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  background: rgba(0,0,0,0.6);
  span{
    font-size: 30px;
  }
`
export const GroupWatchButton = styled(AddButton)`
  background: rgb(0,0,0);
  img{
    width: 40px;
    height: 40px;
  }
`
export const Subtitle = styled.p`
  color: #fff;
  font-size: 15px;
`
export const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 1.5;
  font-size: 20px;
  color: #fff;
  max-width: 750px;
`