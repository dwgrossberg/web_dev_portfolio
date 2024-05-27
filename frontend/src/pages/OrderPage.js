import React from "react";
import ProductRow from "../components/ProductRow";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

function OrderPage() {
  const redirect = useNavigate();
  const onClickButton = () => {
    redirect("/");
  };
  return (
    <>
      <h2>Order</h2>
      <article>
        <p>Make an order from our select catalogue of pet accessories.</p>
      </article>
      <table>
        <caption>Choose one product to order at a time.</caption>
        <thead>
          <tr>
            <th>Product</th>
            <th>Company</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <ProductRow product={product} key={i} />
          ))}
        </tbody>
      </table>
      <h5>Ready? Let's do this!</h5>
      <button
        type="submit"
        data-form-type="action"
        tabIndex="0"
        onClick={onClickButton}
      >
        Submit
      </button>
    </>
  );
}
export default OrderPage;
