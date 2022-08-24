import styled from "styled-components";
import './NavBar.css'

export const NavbarContainer = styled.div`
    width: 100%;
    height: 75px;
    position: sticky;
    top: 0;
    z-index: 99;
    background-color: #1F4391;

`;

export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1400px;
    height: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    
`;

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
margin-top: 5px;
font-family: "Oswald";
color: #FFC300;

`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;


@media screen and (max-width: 767px) {
    width: 100%;
    height: 62vh;
    position: absolute;
    top: 87px;
    top: ${({click}) => (click ? 0 : "-98vh")};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #0D31C0;
    z-index: -10;
}

`;

export const MenuItem = styled.li`
height: 100%;
padding: 0.5rem 1.5rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
font-family: "Oswald";
font-weigth:400;


&:hover {
    background-color: #6E7BF9;
    border-bottom: 0.3rem solid #FFC300;
    transition: 0.2s ease-in;
}

@media screen and (max-width: 767px) {
    width: 93%;
    height: 80px;
    margin-left: 0px;
}

`;

export const MenuItemLinks = styled.a`
text-decoration: none;
color: #fff
`;

export const IconLogoMobile = styled.div`
    display: none;

    @media screen and (max-width: 767px) {
        display: flex;
        color: #FFF;
        font-size: 20px;
        padding: 30px;

    }

`;