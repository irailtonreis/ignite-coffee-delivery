import styled from 'styled-components'
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)<{ quantity?: number }>`
    position: relative;
    &::after{
        content: '${(props) => props.quantity ? props.quantity : '0'}';
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 700;
        letter-spacing: -0.72px;
        background: ${(props) => props.theme['yellow-700']};
        color: ${(props) => props.theme['white-100']};
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: -5px;
        right: -7px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
`;

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav{
        display: flex;

        a{
            border-radius: 6px;
            background: ${(props) => props.theme['yellow-200']};
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
            margin-left: 8px;

          

        }
    }
`
export const Address = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-100']};
    padding: 0.5rem;

    p{
        margin-left: 4px;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
    }
`