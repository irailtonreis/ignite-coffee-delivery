import React from "react";

import { HeaderContainer, Address } from "./styles";
import { NavLink } from "react-router-dom";
import logoCoffeeDelivery from "../../assets/logo-coffe-delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

const Header: React.FC = () => {
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
        <NavLink to="/checkout">
          <ShoppingCart  color="#C47F17" size={22}/>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
