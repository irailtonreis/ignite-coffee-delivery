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
  PaymentOptions,
  CartList,
  ListItem,
  CartTotal
} from "./styles";
import {QuantityButton } from "../../components/QuantityButton"
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import TumbCoffee from "../../assets/thumb-coffee.png"

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
        <CartList>
            <ListItem>
              <div><img src={TumbCoffee}/></div>
              <div>
                <h3>Expresso Tradicional</h3>
                <div><QuantityButton /><button><Trash size={16} color="#8047F8"/>Remover</button></div>
              </div>
              <div>R$ 9,90</div>
            </ListItem>
        </CartList>
        <CartTotal>
          <div><p>Total de itens</p><strong>R$ 29,70</strong></div>
          <div><p>Entrega</p><strong>R$ 29,70</strong></div>
          <div><h3>Total</h3><strong>R$ 33,20</strong></div>
        </CartTotal>
      </CheckoutCart>
    </CheckoutContainer>
  );
};

export default Checkout;
