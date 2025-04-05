import React, { useState } from "react";
import "../styles/swipe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

export default function Swipe() {
  return (
    <div className="bgCnt">
      <div className="rpBg">
        <h2>Reduce Plastic </h2>
        <p className="desc">
          Plastic is so ingrained into our daily lives that its impact is often
          overlooked.
        </p>
        <Swiper
          spaceBetween={50}
          modules={[Navigation]}
          slidesPerView={1}
          navigation
        >
          <div>
            <SwiperSlide>
              <div>
                <div className="ReducePlasticImage1"></div>
                <h3>Wildlife Harm :</h3>
                <p>
                  Animals often mistake plastic for food, leading to ingestion,
                  entanglement, and fatal injuries. This affects marine life,
                  birds, and terrestrial animals alike
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="ReducePlasticImage2"></div>
                <h3>Air Pollution :</h3>
                <p>
                  Burning plastic waste releases toxic chemicals into the air,
                  contributing to air pollution and respiratory problems.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div>
                <div className="ReducePlasticImage3"></div>
                <h3>Soil Contamination :</h3>
                <p>
                  Plastic particles degrade into microplastics that infiltrate
                  soil, affecting plant growth and contaminating water sources.
                </p>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
