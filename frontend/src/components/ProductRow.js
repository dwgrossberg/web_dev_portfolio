import React from "react";
import ProductQuantity from "./ProductQuantity";

function ProductRow({ product }) {
  return (
    <tr>
      <th>{product.product}</th>
      <td>{product.company}</td>
      <td>{product.price}</td>
      <td>
        <ProductQuantity />
      </td>
    </tr>
  );
}
export default ProductRow;
