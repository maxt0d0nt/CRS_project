import styled from "styled-components";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 88px;
    position: sticky;
    top: 8;
    z-index: 99;
    background-color: #0D31C0;

`;

export const NavbarWrapper = styled.div`
    margin: auto;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    
    
`;

export const IconLogo = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
font-family: "Oswald";
font-size: 2.6rem;
color: #FFC300;

`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;

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
    transition: 0.5s case-in;
    

}

`;

export const MenuItemLinks = styled.a`
text-decoration: none;
color: #fff
`;

