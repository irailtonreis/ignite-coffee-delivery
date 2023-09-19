import styled from 'styled-components'

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