import React from "react";
import "../styles/blogs.css";
export default function Blogs() {
  return (
    <div className="blogBg">
      <h1>Blogs</h1>
      <div className="cardBg">
        <div className="card1">
          <div className="cardImage_Bg">
            <img
              src="../images/Blog page image 1.png"
              alt=""
              id="blog_desktop"
            />
            <img src="../images/blog image 1 700.png" alt="" id="blog_700" />
            <img src="../images/blog image 1 463.png" alt="" id="blog_463" />

            <div id="blog_3051"></div>
          </div>
          <div className="bolgText">
            <h2>Cleaning Up for a Greener Tomorrow</h2>
            <p>
              Every small action counts! 🌍 These eco-warriors are making a
              difference by cleaning up. Let's join hands for a cleaner, greener
              future!
            </p>
            <button>Read More</button>
          </div>
        </div>

        <div className="card1">
          <div className="cardImage_Bg">
            <img
              src="../images/blog page image2.png"
              alt=""
              id="blog_desktop"
            />
            <img src="../images/blog image2 700.png" alt="" id="blog_700" />
            <img src="../images/blog image 2 463.png" alt="" id="blog_463" />
            <div id="blog_3052"></div>
          </div>
          <div className="bolgText">
            <h2>Intresting facts about Recycling</h2>
            <p>
              Recycling just one ton of paper saves 17 trees and 7,000 gallons
              of water. Small actions lead to big environmental impacts.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
