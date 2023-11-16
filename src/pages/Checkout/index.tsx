import React, { useContext } from "react";

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
  AddressContainer,
  QuantityRemove,
  ListItemDatail,
  RemoveButton,
  Total
} from "./styles";
import {QuantityButton } from "../../components/QuantityButton"
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
import TumbCoffee from "../../assets/thumb-coffee.png"
import { OrderContext } from "../../Contexts/OrderContext";
import { formatPriceToReal } from "../../utils/index"

const Checkout: React.FC = () => {
  const { order, setOrder } = useContext(OrderContext)

  const removeItem = (itemId: string) => {
      const newOrder = order.filter(item => item.id !== itemId)
      setOrder(newOrder)
  }
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
          {
            order.map((item)=> (
              <CartList>
              <ListItem>
              <img src={TumbCoffee}/>
              <ListItemDatail>
                <h3>{item.title}</h3>
                <QuantityRemove><QuantityButton /><RemoveButton><Trash size={16} color="#8047F8" onClick={()=>removeItem(item.id)}/>Remover</RemoveButton></QuantityRemove>
              </ListItemDatail>
              <span>{formatPriceToReal(item.price)}</span>
            </ListItem>
          </CartList>
            ))
          }
        <CartTotal>
          <div><p>Total de itens</p><strong>R$ 29,70</strong></div>
          <div><p>Entrega</p><strong>R$ 29,70</strong></div>
          <Total><h3>Total</h3><strong>R$ 33,20</strong></Total>
        </CartTotal>
        <BuyButton>Confirmar</BuyButton>
        </CheckoutContentCart>
      </CheckoutCart>
    </CheckoutContainer>
  );
};

export default Checkout;
