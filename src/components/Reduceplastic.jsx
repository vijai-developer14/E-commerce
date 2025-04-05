import React, { useRef, useState } from "react";
import "../styles/reducePlastic.css";

export default function Reduceplastic() {
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
  let imageContainerRef = useRef(null);
  const prev = () => {
    imageContainerRef.current.scrollLeft -= 1300;
    setSlide(slide - 1);
  };
  const next = () => {
    imageContainerRef.current.scrollLeft += 1300;
    setSlide(slide + 1);
  };
  const [slide, setSlide] = useState(0);
  return (
    <>
      <h2 className="head">Reduce Plastic</h2>
      <div className=" carousel">
        {slide !== 0 && <button onClick={prev} className="preButton"></button>}
        <div className="inner" ref={imageContainerRef}>
          {people.map((x) => (
            <div key={x.id}>
              <img src={x.image} alt="error" />
              <h2>{x.heading}</h2>
              <p>{x.paragraph}</p>
            </div>
          ))}
        </div>
        {slide !== people.length - 1 && (
          <button onClick={next} className="nexButton"></button>
        )}
      </div>
    </>
  );
}
