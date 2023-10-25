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

type Product = {
  image: string;
  flags: string[];
  title: string;
  description: string;
  quantity: number;
  price: number;
};

const products: Product[] = [
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["tradicional"],
    "title": "Expresso Tradicional",
    "description": "O tradicional café feito com água quente e grãos moídos",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["tradicional"],
    "title": "Expresso Americano",
    "description": "Expresso diluído, menos intenso que o tradicional",
    "quantity": 10,
    "price": 10.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["tradicional"],
    "title": "Expresso Cremoso",
    "description": "Café expresso tradicional com espuma cremosa",
    "quantity": 10,
    "price": 12.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["tradicional", "gelado"],
    "title": "Expresso Gelado",
    "description": "Bebida preparada com café expresso e cubos de gelo",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["tradicional", "com leite"],
    "title": "Café com Leite",
    "description": "Meio a meio de expresso tradicional com leite vaporizado",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["tradicional", "com leite"],
    "title": "Latte",
    "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["tradicional", "com leite"],
    "title": "Latte",
    "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["tradicional", "com leite"],
    "title": "Capuccino",
    "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["tradicional", "com leite"],
    "title": "Macchiato",
    "description": "Café expresso misturado com um pouco de leite quente e espuma",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["tradicional", "com leite"],
    "title": "Mocaccino",
    "description": "Café expresso com calda de chocolate, pouco leite e espuma",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["Especial", "com leite"],
    "title": "Chocolate Quente",
    "description": "Bebida feita com chocolate dissolvido no leite quente e café",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["Especial", "Alcoólico", "gelado"],
    "title": "Cubano",
    "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["Especial"],
    "title": "Havaiano",
    "description": "Bebida adocicada preparada com café e leite de coco",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["Especial"],
    "title": "Árabe",
    "description": "Bebida preparada com grãos de café árabe e especiarias",
    "quantity": 10,
    "price": 9.90
  },
  {
    "image": "https://i.postimg.cc/NjwSZCyv/coffee-01.png",
    "flags": ["Especial", "Alcoólico"],
    "title": "Irlandês",
    "description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    "quantity": 10,
    "price": 9.90
  },
];

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

  function formatPriceToReal(valor) {
    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatador.format(valor);
}


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
          {products.map(product => (
            <CoffeeItem>
              <img src={product.image} alt="" />
              <FlagItem>
                {product.flags.map((flag, index) => (
                  <strong key={index}>{flag}</strong>
                ))}
              </FlagItem>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <BuyButtonAndPrice>
                <Price><span> {formatPriceToReal(product.price)}</span></Price>
                <Quantity>
                  <MinusButton onClick={decrementar}><Minus color="#8047F8" size={14}/></MinusButton>
                  <input type="text" value={quantity} />
                  <PlusButton onClick={incrementar}><Plus color="#8047F8" size={14}/></PlusButton>
                </Quantity>
                <AddToCart><ShoppingCart color="#FFF" size={22}/></AddToCart>
              </BuyButtonAndPrice>
            </CoffeeItem>
          ))}
          </OurCoffeeShelf>
        </OurCoffeeProducts>
      </HomeOurCoffees>
    </HomeContainer>
  );
};

export default Home;
