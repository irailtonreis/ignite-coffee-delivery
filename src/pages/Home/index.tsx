import React from "react";
import {
  HomeContainer,
  HomeBannerContainer,
  HomeBanner,
  BannerText,
  BannerImage,
  BannerTextDetails,
  IconTextBanner,
} from "./styles";
import BannerCoffee from "../../assets/banner-coffee.png";
import CartIconBanner from "../../assets/cart-icon-banner.svg";
import WrapperIconBanner from "../../assets/wrapper-icon-banner.svg";
import WatchIconBanner from "../../assets/wrapper-icon-banner.svg";
import CofferIconBanner from "../../assets/watch-icon-banner.svg";

const Home: React.FC = () => {
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
    </HomeContainer>
  );
};

export default Home;
