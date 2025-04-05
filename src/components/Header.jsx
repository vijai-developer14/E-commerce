import React, { useState, useEffect } from "react";
import "../styles/common.css";
import "../styles/header.css";
import gsap from "gsap";
import { Link } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
    // document.getElementById('searchText').classList.toggle('active')
  };
  const getState = () => {
    return search === true ? "searchText active" : "searchText disable";
  };

  //....................................animation
  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 2,
      skewX: 5,
      ease: "power3.inOut",
    });
  };
  const handleHoverReturn = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -2,
      skewX: 0,

      ease: "power3.inOut",
    });
  };
  //.......................................menu
  useEffect(() => {
    gsap.fromTo(
      ".menuSection li",
      { opacity: 0, y: -15, transformOrigin: "top", scaleY: 0 }, // Initial state
      { opacity: 1, y: 0, stagger: 0.1, scaleY: 1, ease: "power3.inOut" } // Final state
    );
  }, []);
  // .........................................logo
  useEffect(() => {
    gsap.fromTo(
      ".logo img",
      { opacity: 0, y: -15, transformOrigin: "top", scaleY: 0 }, // Initial state
      { opacity: 1, y: 0, stagger: 0.4, scaleY: 1, ease: "power3.inOut" } // Final state
    );
  }, []);

  // .........................................search
  useEffect(() => {
    gsap.fromTo(
      "#searchBar",
      { opacity: 0, y: -15, transformOrigin: "top", scaleY: 0 }, // Initial state
      { opacity: 1, y: 0, stagger: 0.4, scaleY: 1, ease: "power3.inOut" } // Final state
    );
  }, []);

  // const handleHome = () => {
  //   gsap.from("li span", {
  //     opacity: 0,
  //     y: -15,
  //     stagger: 0.1,
  //   });
  // };

  // .........................................hamburger
  const hamburgerFuntion = () => {
    document.querySelector(".headerGrid").classList.toggle("ham");
  };

  return (
    <div>
      <header className="headerBackground">
        <nav className="headerGrid">
          <div className="logo">
            <img src="webp images/logo.webp" alt="..." />
          </div>
          <div>
            <ul className="menuSection">
              <Link to="/" style={{ textDecoration: "none" }}>
                <li
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverReturn(e)}
                >
                  Home
                </li>
              </Link>

              <Link to="/Shoppage" style={{ textDecoration: "none" }}>
                <li
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverReturn(e)}
                >
                  Shop
                </li>
              </Link>

              <Link to="/Impactpage" style={{ textDecoration: "none" }}>
                <li
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverReturn(e)}
                >
                  Contact Us
                </li>
              </Link>

              <Link to="/Cartpage" style={{ textDecoration: "none" }}>
                <li
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverReturn(e)}
                >
                  Blogs
                </li>
              </Link>
            </ul>
          </div>

          <div id="searchBar">
            <form id="searchForm">
              <input
                type="text"
                className={getState()}
                placeholder="search here"
              ></input>
              <input
                type="submit"
                value=" "
                id="searchIcon"
                onClick={() => handleSearch()}
              />
            </form>

            <div className="loginIcon">
              <img src="../webp images/shopping-cart.png " />
            </div>

            <div>
              <img
                className="hamburger"
                onClick={hamburgerFuntion}
                src="../images/hamburger.png"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
