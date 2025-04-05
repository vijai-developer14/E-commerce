import React, { useEffect } from "react";

import "../styles/newHeader.css";
import $ from "jquery";
import { Link } from "react-router-dom";

export default function NewHeader() {
  useEffect(() => {
    $(".searchImage").on("click", () => {
      $(".searchAppear").animate(
        { margin: "-70px 0px 0px 0px", opacity: "1" },
        300
      );
    });
  }, []);

  useEffect(() => {
    $(".closeImage").on("click", () => {
      $(".searchAppear").animate(
        { opacity: "0" },
        {
          duration: 240,
          queue: false,
          complete: () => {
            $(".searchAppear").animate(
              { margin: "-70px 0px 0px 1900px" },
              { duration: 140 }
            );
          },
        }
      );
    });
  }, []);
  const hamburgerPopUp = () => {
    document.querySelector(".group").classList.toggle("hamburgerActive");
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <div className="headerBg" style={{ backgroundColor: "white" }}>
        <header>
          <div className="logo" style={{ backgroundColor: "transparent" }}>
            <img
              src="../webp images/logo1.png"
              alt="..."
              style={{ backgroundColor: "transparent" }}
              id="logo1"
            />
            <img
              src="../webp images/logo2.png"
              alt="..."
              style={{ backgroundColor: "transparent" }}
              id="logo2"
            />
          </div>
          {/* ..........................................menus */}
          <div className="group">
            <ul className="navigation">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li>Home</li>
              </Link>
              <Link to="/Shoppage" style={{ textDecoration: "none" }}>
                <li>Shop</li>
              </Link>
              <Link to="/ContactUs" style={{ textDecoration: "none" }}>
                <li>Contact Us</li>
              </Link>
              <Link to="/Blogs" style={{ textDecoration: "none" }}>
                <li>Blogs</li>
              </Link>
            </ul>
          </div>
          {/* ..............................................search */}
          <div className="search">
            <img
              className="searchImage"
              src="../images/search.png"
              style={{ backgroundColor: "transparent" }}
            />
            {/* .............................................cart and hamburger */}
            <Link to="/Cartpage" style={{ textDecoration: "none" }}>
              <img
                src="../webp images/shopping-cart.png"
                className="cartImage"
                style={{ backgroundColor: "transparent" }}
              ></img>
            </Link>
            {/* .....................................................search appear */}
            <img
              src="../images/hamburger.png"
              className="hamburgerImage"
              onClick={hamburgerPopUp}
              style={{ backgroundColor: "transparent" }}
            />
          </div>
        </header>
      </div>

      <div className="searchBg">
        <div className="searchAppear">
          <form>
            <input type="text" placeholder="search products" />
            <input type="submit" value="" />
            <img className="closeImage" src="../images/close.png" />
          </form>
        </div>
      </div>
    </div>
  );
}
