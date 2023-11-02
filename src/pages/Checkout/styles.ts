import styled from "styled-components";
import { devices } from "../../styles/global";

export const CheckoutContainer = styled.div`
  display: flex;
`;
export const CheckoutAddress = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme["white-200"]};
  border-radius: 6px;

  h2 {
    margin-bottom: 15px;
    color: ${(props) => props.theme["base-700"]};
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
  }

  min-width: 640px;
`;
export const HomeContainer = styled.div``;
export const CheckoutPayment = styled.div``;
export const CheckoutCart = styled.div``;
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

export const CheckoutAddressForm = styled.div`
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
export const InputPostalCode = styled.input`
  grid-column: span 2;
`;
export const InputStreet = styled.input`
  grid-column: span 2;
`;
export const InputNumber = styled.input``;
export const InputComplement = styled.input``;
export const InputNeighborhood = styled.input`
  grid-column: span 2;
`;
export const InputCity = styled.input``;
export const InputUf = styled.input``;
export const PaymentText = styled.div``;
export const PaymentOptions = styled.div``;
export const CartList = styled.div`
  display: flex;
  flex-direction: row;
`;
export const ListItem = styled.div``;
export const CartTotal = styled.div`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
