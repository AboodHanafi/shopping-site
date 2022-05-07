import "./style.css";

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "../../Api/sliderData";
// Import Swiper styles

// swiper bundle styles
import "swiper/css/bundle";

// swiper core styles
import "swiper/css";

// modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
  //console.log(data);
  return (
    <div className="hero">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        // spaceBetween={50}
        // slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {data.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="inner-container flex" id="inner-container-hero">
                <div className="left-hero">
                  <p className="first-text-left-hero">{item.firstParagraph}</p>
                  <h1 className="second-text-left-hero">{item.headLine1}</h1>
                  <p className="third-text-left-hero">{item.secondParagraph}</p>
                  <button className="shop-now-hero-button">SHOP NOW</button>
                </div>

                <div
                  className="hero-image"
                  style={{
                    background: `url(${item.background})center center no-repeat`,
                  }}
                ></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSection;
