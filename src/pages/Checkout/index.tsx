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
  InputUf,
  PaymentText,
  PaymentOptions
} from "./styles";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

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
      <CheckoutPayment>
      <PaymentText>
        <CurrencyDollar  color="#8047F8" size={22}/>
        <div>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </PaymentText>
      <PaymentOptions>

      </PaymentOptions>
        <button><CreditCard size={20} color="#8047F8" /> Cartão de crédito</button>
        <button><Bank size={20} color="#8047F8" />Cartão de débito</button>
        <button><Money size={20} color="#8047F8" /> Dinheiro</button>
      </CheckoutPayment>
      <CheckoutCart>
        <h2>Cafés selecionados</h2>
      </CheckoutCart>
    </CheckoutContainer>
  );
};

export default Checkout;
