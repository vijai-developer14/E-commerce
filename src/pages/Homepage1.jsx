import React from "react";
import Banner1 from "../components/Banner1";
import Swipe from "../components/Swipe";
import HeroMaterials from "../components/HeroMaterials";
import Essentials from "../components/Essentials";
import Accordian from "../components/Accordian";
import Ani_imapct_banner from "../components/Ani_imapct_banner";

export default function Homepage1() {
  return (
    <div>
      <Banner1 />

      <Swipe />

      <HeroMaterials />

      <Essentials />
      <Ani_imapct_banner />
      <Accordian />
    </div>
  );
}
