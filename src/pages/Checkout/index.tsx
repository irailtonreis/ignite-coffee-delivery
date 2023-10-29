import React from "react";

import {
  CheckoutContainer,
  CheckoutAddress,
  CheckoutPayment,
  CheckoutCart,
  CheckoutAddressContent,
  CheckoutFormText,
  CheckoutAddressForm,
  InputPostalCode,
  InputStreet,
  InputNumber,
  InputComplement,
  InputNeighborhood,
  InputCity,
  InputUf
} from "./styles";
import { MapPinLine } from "phosphor-react";

const Checkout: React.FC = () => {
  return (
    <CheckoutContainer>
      <CheckoutAddress>
        <h2>Complete seu pedido</h2>
        <CheckoutAddressContent>
              <CheckoutFormText>
                <MapPinLine className="icone" size={20} color="#C47F17"/>
                <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </CheckoutFormText>
            <CheckoutAddressForm>
              <InputPostalCode />
              <InputStreet />
              <InputNumber />
              <InputComplement />
              <InputNeighborhood />
              <InputCity />
              <InputUf />
            </CheckoutAddressForm>
        </CheckoutAddressContent>
      </CheckoutAddress>
      <CheckoutPayment></CheckoutPayment>
      <CheckoutCart>
        <h2>Cafés selecionados</h2>
      </CheckoutCart>
    </CheckoutContainer>
  );
};

export default Checkout;
