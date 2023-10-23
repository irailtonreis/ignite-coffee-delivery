import React, { useState } from "react";
import {
  HomeContainer,
  HomeBannerContainer,
  HomeBanner,
  BannerText,
  BannerImage,
  BannerTextDetails,
  IconTextBanner,
  HomeOurCoffees,
  OurCoffeeProducts,
  OurCoffeeShelf,
  CoffeeItem,
  BuyButtonAndPrice,
  AddToCart,
  FlagItem,
  Quantity, 
  MinusButton,
  PlusButton,
  Price
} from "./styles";
import BannerCoffee from "../../assets/banner-coffee.png";
import CartIconBanner from "../../assets/cart-icon-banner.svg";
import WrapperIconBanner from "../../assets/wrapper-icon-banner.svg";
import WatchIconBanner from "../../assets/wrapper-icon-banner.svg";
import CofferIconBanner from "../../assets/watch-icon-banner.svg";
import CoffeeImage from "../../assets/coffee-1.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

const Home: React.FC = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementar = () => {
    setQuantity(quantity + 1);
  };

  const decrementar = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <HomeContainer>
      <HomeBannerContainer>
        <HomeBanner>
          <BannerText>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <BannerTextDetails>
              <div>
                <IconTextBanner className="icon-1">
                  <img src={CartIconBanner} alt="" />
                </IconTextBanner>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <IconTextBanner className="icon-2">
                  <img src={WrapperIconBanner} alt="" />
                </IconTextBanner>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div>
                <IconTextBanner className="icon-3">
                  <img src={WatchIconBanner} alt="" />
                </IconTextBanner>
                <p>Entrega rápida e rastreada</p>
              </div>
              <div>
                <IconTextBanner className="icon-4">
                  <img src={CofferIconBanner} alt="" />
                </IconTextBanner>
                <p>O café chega fresquinho até você</p>
              </div>
            </BannerTextDetails>
          </BannerText>
          <BannerImage>
            <img src={BannerCoffee} alt="" />
          </BannerImage>
        </HomeBanner>
      </HomeBannerContainer>
      <HomeOurCoffees>
        <h2>Nossos cafés</h2>
        <OurCoffeeProducts>
          <OurCoffeeShelf>
            <CoffeeItem>
              <img src={CoffeeImage} alt="" />
              <FlagItem>
                <strong>Especial</strong>
                <strong>Alcoólico</strong>
                <strong>Gelado</strong>
              </FlagItem>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <BuyButtonAndPrice>
                <Price>R$ <span> 9,90</span></Price>
                <Quantity>
                <MinusButton onClick={decrementar}><Minus color="#8047F8" size={14}/></MinusButton>
                <input type="text" value={quantity} />
                <PlusButton onClick={incrementar}><Plus color="#8047F8" size={14}/></PlusButton>
              </Quantity>
              <AddToCart><ShoppingCart color="#FFF" size={22}/></AddToCart>
              </BuyButtonAndPrice>
            </CoffeeItem>
            <CoffeeItem>
              <img src={CoffeeImage} alt="" />
              <FlagItem>
                <strong>Especial</strong>
                <strong>Alcoólico</strong>
                <strong>Gelado</strong>
              </FlagItem>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <BuyButtonAndPrice>
                <Price>R$ <span> 9,90</span></Price>
                <Quantity>
                <MinusButton onClick={decrementar}><Minus color="#8047F8" size={14}/></MinusButton>
                <input type="text" value={quantity} />
                <PlusButton onClick={incrementar}><Plus color="#8047F8" size={14}/></PlusButton>
              </Quantity>
              <AddToCart><ShoppingCart color="#FFF" size={22}/></AddToCart>
              </BuyButtonAndPrice>
            </CoffeeItem>
            <CoffeeItem>
              <img src={CoffeeImage} alt="" />
              <FlagItem>
                <strong>Especial</strong>
                <strong>Alcoólico</strong>
                <strong>Gelado</strong>
              </FlagItem>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <BuyButtonAndPrice>
                <Price>R$ <span> 9,90</span></Price>
                <Quantity>
                <MinusButton onClick={decrementar}><Minus color="#8047F8" size={14}/></MinusButton>
                <input type="text" value={quantity} />
                <PlusButton onClick={incrementar}><Plus color="#8047F8" size={14}/></PlusButton>
              </Quantity>
              <AddToCart><ShoppingCart color="#FFF" size={22}/></AddToCart>
              </BuyButtonAndPrice>
            </CoffeeItem>
            <CoffeeItem>
              <img src={CoffeeImage} alt="" />
              <FlagItem>
                <strong>Especial</strong>
                <strong>Alcoólico</strong>
                <strong>Gelado</strong>
              </FlagItem>
              <h3>Expresso Tradicional</h3>
              <p>O tradicional café feito com água quente e grãos moídos</p>
              <BuyButtonAndPrice>
                <Price>R$ <span> 9,90</span></Price>
                <Quantity>
                <MinusButton onClick={decrementar}><Minus color="#8047F8" size={14}/></MinusButton>
                <input type="text" value={quantity} />
                <PlusButton onClick={incrementar}><Plus color="#8047F8" size={14}/></PlusButton>
              </Quantity>
              <AddToCart><ShoppingCart color="#FFF" size={22}/></AddToCart>
              </BuyButtonAndPrice>
            </CoffeeItem>
          </OurCoffeeShelf>
        </OurCoffeeProducts>
      </HomeOurCoffees>
    </HomeContainer>
  );
};

export default Home;
