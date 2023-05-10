import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import {slides} from "../helper/data.js"

const Carousel = () => {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1920px] h-[633px] w-full m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].source})` }}
        className="w-full h-full bg-center bg-repeat-x duration-500"
      >
        <div className="absolute  text-center bottom-[50%] left-52 w-[50%] ml-[120px] p-4 ">
        {slides[currentIndex].showText && ( 
            <>
              <h1 className="text-white text-[60px] capitalize font-manrope ">
                Yeni gelen sanat eserlerini inceleyin
              </h1>
              <h1 className="absolute -bottom-[110%] w-[50%] right-[90%] text-white font-extralight text-[36px] font-manrope capitalize">
                Özel Galerimiz
              </h1>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        {/* Left Arrow */}
        <div className=" group-hover:block absolute top-[90%] -translate-x-0 translate-y-[-50%] left-[90%] text-md rounded-full p-2 bg-white  text-black cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={10} />
        </div>
        {/* Right Arrow */}
        <div className="absolute top-[88%] flex left-[93%] justify-center -mx-2 my-1 text-white">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-md cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>

        <div className=" group-hover:block absolute top-[90%] -translate-x-0 translate-y-[-50%] right-[1%] text-md rounded-full p-2 bg-white  text-black cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={10} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
