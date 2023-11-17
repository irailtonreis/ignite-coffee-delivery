import React, { useContext } from "react";

import { HeaderContainer, Address, StyledNavLink } from "./styles";
import { NavLink } from "react-router-dom";
import logoCoffeeDelivery from "../../assets/logo-coffe-delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { OrderContext } from "../../Contexts/OrderContext";


const Header: React.FC = () => {
  const { order } = useContext(OrderContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <nav>
        <Address>
          <MapPin size={22} color="#8047F8" />
          <p>Porto Alegre, RS</p>
        </Address>
        <StyledNavLink to="/checkout" quantity={order.length}>
          <ShoppingCart  color="#C47F17" size={22}/>
        </StyledNavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
