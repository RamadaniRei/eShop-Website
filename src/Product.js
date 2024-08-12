import React from "react";
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>
            Bennet Mystic 15.6 inch Laptop shoulder messenger sling office Bag.
            Water Repellent Fabric for Men and Women (Blue)
          </p>
          <p className="product__price">30$</p>
          <div className="product_rating">⭐⭐⭐⭐⭐</div>
        </div>
        <img
          src="https://m.media-amazon.com/images/I/81HEC-PJkiL._AC_UY1100_.jpg"
          alt=" bag"
        />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
