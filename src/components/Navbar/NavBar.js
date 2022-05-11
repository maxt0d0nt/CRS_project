import React from 'react'
import { IconLogo, Menu, MenuItem, MenuItemLinks, NavbarContainer, NavbarWrapper } from './NavBar_Elements';
import { AiOutlineAliwangwang } from "react-icons/ai";

export const NavBar = () => {
  return (
    <>
    <NavbarContainer>
      <NavbarWrapper>
        <IconLogo>
          <AiOutlineAliwangwang size={"2em"}/>
          CRS
        </IconLogo>

       <Menu>
         <MenuItem>
          <MenuItemLinks>HOME</MenuItemLinks>
         </MenuItem>
         <MenuItem>
          <MenuItemLinks>SERVICIOS</MenuItemLinks>
         </MenuItem>
         <MenuItem>
          <MenuItemLinks>¿QUIENES SOMOS?</MenuItemLinks>
         </MenuItem>
         <MenuItem>
          <MenuItemLinks>CONTACTO</MenuItemLinks>
         </MenuItem>
       </Menu>
      </NavbarWrapper>
    </NavbarContainer>
    </>
  )
}
