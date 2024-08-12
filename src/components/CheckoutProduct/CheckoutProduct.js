import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img
        src="https://m.media-amazon.com/images/I/8114ke-DlJL._AC_UF894,1000_QL80_.jpg"
        alt=""
        className="checkoutProduct__image"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">
          Bennet Mystic 15.6 inch Laptop shoulder messenger sling office Bag.
          Water Repellent Fabric for Men and Women (Blue)
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct__rating">⭐⭐⭐</div>
        <button>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
