import React, { useContext, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'


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
interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}


const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { order, paymentType, setPaymentType, setOrder } =
    useContext(OrderContext);
    const formSchema = z.object({
      postalCode: z.string().nonempty({ message: 'Cep é obrigatório' }),
      street: z.string().nonempty({ message: 'Rua é obrigatória' }),
      number: z.string().nonempty({ message: 'Número é obrigatório' }),
      complement: z.string(),
      district: z.string().nonempty({ message: 'Bairro é obrigatório' }),
      city: z.string().nonempty({ message: 'Cidade é obrigatória' }),
      state: z.string().nonempty({ message: 'UF é obrigatório' }),
    });

    const { control, handleSubmit } = useForm({
      resolver: zodResolver(formSchema)
    })

    const [formState, setFormState] = useState({
      postalCode: '',
      street: '',
      district: '',
      city: '',
      state: '',
      number: '',
      complement: ''
    });
    
   

    const buscarCep = async (postaColde: string) => {
      if (postaColde.length !== 8) return;
      const response = await fetch(`https://viacep.com.br/ws/${postaColde}/json`);
      const data: Address = await response.json()
      if(data) {
        setFormState({
          ...formState,
          street: data.logradouro,
          district: data.bairro,
          city: data.localidade,
          state: data.uf
      });
      }
    };
  const removeItem = (itemId: string) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    console.log("🚀 ~ file: index.tsx:43 ~ removeItem ~ newOrder:", newOrder);
    setOrder(newOrder);
  };

  const handlePayment = (value: CardType) => {
    setPaymentType(value);
  };
  const handleConfirmation = () => {
    navigate("/orderConfirmed");
  };
  useEffect(() => {
    buscarCep(formState.postalCode)
  }, [formState.postalCode])

  const onSubmit = data => console.log(data);
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
            <CheckoutAddressForm id="checkoutAddress" onSubmit={handleSubmit(onSubmit)}>
              <Controller
              name="postalCode"
              control={control}
              render={({ field }) => <InputPostalCode {...field} 
              placeholder="Cep" 
              value={formState.postalCode}
              onChange={(e) => {
                setFormState({
                    ...formState,
                    postalCode: e.target.value
                });
             }}           
              />}
              />
              <Controller
              name="street"
              control={control}
              render={({ field }) => <InputStreet {...field} placeholder="Rua" 
              value={formState.street}
              onChange={(e) => {
                setFormState({
                    ...formState,
                    street: e.target.value
                });
             }}
              />
            }
              />
            <Controller
              name="number"
              control={control}
              render={({ field }) => <InputNumber {...field} placeholder="Número"
              onChange={(e) => {
                setFormState({
                    ...formState,
                    number: e.target.value
                });
             }}
              value={formState.number}
              />}
              />
            <Controller
              name="complement"
              control={control}
              render={({ field }) => <InputComplement {...field}  placeholder="Complemento"
              value={formState.complement}
              onChange={(e) => {
                setFormState({
                    ...formState,
                    complement: e.target.value
                });
             }}
              />}
              />
            <Controller
              name="district"
              control={control}
              render={({ field }) => <InputNeighborhood {...field} placeholder="Bairro" 
              value={formState.district}
              
              onChange={(e) => {
                setFormState({
                    ...formState,
                    district: e.target.value
                });
             }}
              />}
              />
            <Controller
              name="city"
              control={control}
              render={({ field }) => <InputCity {...field} placeholder="Cidade" 
              value={formState.city}
              onChange={(e) => {
                setFormState({
                    ...formState,
                    city: e.target.value
                });
             }}
              />}
              />
            <Controller
              name="state"
              control={control}
              render={({ field }) => <InputUf {...field}  
              placeholder="UF"
              value={formState.state}
              onChange={(e) => {
                setFormState({
                    ...formState,
                    state: e.target.value
                });
             }}
              />}
              />
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
          <BuyButton type="submit" form="checkoutAddress" >Confirmar</BuyButton>
        </CheckoutContentCart>
      </CheckoutCart>
    </CheckoutContainer>
  );
};

export default Checkout;
