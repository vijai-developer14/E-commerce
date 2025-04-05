import React, { useState } from "react";
import "../styles/productDetail.css";

import { useParams } from "react-router-dom";
export default function ProductDetails() {
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
  // .................................................params

  const products = [
    {
      id: 1,
      image: "../images/Pr_loaf.png",
      name: "Coconut Scrub",
      ratings: "Ratings 5/5",
      price: "₹280.00",
      description:
        "A coconut scrub is a natural skincare product made from coconut oil, finely ground coconut shell particles, and other natural ingredients. It exfoliates the skin, removing dead skin cells and leaving it soft, smooth, and rejuvenated.",
      plasticSaved: "10g - 15g",
      carbonReduced: "180g - 200g",
    },
    {
      id: 2,
      image: "../images/Pr_keyboard.png",
      name: "Bamboo Keyboard",
      ratings: "Ratings 4/5",
      price: "₹220.00",
      description:
        "This bamboo keyboard is an eco-friendly, durable alternative to traditional plastic keyboards. Made from high-quality bamboo, the keyboard has a sleek, modern design with a natural wood finish.",
      plasticSaved: "50g - 60g",
      carbonReduced: "300g - 350g",
    },
    {
      id: 3,
      image: "../images/Pr_container.png",
      name: "Bamboo Basket",
      ratings: "Ratings 5/5",
      price: "₹180.00",
      description:
        "Crafted from sustainable bamboo, this bamboo basket is both functional and stylish. It's perfect for organizing your home, office, or any space that needs a touch of natural decor.",
      plasticSaved: "20g - 25g",
      carbonReduced: "250g - 300g",
    },
    {
      id: 4,
      image: "../images/Pr_kettle.png",
      name: "Earthware Kettle",
      ratings: "Ratings 4/5",
      price: "₹500.00",
      description:
        "The Earthware Kettle combines traditional craftsmanship with eco-conscious materials. Made from earth-friendly clay, it retains heat efficiently, ensuring that your tea or coffee stays warm for longer periods.",
      plasticSaved: "80g - 90g",
      carbonReduced: "400g - 450g",
    },
    {
      id: 5,
      image: "../images/Pr_soap.png",
      name: "Eco Soap",
      ratings: "Ratings 5/5",
      price: "₹250.00",
      description:
        "Our eco soap is made from 100% organic ingredients, designed to cleanse and nourish your skin without any harmful chemicals. Enriched with natural oils like coconut and olive oil, this soap moisturizes the skin while gently exfoliating and removing impurities.",
      plasticSaved: "5g - 10g",
      carbonReduced: "50g - 75g",
    },
    {
      id: 6,
      image: "../images/Pr_warter.png",
      name: "Terracotta Bottle",
      ratings: "Ratings 4/5",
      price: "₹200.00",
      description:
        "The terracotta bottle is a timeless, eco-friendly alternative to plastic water bottles. Made from natural clay, these bottles are porous, which helps to keep water cool for longer periods. Terracotta also has natural antibacterial properties.",
      plasticSaved: "16g - 20g",
      carbonReduced: "250g - 280g",
    },
    {
      id: 7,
      image: "../images/Pr_ecoBag.png",
      name: "Eco-friendly Bag",
      ratings: "Ratings 5/5",
      price: "₹80.00",
      description:
        "Made from sustainable materials, this eco-friendly bag is the perfect companion for your shopping trips, beach days, or as an everyday tote. The bag is lightweight yet durable, designed to carry your essentials with ease while reducing your carbon footprint.",
      plasticSaved: "30g - 35g",
      carbonReduced: "120g - 140g",
    },
  ];
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  return (
    <div className="productDetailBg">
      <div className="productDetail_Bg">
        {/* .....................................description */}
        <div className="productDescription">
          <h1>{product.name}</h1>
          <div className="productDetailLine"></div>
          <p className="productDescriptionPara1">{product.description}</p>

          {/* <button>Add to Cart</button> */}
        </div>

        {/* .....................................image */}
        <div className="productDetailImageBorder">
          <img src={product.image} />
        </div>

        {/* .....................................price*/}
        <div className="productDetailPrice">
          <h1 className="productDetailPriceOfProduct">{product.price}</h1>
          <div className="productDetailPriceLine"></div>
          {/* .....................................Plastic saved*/}
          <div className="plasticSavedContentBg ">
            <span className="plasticSavedContentTitle ">Plastic Saved :</span>
            <span className="plasticSavedInGrams ">{product.plasticSaved}</span>
          </div>
          <div style={{ marginTop: "15px" }}>
            <span className="plasticSavedContentTitle ">Carbon Reduced :</span>
            <span className="plasticSavedInGrams ">
              {product.carbonReduced}
            </span>
          </div>
          <button className="plasticSavedButton">Learn More</button>
          {/* .................................................increase decrease */}
          <div className="productDetail_quantityIncreaseAndDecrease">
            <button onClick={increaseNumber}>
              <img src="../images/increase.png" />
            </button>
            <span>{number}</span>
            <button onClick={decreaseNumber}>
              <img src="../images/decrease.png" />
            </button>
          </div>

          {/* .................................................buy now button */}
          <button className="productDetail_buyNowButton">Buy Now</button>
        </div>
      </div>

      {/* ......................................................//review */}
      <div className="reviewSection"></div>
    </div>
  );
}
