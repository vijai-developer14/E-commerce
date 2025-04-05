import React, { useState } from "react";

import "../styles/addToCart.css";

export default function AddToCart() {
  const [number, setNumber] = useState(0);
  const increaseNumber = () => {
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    if (number === 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };
  return (
    <div className="addToCartBg">
      <div className="addToCart_heading">
        <h1>Cart</h1>
        <p>Total Product in Cart</p>
      </div>

      {/* ............................................cart image */}
      <ul>
        <li>
          <div className="addToCart_imageAndText">
            <img src="../images/Pr_keyboard.png" className="addToCart_image" />
            {/* ............................................cart Text */}
            <div className="addToCart_textContent">
              <h1>Terracota Bottle</h1>
              <p>In Stock</p>
              <p>Eligible for free shipping</p>
              <p>Color: Brown</p>
              {/* ...........................................cart quantity increase decrease */}
              <div className="addToCart_IncreaseDecrease">
                <button onClick={increaseNumber}>
                  <img src="../images/increase.png" />
                </button>

                <span>{number}</span>

                <button onClick={decreaseNumber}>
                  <img src="../images/decrease.png" />
                </button>
              </div>
            </div>
          </div>

          {/* .....................................................cart delete image*/}
          <div className="addToCart_price_delete">
            <h1>200.00</h1>
            <button style={{ border: "none" }}>
              <img src="../images/delete.png" />
            </button>
          </div>
        </li>
      </ul>
      {/* .....................................................cart total*/}
      <div className="addToCart_total">
        <h1>Total</h1>
        <h1>500.00</h1>
      </div>
    </div>
  );
}
