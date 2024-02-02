import React from "react";

import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

import { useNavigate } from "react-router-dom";
function Subtotal() {
  const [{ basket ,user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button
        onClick={(e) => (user ? navigate("/payment") : navigate("/login"))}
      >
        proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
