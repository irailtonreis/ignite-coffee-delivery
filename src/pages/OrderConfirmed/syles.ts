import styled from "styled-components";
import { devices } from "../../styles/global";
import {  } from "react";

type DivProps = {
    color: string;
  };
  



export const Container = styled.div`

`
export const OrderContent = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media only screen and ${devices.lg} {
        flex-direction: row;
    }


    /* div{
        display: flex;
        flex-direction: column;
    } */
`
export const Circle = styled.div<DivProps>`
    height: 32px;
    width: 32px;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
   background: ${(props) => `${props.theme[props.color]}`};

`
export const OrderDetails = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 6px 36px;
    border: 1px solid #DBAC2C;
    padding: 2.5rem;
    gap: 32px;

 div{
    display: flex;
    align-items: center;
    gap: 12px;
 }
`
export const OrderImage = styled.div`

`
