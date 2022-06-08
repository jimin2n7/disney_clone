import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav`
    height: 70px;
    padding: 0 36px;
    background: #090b13;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    z-index: 10;
`
export const NavLogo = styled(Link)`
    display: inline-block;
    width: 80px;
    cursor: pointer;
`
export const LogoImg = styled.img`
    width: 100%;
`
export const NavItemText = styled.span`
    margin-left: 8px;
    text-transform: uppercase;
    font-size: 15px;
    letter-spacing: 0.9px;
    font-weight: 400;
    position: relative;

    &::after{
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        border-radius: 1px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform-origin: left center;
        transform: scale(0);
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 0 25px;
`
export const NavItem = styled(Link)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 12px;

    &:hover{
        ${NavItemText}::after{
            opacity: 1;
            transform: scale(1);
        }
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavIcon = styled.img`
    width: 20px;
    height: 20px;
`
export const UserImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
`

export const DropDown = styled.div`
    position: absolute;
    top: 100%;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    width: 100px;
    opacity: 0;
`

export const Logout = styled.div`
    width: 48px;
    height: 48px;
    position: relative;
    &:hover{
        ${DropDown}{
            cursor: pointer;
            opacity: 1;
            color: #fff;
            transition-duration: 1s;
        }
    }
`
export const Login = styled.a`
    color: #fff;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    margin-left: auto;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

