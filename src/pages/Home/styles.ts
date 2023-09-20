import styled from "styled-components";
import bannerBackground from "../../assets/banner-background.png"

export const HomeContainer = styled.div``;
export const HomeBannerContainer = styled.div`
    background-image: url(${bannerBackground});
`;
export const HomeBanner = styled.div`
    display: flex;
`;
export const BannerText = styled.div`
  h1 {
    font-size: 48px;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color:  ${(props) => props.theme['black']};
  }
`;
export const BannerImage = styled.div``;

export const BannerTextDetails = styled.div`
    div{
        display: flex;
    }
`;
