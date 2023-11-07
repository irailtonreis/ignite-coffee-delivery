import styled from "styled-components";
import { devices } from "../../styles/global";
import {} from "react";

type DivProps = {
  color: string;
};

export const Container = styled.div`
    padding-top: 2.5rem;

    @media only screen and ${devices.lg} {
        padding-top: 5rem;
    }

  header {
    h2{
        color: ${(props) => props.theme["yellow-700"]};
        font-family: Baloo 2;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 800;
        line-height: 130%;

        @media only screen and ${devices.lg} {
            font-size: 2rem;

        }
    }
    p{
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        color: ${(props) => props.theme["base-700"]};
        margin-bottom: 1.125rem;

        @media only screen and ${devices.lg} {
                    margin-bottom: 2.5rem;


        }
  }

`;
export const OrderContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and ${devices.lg} {
    flex-direction: row;
  }
`;
export const Circle = styled.div<DivProps>`
  height: 32px;
  width: 32px;
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => `${props.theme[props.color]}`};
`;
export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px 36px;
  border: 1px solid #dbac2c;
  padding: 2.5rem;
  gap: 32px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;
export const OrderImage = styled.div`
  flex: 1;
  display: block;
  margin-top: 1rem;
  @media only screen and ${devices.lg} {
    margin-top: 0;
  }
  img {
    max-width: 100%;
    display: block;
  }
`;
