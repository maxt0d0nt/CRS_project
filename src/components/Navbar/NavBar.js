import React, { useState } from 'react'
import { IconLogo, IconLogoMobile, Menu, MenuItem, MenuItemLinks, NavbarContainer, NavbarWrapper } from './NavBar_Elements';
import { FaBars } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

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
          CRS
          <FaPlane size={"0.6em"}/>
        </IconLogo>

        <IconLogoMobile onClick={() => ChangeClick()}>
          {click ? <FaRegTimesCircle size={"1.5em"}/> : <FaBars size={"1.5em"} />}
        </IconLogoMobile>

       <Menu click={click}>
         <MenuItem>
          <MenuItemLinks onClick={() => ChangeClick()}>HOME</MenuItemLinks>
         </MenuItem>
         <MenuItem>
          <MenuItemLinks onClick={() => ChangeClick()}>SERVICIOS</MenuItemLinks>
         </MenuItem>
         <MenuItem>
          <MenuItemLinks onClick={() => ChangeClick()}>¿QUIENES SOMOS?</MenuItemLinks>
         </MenuItem>
         <MenuItem>
          <MenuItemLinks onClick={() => ChangeClick()}>CONTACTO</MenuItemLinks>
         </MenuItem>
       </Menu>
      </NavbarWrapper>
    </NavbarContainer>
    </>
  )
}
