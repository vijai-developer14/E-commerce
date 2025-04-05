import React, { useState } from "react";
import "../styles/essentials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function Essentials() {
  const array = [
    {
      id: 1,
      image: "../images/Pr_loaf.png",
      name: "Coconut Scrub",
      ratings: "Ratings 5/5",
      price: 280,
    },
    {
      id: 2,
      image: "../images/Pr_keyboard.png",
      name: "Bamboo Keyboard",
      ratings: "Ratings 4/5",
      price: 220,
    },
    {
      id: 3,
      image: "../images/Pr_container.png",
      name: "Bamboo Basket",
      ratings: "Ratings 5/5",
      price: 180,
    },
    {
      id: 4,
      image: "../images/Pr_kettle.png",
      name: "Earthware Kettle",
      ratings: "Ratings 4/5",
      price: 500,
    },
    {
      id: 5,
      image: "../images/Pr_soap.png",
      name: "Eco Soap",
      ratings: "Ratings 5/5",
      price: 250,
    },
    {
      id: 6,
      image: "../images/Pr_warter.png",
      name: "Terracota Bottle",
      ratings: "Ratings 4/5",
      price: 200,
    },
    {
      id: 7,
      image: "../images/Pr_ecoBag.png",
      name: "Eco-freindly Bag",
      ratings: "Ratings 5/5",
      price: 80,
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NexArrow />,
    prevArrow: <PriArrow />,
    responsive: [
      {
        breakpoint: 1128,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 638,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 396,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  function PriArrow(props) {
    const { className, style, onClick, currentSlide } = props;

    return (
      <>
        {currentSlide !== 0 && (
          <div
            className={className}
            style={{
              ...style,
              display: "block",
              backgroundImage: 'url("../webp images/arroww.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "7%",
              width: "5%",
            }}
            onClick={onClick}
          />
        )}
      </>
    );
  }

  function NexArrow(props) {
    const { className, style, onClick, slideCount, currentSlide } = props;

    return (
      <>
        {currentSlide !== slideCount - 4 && (
          <div
            className={className}
            style={{
              ...style,
              display: "block",
              backgroundImage: 'url("../webp images/arrowwright.png")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              height: "7%",
              width: "5%",

              // rotate:'180deg',
            }}
            onClick={onClick}
          ></div>
        )}
      </>
    );
  }

  return (
    <div>
      <div className="essentialGrid">
        <h1>Essentials</h1>

        <Slider {...settings}>
          {array.map((items) => (
            <div className="conatiner" key={items.id}>
              <div className="imageBorder">
                <img src={items.image} />
              </div>
              <div className="detailBg">
                <p className="prName">{items.name}</p>
                <p className="prRating">{items.ratings}</p>
              </div>

              <Link to={`/product/${items.id}`}>
                <button className="essentialsButton">
                  <span id="s1"></span>
                  <span id="s2">Buy Now | ₹{items.price}</span>
                </button>
              </Link>
              {/*  */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
