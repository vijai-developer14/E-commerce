import React, { useState } from "react";
import "../styles/accordian.css";

export default function Accordian() {
  const accord = [
    {
      id: 1,
      question: "What makes our products eco-friendly?",
      answer:
        "Our products are made from sustainable materials, such as recycled or biodegradable materials, and are produced using environmentally friendly processes that minimize carbon emissions and waste.",
    },
    {
      id: 2,
      question: "Are our products certified eco-friendly?",
      answer:
        "Yes, many of our products are certified by reputable organizations such as [insert certification names], ensuring they meet strict environmental standards.",
    },
    {
      id: 3,
      question: "How do you package your products?",
      answer:
        "We use eco-friendly packaging materials, such as recycled cardboard, biodegradable plastics, and minimalistic designs to reduce waste. Our packaging is also designed to be reusable or recyclable.",
    },
  ];
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    } else {
      setSelected(i);
    }
  };
  return (
    <div className="bgAccord">
      <div className="accordBg">
        <h2 className="heading">FAQ</h2>
        <img className="accImg" src="../images/terracotabg.png" alt="error" />

        <div className="accordContent">
          {accord.map((item, i) => (
            <div className="item" key={item.id} onClick={() => toggle(i)}>
              <div className="title">
                <h2>{item.question}</h2>
                <img
                  src="../images/plus.png"
                  className={selected === i ? "plus rotate" : "plus default"}
                />
              </div>

              <div className={selected === i ? "content show" : "content"}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
