import React from "react";
import "../styles/heroMaterilas.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function HeroMaterials() {
  const navigate = useNavigate();

  const handleBuyNow = (material) => {
    navigate(`/shop?material=${material.toLowerCase()}`);
  };
  return (
    <div>
      <div className="heroMaterialsHeading">
        <h1>Our Hero Materials</h1>
        <p>Natural materials used for making products.</p>
        <img src="../webp images/hero underline design.webp" />
      </div>

      <div className="heroCnt">
        <div className="bambooCnt">
          <img
            src="../webp images/bamboo.webp"
            alt=""
            className="aniLeftToRight bambooImage"
          />
          <div className="aniRightToLeft heroContentText ">
            <img
              className="heroContentBgImage"
              src="../images/bambooBg.png"
            ></img>
            <h3>BAMBOO</h3>
            <p className="split bambooText">
              Bamboo products are an eco-friendly alternative to plastic and
              other non-renewable materials, playing a significant role in
              preserving the environment. Bamboo is a fast- growing, renewable
              resource that requires minimal water, no fertilizers, and no
              pesticides to thrive.
            </p>
            <p className="heroContentSecondParagraph">
              Its cultivation prevents soil erosion, improves air quality by
              absorbing large amounts of carbon dioxide, and releases more
              oxygen compared to traditional trees.
            </p>

            <Link
              to="/Shoppage"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <button style={{ cursor: "pointer" }}>Buy now</button>
            </Link>
          </div>
        </div>

        <div className="terraCottaCnt">
          <div className="aniLeftToRight heroContentText ">
            <img
              className="heroContentBgImage"
              src="../images/terracotabg.png"
              alt="error"
            />
            <h3>TERRACOTTA</h3>
            <p className="teracotaText">
              Terracotta products, made from natural clay, are a sustainable and
              environmentally friendly choice that has been used for centuries.
              These products are 100% biodegradable and decompose naturally
              without releasing harmful toxins, making them an excellent
              alternative to plastic and synthetic materials.
            </p>
            <p className="heroContentSecondParagraph">
              The production of terracotta requires minimal energy and no harsh
              chemicals, reducing the carbon footprint significantly.
              Additionally, terracotta is highly durable, reusable, and
              recyclable, contributing to a circular economy.
            </p>
            <Link
              to="/Shoppage"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <button style={{ cursor: "pointer" }}>Buy now</button>
            </Link>
          </div>
          <img
            src="../webp images/terracota.webp"
            alt="error"
            className="aniRightToLeft terracotaImage"
          />
        </div>

        <div className="caneCnt">
          <img
            src="../webp images/cane.webp"
            alt=""
            className="aniLeftToRight caneImage"
          />
          <div className="aniRightToLeft heroContentText ">
            <img
              className="heroContentBgImage"
              src="../images/bambooBg.png"
            ></img>
            <h3>CANE</h3>
            <p className="caneText">
              Sugarcane absorbs carbon dioxide during growth, offsetting
              emissions and lowering the carbon footprint of manufacturing. As a
              renewable and fast-growing resource, sugarcane reduces reliance on
              finite fossil fuels , while responsibly harvested crops prevent
              deforestation. By replacing traditional plastics, sugarcane
              products help reduce landfill waste, protect oceans, and promote a
              circular economy for a healthier planet.
            </p>
            <Link
              to="/Shoppage"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <button style={{ cursor: "pointer" }}>Buy now</button>
            </Link>
          </div>
        </div>

        <div className="recycledCnt">
          <div className="aniLeftToRight heroContentText recycledText">
            <img
              className="heroContentBgImage"
              src="../images/recycleBg.png"
              alt="error"
            />
            <h3>RECYCLED</h3>
            <p className="recycledText">
              Recycled products are a powerful way to protect the environment by
              reducing waste, conserving resources, and minimizing pollution. By
              repurposing materials like paper, plastic, and metal, they prevent
              tons of waste from ending up in landfills or oceans, helping to
              protect ecosystems and wildlife.
            </p>
            <p className="heroContentSecondParagraph">
              Using recycled materials also conserves natural resources such as
              trees, water, and minerals, while significantly cutting down the
              energy required for production compared to creating new products
              from raw materials.
            </p>
            <Link
              to="/Shoppage"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <button style={{ cursor: "pointer" }}>Buy now</button>
            </Link>
          </div>
          <img
            src="../webp images/recycle.webp"
            alt="error"
            className="aniRightToLeft recycledImage"
          />
        </div>
      </div>
    </div>
  );
}
