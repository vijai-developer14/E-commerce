import { useEffect } from "react";
import React, { useRef } from "react";
import "../styles/animation_impact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
export default function Animation_imapct() {
  gsap.registerPlugin(ScrollTrigger);
  // ..............                              ....mobile
  useEffect(() => {
    gsap.fromTo(
      ".thermosphere_spaceShip",
      { x: "0px" }, // Initial state
      {
        x: "-100px",
        duration: 2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".impact_thermosphere",

          scrub: true,
        },
      } // Final state
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".mesosphere_asteroid",
      { y: "0px" }, // Initial state
      {
        y: "50px",
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".impact_mesosphere",

          scrub: true,
        },
      } // Final state
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      " .stratosphere_astranout",
      { x: "0px" }, // Initial state
      {
        x: "-150px",
        rotate: "50deg",
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".impact_stratosphere",

          scrub: true,
        },
      } // Final state
    );
  }, []);
  // .....................................................desktop
  useEffect(() => {
    gsap.fromTo(
      ".thermosphere_spaceShip_desktop",
      { y: "0px" }, // Initial state
      {
        y: "-150px",
        x: "150px",
        duration: 2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".impact_thermosphere",

          scrub: true,
        },
      } // Final state
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".thermosphere_satelite_desktop",
      { y: "0px" }, // Initial state
      {
        y: "-0px",
        y: "110px",
        duration: 2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".impact_thermosphere",

          scrub: true,
        },
      } // Final state
    );
  }, []);
  // .............................asteroid
  useEffect(() => {
    gsap.fromTo(
      ".mesosphere_asteroid_desktop",
      { y: "-20px" }, // Initial state
      {
        y: "140px",
        x: "-20px",
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".impact_thermosphere",

          scrub: true,
        },
      } // Final state
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".mesosphere_asteroid_desktop2",
      { y: "-100px" }, // Initial state
      {
        y: "140px",
        x: "20px",

        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".impact_thermosphere",

          scrub: true,
        },
      } // Final state
    );
  }, []);
  // .............................astronut
  useEffect(() => {
    gsap.fromTo(
      ".stratosphere_astranout_desktop",
      { x: "0" }, // Initial state
      {
        x: "150px",
        rotate: "60deg",
        duration: 5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".impact_stratosphere",

          scrub: true,
        },
      } // Final state
    );
  }, []);
  // ....................water
  useEffect(() => {
    gsap.fromTo(
      ".waterPlastic_desktop",
      { y: "-0px" }, // Initial state
      {
        y: "300px",

        duration: 5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".impact_water",

          scrub: true,
        },
      } // Final state
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".water_turtle_desktop",
      { x: "0" }, // Initial state
      {
        x: "50px",

        duration: 5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".fish_bg_desktop",

          scrub: true,
        },
      } // Final state
    );
  }, []);
  useEffect(() => {
    gsap.fromTo(
      ".water_Whale_desktop",
      { x: "0" }, // Initial state
      {
        x: "-50px",

        duration: 5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".fish_bg_desktop",

          scrub: true,
        },
      } // Final state
    );
  }, []);

  return (
    <div>
      <div className="impact_heading">
        <h1>Air Matters</h1>
        <p>Pollution and the Path Forward </p>
      </div>
      {/* ................................................thermosphere */}
      <div className="impact_thermosphere">
        <div className="thermosphere_spaceShip_desktop"></div>
        <div className="thermosphere_spaceShip"></div>
        <div style={{ backgroundColor: "transparent" }}>
          <h1>Thermosphere</h1>
          <p>80 - 700Km</p>
          <p>
            Space activities, such as satellite launches, can release
            particulates and contribute to orbital debris.
          </p>
        </div>
        <div className="thermosphere_satelite_desktop"></div>
      </div>
      {/* .............................................Mesosphere */}
      <div className="impact_mesosphere">
        <div className="mesosphere_asteroid"></div>
        <div className="mesosphere_asteroid_desktop"></div>
        <div style={{ backgroundColor: "transparent" }}>
          <h1>Mesosphere</h1>
          <p>50 - 80Km</p>
          <p>
            Aerosols are tiny particles or droplets that are suspended in the
            air or another gas. Some aerosols may contribute to the formation of
            mesospheric clouds, which can influence atmospheric dynamics.
          </p>
        </div>
        <div className="mesosphere_asteroid_desktop2"></div>
      </div>
      {/* ..............................................stratosphere */}
      <div className="impact_stratosphere">
        <div className="stratosphere_astranout"></div>
        <div className="stratosphere_astranout_desktop"></div>
        <div style={{ backgroundColor: "transparent" }}>
          <h1>Stratosphere</h1>
          <p>12 - 50Km </p>
          <p>
            Chlorofluorocarbons (CFCs) from aerosols and refrigerants. Leads to
            higher rates of skin cancer, cataracts, and reduced agricultural
            productivity.
          </p>
        </div>
      </div>
      {/* ..............................................troposphere */}
      <div className="impact_troposphere">
        <h1>Troposphere</h1>
        <p>0 - 12Km </p>
        <p>
          Factories, vehicles, deforestation, and agriculture release pollutants
          like carbon dioxide (CO₂), methane (CH₄), nitrogen oxides (NOₓ), and
          particulate matter. Long-term exposure increases the risk of chronic
          obstructive pulmonary disease (COPD) and lung cancer
        </p>
      </div>
      {/* ..............................................water */}
      <div className="impact_water">
        <h1>Drowning in Plastic</h1>

        <p>
          Water pollution is a global crisis that affects rivers, lakes, oceans,
          and even underground water supplies. As we pour chemicals, plastics,
          and untreated waste into our natural water systems, we are not only
          harming ecosystems but also endangering human health and the future of
          our environment.
        </p>
        <div
          className="waterDesktopProps_b"
          style={{ backgroundColor: "transparent" }}
        >
          <div className="waterPlastic_desktop"></div>
          <div className="fish_bg_desktop">
            <div className="water_turtle_desktop"></div>
            <div className="water_Whale_desktop"></div>
          </div>
        </div>

        <button>Shop Wisely</button>
      </div>
      {/* .... end*/}
    </div>
  );
}
