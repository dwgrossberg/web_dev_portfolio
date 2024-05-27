import React, { useEffect, useState } from "react";
import { LuMinus, LuPlus } from "react-icons/lu";

function ProductQuantity() {
  const [quantity, setQuantity] = useState("");
  useEffect(() => {
    setQuantity(0);
  }, []);
  const increase = () => {
    setQuantity(quantity + 1);
  };
  const decrease = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="quantityTD">
      <LuMinus onClick={decrease} />
      {quantity}
      <LuPlus onClick={increase} />
    </div>
  );
}
export default ProductQuantity;
