import React, {useState} from "react";
import styled from "styled-components";
import { Menu as MenuIcon } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import {selectCarts} from "../features/Car/carSlice";
import {useSelector} from "react-redux";


function Header() {
    const [BurgerState,setBurgerState]=useState(false);
    const cars= useSelector(selectCarts)

  return (
    <Container>
      <a>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
          {cars && cars.map((car,index)=>()
          
          ))}
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </Menu>
      <RightMenu>
        <a href='#'>SHOP</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerState(true)}/>
      </RightMenu>
      <BurgerNav show={BurgerState}>
          <CloseWrapper>
             <CustomClose onClick={()=>setBurgerState(false)} />
          </CloseWrapper>
      <li><a href="#">Existing Inventory</a></li>
      <li><a href="#">Used Inventory</a></li>
      <li><a href="#">Trade-In</a></li>
      <li><a href="#">Cybertruck</a></li>
      <li><a href="#">Roadster</a></li>
      <li><a href="#">Existing Inventory</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0; // expaning header the full width
  z-index:1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width:768px){
      display:none;
  }
`;
const RightMenu = styled.div`
    display:flex;
    align-iterms:center;
a {
    font-weight:600;
    text-transform: uppercase;
    display:flex-column;
    margin-right:10px;
    flex-wrap:nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`;

const BurgerNav = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  width:300px;
  z-index:5;
  list-style:none;
  padding:20px;
  display:flex;
  flex-direction:column;
  text-align:start;
  transform: ${props =>props.show ? "translateX(0)" : "translatex(100%)"};
  transition:transform:0.4s ease-in ease-out;

  li {
     padding 15px 0;
     border-bottom: 1x solid rgba(0,0,0,0.2);
    
     a{
         font-weight:600;
     }

  }

`;

const CustomClose = styled(CloseIcon)`
  cursor:pointer;
`;
const CloseWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
`;