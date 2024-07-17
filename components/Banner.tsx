import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { hotel2, hotel3 } from '../public/assets/images/index';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import BannerText from './BannerText';
const Banner = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: 'linear',
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  return (
    <>
      <div className="slider-container slider-container-size w-full h-[400px] shadow-bannerShadow relative">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          <div className="relative    ">
            <Image className="relative" src={hotel2} alt="bed in fancy room" />
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/3">
              <BannerText title="Shop for your jeans" btnText="Shop now" />
            </div>
          </div>

          <div className="relative">
            <Image src={hotel3} alt="bed in fancy room" />

            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/3">
              <BannerText title="Shop for your jeans" btnText="Shop now" />
            </div>
          </div>

          <div className="relative">
            <Image src={hotel2} alt="bed in fancy room" />

            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/3">
              <BannerText title="Shop for your t-shirts" btnText="Shop now" />
            </div>
          </div>

          <div className="relative">
            <Image src={hotel3} alt="bed in fancy room" />
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/3">
              <BannerText title="Shop for your shoes" btnText="Shop now" />
            </div>
          </div>
        </Slider>
        <div
          className="absolute top-[60%] w-full flex justify-between"
          style={{ textAlign: 'center' }}
        >
          <button className="button bg-white p-4" onClick={previous}>
            <IoIosArrowBack />
          </button>
          <button className="button bg-white p-4" onClick={next}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};
export default Banner;
