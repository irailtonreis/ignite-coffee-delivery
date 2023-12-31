import styled from "styled-components";
import { devices } from "../../styles/global";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
};

export const PaymentButton = styled.button<ButtonProps>`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 1rem;
  background: ${(props) => props.theme["white-400"]};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-600"]};
  border: none;
  border-radius: 6px;
  ${(props) =>
    props.selected && `border: 1px solid ${props.theme["purple-600"]}`};
  ${(props) => props.selected && `background: ${props.theme["purple-100"]}`};
`;

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and ${devices.lg} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 2rem;

    div:nth-child(1) {
      grid-row: 1;
    }
    div:nth-child(2) {
      grid-row: 2;
    }
    div:nth-child(3) {
      grid-row: span 2;
      grid-column: span 2;
    }
  }
`;
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 640px;
`;

export const CheckoutAddress = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme["white-200"]};
  border-radius: 6px;
  min-width: 100%;
  h2 {
    margin-bottom: 15px;
    color: ${(props) => props.theme["base-700"]};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
  }
`;
export const HomeContainer = styled.div``;
export const CheckoutPayment = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme["white-200"]};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CheckoutCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const CheckoutContentCart = styled.div`
  box-sizing: border-box;
  padding: 2.5rem;
  background: ${(props) => props.theme["white-200"]};
  border-radius: 6px 44px;
`;
export const CheckoutAddressContent = styled.div``;
export const CheckoutFormText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 32px;

  div {
    margin-left: 8px;
  }

  strong {
    color: ${(props) => props.theme["base-700"]};
    font-size: 1rem;
    font-style: normal;
    line-height: 130%;
  }
  p {
    color: ${(props) => props.theme["base-600"]};
    font-size: 0.875rem;
    font-style: normal;
    line-height: 130%;
  }
`;

export const CheckoutAddressForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  input {
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["white-400"]};
    background: ${(props) => props.theme["white-300"]};
    padding: 0.75rem;
  }

  input:nth-child(1),
  input:nth-child(2),
  input:nth-child(5) {
    grid-column: span 2;
  }

  @media only screen and ${devices.lg} {
    grid-template-columns: 200px auto;
    input:nth-child(1) {
      max-width: 200px;
    }
    input:nth-child(2) {
      grid-column: span 3;
    }
    input:nth-child(3),
    input:nth-child(5) {
      grid-column: span 1;
      max-width: 200px;
    }
    input:nth-child(4) {
      grid-column: span 2;
    }

    input:nth-child(6) {
      grid-column: span 1;
      width: 276px;
    }
    input:nth-child(7) {
      max-width: 60px;
      grid-column: span 1;
    }

    input:nth-child(5),
    input:nth-child(6),
    input:nth-child(7) {
      grid-row: 4;
    }
  }
`;
export const InputPostalCode = styled.input``;
export const InputStreet = styled.input``;
export const InputNumber = styled.input``;
export const InputComplement = styled.input``;
export const InputNeighborhood = styled.input``;
export const InputCity = styled.input``;
export const InputUf = styled.input``;
export const PaymentText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 8px;
  }
`;
export const PaymentOptions = styled.div`
  display: flex;
  gap: 12px;
`;
export const CartList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme["white-400"]};
  margin-bottom: 24px;
  max-width: 100%;
  gap: 20px;
  flex-grow: 1;
  padding-bottom: 1.5rem;

  span {
    display: block;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: 1px solid ${(props) => props.theme["white-500"]};
  }

  img {
    display: block;
    width: 64px;
    height: 64px;
  }
`;

export const ListItemDatail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuantityRemove = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  min-width: 171px;
`;

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  padding: 0px 8px;
  background: ${(props) => props.theme["white-400"]};
  border: none;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme["base-500"]};
`;

export const CartTotal = styled.div`
  margin-bottom: 24px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  p {
    color: ${(props) => props.theme["base-500"]};
    text-align: right;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  strong {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme["base-500"]};
  }
`;

export const Total = styled.div`
  strong,
  h3 {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["base-700"]};
  }
`;

export const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  background: ${(props) => props.theme["yellow-500"]};
  border-radius: 6px;
  width: 100%;
  border: none;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme["white-100"]};
  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;
