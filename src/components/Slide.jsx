import React, { useState } from "react";
import "../styles/slide.css";

export default function Slide() {
  const [people] = useState([
    {
      id: 1,
      heading: "Wildlife Harm :",
      paragraph:
        "Animals often mistake plastic for food, leading to ingestion, entanglement, and fatal injuries. This affects marine life, birds, and terrestrial animals alike.",
      image: "../webp images/whale.webp",
    },

    {
      id: 2,
      heading: "Air Pollution :",
      paragraph:
        "Burning plastic waste releases toxic chemicals into the air, contributing to air pollution and respiratory problems. ",
      image: "../webp images/globe.webp",
    },

    {
      id: 3,
      heading: "Soil Contamination :",
      paragraph:
        " Plastic particles degrade into microplastics that infiltrate soil, affecting plant growth and contaminating water sources.",
      image: "../webp images/soil.webp",
    },
  ]);
  const [slide, setslide] = useState(0);

  const next = () => {
    setslide(slide === people.length - 1 ? 0 : slide + 1);
  };
  const prev = () => {
    setslide(slide === 0 ? people.length - 1 : slide - 1);
  };
  return (
    <>
      <h1>Reduce Plastic</h1>
      <section className="reducePlasticBg">
        {slide !== 0 && <button className="prev" onClick={prev}></button>}

        <div className="reducePlasticCnts">
          {people.map((obj, index) => {
            return (
              <article
                key={obj.id}
                className={slide === index ? "slide" : "slide slideHidden"}
              >
                <img src={obj.image} />
                <h2>{obj.heading}</h2>
                <p>{obj.paragraph}</p>
              </article>
            );
          })}
        </div>
        {slide !== people.length - 1 && (
          <button className="next" onClick={next}></button>
        )}
      </section>
    </>
  );
}
