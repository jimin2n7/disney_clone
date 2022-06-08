import styled from 'styled-components'
import { Container } from '../../globalStyles'

export const LoginContainer = styled(Container)`
    &::before{
        background-position: top;
        background: url("/images/login-background.jpg") center center / cover
    }
`
export const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CTALogoOne = styled.img`
`

export const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover {
        background: #0483ee;
    }
`

export const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    color: #fff;
`

export const CTALogoTwo = styled.img`
    width: 90%;
`