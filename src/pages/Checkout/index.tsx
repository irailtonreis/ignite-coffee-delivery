import React from "react";

import {
  CheckoutContainer,
  CheckoutAddress,
  CheckoutPayment,
  CheckoutCart,
  CheckoutContentCart,
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
  CartTotal,
  PaymentButton,
  BuyButton,
  AddressContainer
} from "./styles";
import {QuantityButton } from "../../components/QuantityButton"
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import TumbCoffee from "../../assets/thumb-coffee.png"

const Checkout: React.FC = () => {
  return (
    <CheckoutContainer>
      <AddressContainer>
        <h2>Complete seu pedido</h2>
      <CheckoutAddress>
        
        <CheckoutAddressContent>
              <CheckoutFormText>
                <MapPinLine className="icone" size={20} color="#C47F17"/>
                <div>
                <strong>Endereço de Entrega</strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </CheckoutFormText>
            <CheckoutAddressForm>
              <InputPostalCode placeholder="Cep"/>
              <InputStreet placeholder="Rua"/>
              <InputNumber placeholder="Número"/>
              <InputComplement placeholder="Complemento"/>
              <InputNeighborhood placeholder="Bairro"/>
              <InputCity placeholder="Cidade"/>
              <InputUf placeholder="UF"/>
            </CheckoutAddressForm>
        </CheckoutAddressContent>
      </CheckoutAddress>
      </AddressContainer>
      <CheckoutPayment>
      <PaymentText>
        <CurrencyDollar  color="#8047F8" size={22}/>
        <div>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </div>
      </PaymentText>
      <PaymentOptions>
        <PaymentButton selected ><CreditCard size={20} color="#8047F8" /> Cartão de crédito</PaymentButton>
        <PaymentButton><Bank size={20} color="#8047F8" />Cartão de débito</PaymentButton>
        <PaymentButton><Money size={20} color="#8047F8" /> Dinheiro</PaymentButton>
      </PaymentOptions>
        
      </CheckoutPayment>
      <CheckoutCart>
      <h2>Cafés selecionados</h2>
        <CheckoutContentCart>
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
        <BuyButton>Confirmar</BuyButton>
        </CheckoutContentCart>
      </CheckoutCart>
    </CheckoutContainer>
  );
};

export default Checkout;
