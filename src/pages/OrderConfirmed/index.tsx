import React from "react";
import { Container, OrderContent, OrderDetails, OrderImage, Circle } from "./syles";
import DeliveryImage from "../../assets/delivery.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

const OrderConfirmed: React.FC = () => {
  return (
    <Container>
      <header>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </header>
      <OrderContent>
        <OrderDetails>
          <div>
            <Circle color="purple-600">
              <MapPin size={16}  color="white"/>
            </Circle>
            <p>
              Entrega em <span>Rua João Daniel Martinelli, 102,</span> Farrapos
              - Porto Alegre, RS
            </p>
          </div>
          <div>
            <Circle color="yellow-500">
              <Timer size={16} color="white"/>
            </Circle>
            <p>
              Previsão de entrega <span>20 min - 30 min </span>{" "}
            </p>
          </div>
          <div>
            <Circle color="yellow-700">
              <CurrencyDollar size={16} />
            </Circle>
            <p>
              Pagamento na entrega <span>Cartão de Crédito</span>
            </p>
          </div>
        </OrderDetails>
        <OrderImage>
          <img src={DeliveryImage} />
        </OrderImage>
      </OrderContent>
    </Container>
  );
};

export default OrderConfirmed;
