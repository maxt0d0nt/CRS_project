import React, { useState } from 'react'
import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLinks, NavbarContainer, NavbarWrapper } from './NavBar_Elements';
import { FaBars } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import logo from '../../Imagenes/logocrs.jpg'


export const NavBar = () => {

  const [click, setClick] = useState(false);

  const ChangeClick = () => {
    setClick(!click);
  }

  return (
    <>
    <NavbarContainer>
      <NavbarWrapper>
        <IconLogo>
        <img className="d-block w-100" src={logo} alt="logo" height={"65px"} />
        </IconLogo>

        <IconLogoMobile onClick={() => ChangeClick()}>
          {click ? <FaRegTimesCircle size={"1.5em"}/> : <FaBars size={"1.5em"} />}
        </IconLogoMobile>

       <Menu click={click}>
         
         <MenuItem>
          <a href='#section-send'>
          <MenuItemLinks onClick={() => ChangeClick()}>SERVICIOS</MenuItemLinks>
          </a>
         </MenuItem>
         <MenuItem>
          <a href='#section-who'>
          <MenuItemLinks onClick={() => ChangeClick()}>¿QUIENES SOMOS?</MenuItemLinks>
          </a>
         </MenuItem>
         <MenuItem>
          <a href='#section-contact'>
          <MenuItemLinks onClick={() => ChangeClick()}>CONTACTO</MenuItemLinks>
          </a>
         </MenuItem>
       </Menu>
      </NavbarWrapper>
    </NavbarContainer>
    </>
  )
}
