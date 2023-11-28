import React, { useContext, useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form"

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
  Total,
} from "./styles";
import { QuantityButton } from "../../components/QuantityButton";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import TumbCoffee from "../../assets/thumb-coffee.png";
import { OrderContext, CardType } from "../../Contexts/OrderContext";
import { formatPriceToReal } from "../../utils/index";

interface FormInput {
  cep: string
  rua: string
  age: number
  numero: string
  bairro: string
  cidade: string
  ufa: string
}

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

const Checkout: React.FC = () => {
  const { order, paymentType, setPaymentType, setOrder } =
    useContext(OrderContext);
    const { register, handleSubmit } = useForm<IFormInput>()
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState<Address>()


    const buscarCep = async () => {
      if (cep.length !== 8) return;
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
      const data = await response.json()
      setAddress(data);
    };
    useEffect(()=>{
      buscarCep()
    }, [cep])

  const removeItem = (itemId: string) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    console.log("🚀 ~ file: index.tsx:43 ~ removeItem ~ newOrder:", newOrder);
    setOrder(newOrder);
  };

  const handlePayment = (value: CardType) => {
    setPaymentType(value);
  };

  return (
    <CheckoutContainer>
      <AddressContainer>
        <h2>Complete seu pedido</h2>
        <CheckoutAddress>
          <CheckoutAddressContent>
            <CheckoutFormText>
              <MapPinLine className="icone" size={20} color="#C47F17" />
              <div>
                <strong>Endereço de Entrega</strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CheckoutFormText>
            <CheckoutAddressForm>
             <InputPostalCode
                placeholder="Cep"
                {...register("postaColde", {
                  onChange: (e) => setCep(e.target.value),
                },
                )}
              />
              <InputStreet placeholder="Rua"  value={address?.logradouro}/>
              <InputNumber placeholder="Número" />
              <InputComplement placeholder="Complemento" />
              <InputNeighborhood placeholder="Bairro" value={address?.bairro} />
              <InputCity placeholder="Cidade" value={address?.localidade}/>
              <InputUf placeholder="UF" value={address?.uf} />
            </CheckoutAddressForm>
          </CheckoutAddressContent>
        </CheckoutAddress>
      </AddressContainer>
      <CheckoutPayment>
        <PaymentText>
          <CurrencyDollar color="#8047F8" size={22} />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </PaymentText>
        <PaymentOptions>
          <PaymentButton
            selected={paymentType === "CREDIT" && true}
            onClick={() => handlePayment(CardType.Credit)}
          >
            <CreditCard size={20} color="#8047F8" /> Cartão de crédito
          </PaymentButton>
          <PaymentButton
            selected={paymentType === "DEBIT" && true}
            onClick={() => handlePayment(CardType.Debit)}
          >
            <Bank size={20} color="#8047F8" />
            Cartão de débito
          </PaymentButton>
          <PaymentButton
            selected={paymentType === "CASH" && true}
            onClick={() => handlePayment(CardType.Cash)}
          >
            <Money size={20} color="#8047F8" /> Dinheiro
          </PaymentButton>
        </PaymentOptions>
      </CheckoutPayment>
      <CheckoutCart>
        <h2>Cafés selecionados</h2>
        <CheckoutContentCart>
          {order.map((item) => (
            <CartList>
              <ListItem>
                <img src={TumbCoffee} />
                <ListItemDatail>
                  <h3>{item.title}</h3>
                  <QuantityRemove>
                    <QuantityButton quantity={item.quantity} />
                    <RemoveButton onClick={() => removeItem(item.id)}>
                      <Trash size={16} color="#8047F8" />
                      Remover
                    </RemoveButton>
                  </QuantityRemove>
                </ListItemDatail>
                <span>{formatPriceToReal(item.price)}</span>
              </ListItem>
            </CartList>
          ))}
          <CartTotal>
            <div>
              <p>Total de itens</p>
              <strong>R$ 29,70</strong>
            </div>
            <div>
              <p>Entrega</p>
              <strong>R$ 29,70</strong>
            </div>
            <Total>
              <h3>Total</h3>
              <strong>R$ 33,20</strong>
            </Total>
          </CartTotal>
          <BuyButton>Confirmar</BuyButton>
        </CheckoutContentCart>
      </CheckoutCart>
    </CheckoutContainer>
  );
};

export default Checkout;
