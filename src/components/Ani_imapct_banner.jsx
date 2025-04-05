import React from "react";
import "../styles/ani_imapct_banner.css";
import { Link } from "react-router-dom";

export default function Ani_imapct_banner() {
  return (
    <div>
      <div className="impact_bannerBg">
        <div className="impact_bannerCnt">
          <h1>The Plastic Effect</h1>
          <p className="impactBanner_1">
            Every minute, a truckload of plastic enters the ocean. Discover the
            impact.Plastic has become an undeniable part of our daily lives, but
            at what cost?
          </p>
          <p className="impactBanner_2">
            Every minute, a truckload of plastic enters the ocean...
          </p>
          <Link
            to="/Animation_imapct"
            style={{ backgroundColor: "transparent" }}
          >
            <button>Learn More</button>
          </Link>
        </div>
        {/* ............................image */}
        <div className="impactBanner_image"></div>
      </div>
    </div>
  );
}
