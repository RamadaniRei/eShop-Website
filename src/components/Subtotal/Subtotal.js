import React from "react";
import "./Subtotal.css";

import { NumericFormat } from "react-number-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <p>
        Subtotal (0 items):{" "}
        <strong>
          <NumericFormat
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
          />
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
