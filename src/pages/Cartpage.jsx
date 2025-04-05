import React, { useState, useEffect } from "react";
import "../styles/addToCart.css";

export default function Cartpage() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCartItems = async () => {
    try {
      const response = await fetch("http://localhost/api/get_cart.php");
      const data = await response.json();
      if (data.success) {
        const itemsWithNumericQuantities = data.cartItems.map((item) => ({
          ...item,
          quantity: Number(item.quantity) || 1,
        }));
        setCartItems(itemsWithNumericQuantities);
      } else {
        setError(data.message || "Failed to load cart");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const increaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product_id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const removeItem = async (productId) => {
    try {
      const response = await fetch(
        "http://localhost/api/remove_from_cart.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ product_id: productId }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.product_id !== productId)
        );
      } else {
        setError(data.message || "Failed to remove item from cart");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (loading) return <div>Loading cart...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="addToCartBg">
      <div className="addToCart_heading">
        <h1>Cart</h1>
        <p>Total Products: {cartItems.length}</p>
      </div>

      <ul>
        {cartItems.map((item) => (
          <li key={item.product_id}>
            <div className="addToCart_imageAndText">
              <img
                src={item.image_url}
                alt={item.title}
                className="addToCart_image"
              />
              <div className="addToCart_textContent">
                <h1>{item.title}</h1>
                <p>Price: Rs. {item.price}</p>

                <div className="addToCart_IncreaseDecrease">
                  <button onClick={() => decreaseQuantity(item.product_id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.product_id)}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="addToCart_price_delete">
              <h1>Rs. {item.price * item.quantity}</h1>
              <button
                style={{ border: "none" }}
                onClick={() => removeItem(item.product_id)}
              >
                <img src="/images/delete.png" alt="Remove" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="addToCart_total">
        <h1>Total:</h1>
        <h1>Rs. {totalPrice}</h1>
      </div>
    </div>
  );
}
