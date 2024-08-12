import React from "react";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import "./Checkout.css";
import Subtotal from "../../components/Subtotal/Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://advertisingweek.com/wp-content/uploads/2022/11/169amads-1024x576.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title"> Your Shopping Basket</h2>
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
