import styled from "styled-components";
import { devices } from "../../styles/global"

export const HomeContainer = styled.div``;
export const HomeBannerContainer = styled.div``;
export const HomeBanner = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
export const BannerText = styled.div`
  h1 {
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["black"]};
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme["base-700"]};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-bottom: 66px;
  }
`;
export const BannerImage = styled.div`
  img{
    display: block;
    max-width: 100%;
  }

`;

export const BannerTextDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media only screen and ${devices.lg} {
    grid-template-columns: 1fr 1fr;
  }

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 31px;
  }
  p {
    display: block;
    color: ${(props) => props.theme["base-600"]};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin: 0 0 0 6px;
  }
`;

export const IconTextBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;

  &.icon-1 {
    background: ${(props) => props.theme["yellow-700"]};
  }
  &.icon-2 {
    background: ${(props) => props.theme["base-500"]};
  }
  &.icon-3 {
    background: ${(props) => props.theme["yellow-500"]};
  }
  &.icon-4 {
    background: ${(props) => props.theme["purple-600"]};
  }
`;


export const HomeOurCoffees = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 32px;
  width: 32px;
  border-radius: 50%;

  &.icon-1 {
    background: ${(props) => props.theme["yellow-700"]};
  }
  &.icon-2 {
    background: ${(props) => props.theme["base-500"]};
  }
  &.icon-3 {
    background: ${(props) => props.theme["yellow-500"]};
  }
  &.icon-4 {
    background: ${(props) => props.theme["purple-600"]};
  }
`;
export const OurCoffeeProducts = styled.div`
  
`;
export const OurCoffeeShelf = styled.div`
  display: flex;
  background: ${(props) => props.theme["white-200"]};
`;

export const CoffeeItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 256px;
  min-height: 310px;
`;

export const BuyButtonAndPrice = styled.div`
  display: flex;
  flex-direction: row;
   div{
    display: flex;
    justify-content: space-around;
    input{
      max-width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const AddToCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme["purple-800"]};
  width: 38px;
  height: 38px;
  border-radius: 6px;
`;
