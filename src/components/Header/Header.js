import React, { useState } from 'react'
import {
    Nav,
    NavLogo,
    LogoImg,
    NavMenu,
    NavItem,
    NavIcon,
    NavItemText,
    UserImg,
    Login,
    Logout,
    DropDown
} from './HeaderStyles'

import { auth, provider} from '../../firebase'
import { setUserLoginDetails, setUserLogoutState } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const username = useSelector(state => state.user.name);
    const userPhoto = useSelector(state => state.user.photo);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
          })
        );
      };
    const handleAuth = () =>{
        if (!username) {
            auth
              .signInWithPopup(provider)
              .then((result) => {
                setUser(result.user);
              })
              .catch((error) => {
                alert(error.message);
              });
          } else if (username) {
            auth
              .signOut()
              .then(() => {
                dispatch(setUserLogoutState());
                navigate("/");
              })
              .catch((err) => alert(err.message));
          }
    }
  return (

    <Nav>
        <NavLogo to={'/'}>
            <LogoImg src='/images/logo.svg'/>
        </NavLogo>
        {!username? (
            <Login onClick={handleAuth}>
                Login
            </Login>
        ):(
        <>
        <NavMenu>
            <NavItem to={'/'}>
                <NavIcon src='/images/home-icon.svg'/>
                <NavItemText>Home</NavItemText>
            </NavItem>
            <NavItem to={'/'}>
                <NavIcon src='/images/search-icon.svg'/>
                <NavItemText>Search</NavItemText>
            </NavItem>
            <NavItem to={'/'}>
                <NavIcon src='/images/watchlist-icon.svg'/>
                <NavItemText>Watchlist</NavItemText>
            </NavItem>
            <NavItem to={'/'}>
                <NavIcon src='/images/original-icon.svg'/>
                <NavItemText>Originals</NavItemText>
            </NavItem>
            <NavItem to={'/'}>
                <NavIcon src='/images/movie-icon.svg'/>
                <NavItemText>Movies</NavItemText>
            </NavItem>
            <NavItem to={'/'}>
                <NavIcon src='/images/series-icon.svg'/>
                <NavItemText>Series</NavItemText>
            </NavItem>
        </NavMenu>
        <Logout>
            <UserImg src ={userPhoto}/>
            <DropDown>
                <span onClick={handleAuth}>Sign Out</span>
            </DropDown>
        </Logout>
        </>
        )}
    </Nav>
  )
}

export default Header