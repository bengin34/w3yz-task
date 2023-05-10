import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import carousel1 from "../assets/carousel1.jpg";

const Carousel = () => {
  const slides = [
    {
      source: carousel1,
      showText:true,
    },
    {
      source:
        "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
        showText:false,
    },

    {
      source:
        "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
         showText:false,
    },
    {
      source:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
         showText:false,
    },
  ];

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
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="absolute  text-center bottom-[50%] left-52 w-[50%] ml-[120px] p-4 ">
        {slides[currentIndex].showText && ( 
            <>
              <h1 className="text-white text-[60px] capitalize ">
                Yeni gelen sanat eserlerini inceleyin
              </h1>
              <h1 className="absolute -bottom-[110%] w-[50%] right-[90%] text-white font-extralight text-[36px] capitalize">
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
