import styled from 'styled-components'

export const Container = styled.div`
    
`
export const ContentTitle = styled.h4`
    margin: 20px 0;
    font-weight: 700;
    color: #f9f9f9;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0,1fr));
    grid-gap: 25px;

    @media screen and (max-width: 768px){
        grid-template-columns: repeat(2, minmax(0,1fr));
    }
`
export const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid rgba(249,249,249,0.1);
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img{
        width: 100%;
        height: 100%;
    }

    &:hover{
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`
