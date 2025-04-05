import React, { useState, useEffect } from "react";

import "../styles/shopPage.css";

import "../styles/shopPage.css";
export default function Shoppage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddToCart = async (product) => {
    try {
      const response = await fetch("http://localhost/api/add_to_cart.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: product.id,
          title: product.title,
          price: product.price,
          image_url: product.image_url,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Added to cart!");
      } else {
        alert("Failed to add to cart");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add to cart");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost/api/get_products.php");
        const data = await response.json();
        if (data.success) setProducts(data.products);
        else setError("Failed to load products");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="shopPage_bg">
      <div className="filterBg">
        <div>Showing 15 products</div>
        <button>
          <span>Filter</span>
          <img src="../images/filter_3839020 1.png" alt="" />
        </button>
      </div>

      <div className="shopPage_wrapper">
        {products.map((product) => (
          <div className="shopPageContainer" key={product.id}>
            <div className="shopImage_bg">
              <img src={product.image_url} alt={product.title} />
            </div>

            <div className="shopPageTextCnt">
              <div style={{ backgroundColor: "transparent" }}>
                <h3 style={{ color: "#626262" }}>{product.title}</h3>
                <h3>Rs. {product.price}.00</h3>
              </div>
              <div style={{ backgroundColor: "transparent" }}>
                <img
                  src="../webp images/shopping-cart.png"
                  alt="Add to cart"
                  id="shopPagecartImg"
                  onClick={() => handleAddToCart(product)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
