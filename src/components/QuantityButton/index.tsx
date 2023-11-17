import React from "react";
import { Minus, Plus } from "phosphor-react";
import { Quantity, MinusButton, PlusButton } from "./styles";


interface QuantityProps {
  quantity: number
}

export const QuantityButton: React.FC<QuantityProps> = ({ quantity }) => {
  return (
    <>
      <Quantity>
        <MinusButton >
          <Minus color="#8047F8" size={14} />
        </MinusButton>
        <input type="text" value={quantity} />
        <PlusButton>
          <Plus color="#8047F8" size={14} />
        </PlusButton>
      </Quantity>
    </>
  );
};
