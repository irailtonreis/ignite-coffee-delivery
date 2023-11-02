import React, { useState } from "react";
import { Minus, Plus } from "phosphor-react";

import { Quantity, MinusButton, PlusButton } from "./styles";

export const QuantityButton: React.FC = () => {
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
    <>
      <Quantity>
        <MinusButton onClick={decrementar}>
          <Minus color="#8047F8" size={14} />
        </MinusButton>
        <input type="text" value={quantity} />
        <PlusButton onClick={incrementar}>
          <Plus color="#8047F8" size={14} />
        </PlusButton>
      </Quantity>
    </>
  );
};
