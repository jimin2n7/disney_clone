import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5,minmax(0,1fr));

    @media screen and (max-width:768px){
        grid-template-columns: repeat(1,minmax(0,1fr));
    }
`

export const Wrap = styled.div`
    position: relative;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    transform: scale(1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
        
        video{
            opacity: 1;
        }
    }
`