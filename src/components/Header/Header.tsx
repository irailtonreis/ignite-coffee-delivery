import React, { useContext, useState, useEffect } from "react";

import { HeaderContainer, Address, StyledNavLink } from "./styles";
import { NavLink } from "react-router-dom";
import logoCoffeeDelivery from "../../assets/logo-coffe-delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { OrderContext } from "../../Contexts/OrderContext";


const Header: React.FC = () => {
  const { order } = useContext(OrderContext)
  const [location, setLocation] = useState({latitude: 0, longitude: 0});
  const [address, setAddress] = useState("");

  console.log("🚀 ~ file: Header.tsx:13 ~ location:", location)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }

    
  }, []);
  useEffect(() => {
 
    fetchAddress(location?.latitude, location?.longitude);

    
  }, [location]);

  const fetchAddress = async (latitude: number, longitude: number) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${import.meta.env.VITE_GOOGLE_API_KEY}`);
    const data = await response.json();
    if(data?.results[0]?.formatted_address){
      setAddress(data.results[0].formatted_address);
    }
  };


  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <nav>
        <Address>
          <MapPin size={22} color="#8047F8" />
          <p>{address}</p>
        </Address>
        <StyledNavLink to="/checkout" quantity={order.length}>
          <ShoppingCart  color="#C47F17" size={22}/>
        </StyledNavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
