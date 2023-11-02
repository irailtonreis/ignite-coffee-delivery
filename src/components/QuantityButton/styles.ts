import styled from "styled-components";

export const Quantity = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 72px;
  border-radius: 6px;
  background:  ${(props) => props.theme["white-400"]};
  padding: 8px;

  input{
    border: none;
    text-align: center;
    background:  ${(props) => props.theme["white-400"]};
    color: ${(props) => props.theme["base-800"]};
    font-size: 1rem;
    font-style: normal;
    line-height: 130%; 
  }
`;
export const MinusButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;
export const PlusButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;