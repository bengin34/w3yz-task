import React, {  useEffect } from "react";
import axios from 'axios'
import { useState } from "react";
import main from "../assets/main.jpg";

import Carousel from "../components/Carousel";
import Podcast from "../components/Podcast";
import Ziyaret from "../components/Ziyaret";



const LandingPage = () => {

  const [images, setImages] = useState([])

  const BASE_URL = "https://w3yz.com/api/ch"

  const getImages = async () => {
    try {
      const { data } = await axios(BASE_URL)
      const products = data.products
      setImages(products)
    } catch (error) {
      console.log(error)
    }
  }
  

  useEffect(() => {
    getImages()
  }, [])

  return (
    <>
      {/* main img */}
      <div className="relative bg-gradient-to-r mx-auto  w-[1640px] h-[820px] ">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent rounded-b-lg"></div>
        <img
          className="w-[1640px] h-[820px] object-cover mx-auto mt-[100px] rounded-b-lg  "
          src={main}
          alt=""
        />
        <div className="absolute w-[38%] bottom-[20%] p-4 md:p-8">
          <h2 className="mx-2 text-white text-[60px] font-manrope  ">
            Çocuklar için Sanat Eğitimi
          </h2>
          <h3 className="  mx-2 mt-8 text-white text-[30px] font-manrope font-extralight capitalize">
            Ücretsiz aile etkinliklerimizde bir sanat dünyası oyunu oynayın,
            çocuklarınızla yaratın ve keşfedin
          </h3>
        </div>
      </div>
      {/* main text */}
      <div className="mx-auto w-[1120px] h-[300px] font-manrope  text-center text-[60px] capitalize font-extralight mt-[120px] mb-[120px]">
        <h2>Happy Galeri'ye Hoşgeldiniz</h2>
        <h2 className="mt-8 text-[30px] capitalize">
          bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu
          yüzden en iyi şekilde yararlanmak için ziyaretinizi önceden planlayın.
          Temaya dayalı bir turu takip etmek için neden ziyaretçi
          parkurlarımızdan birini seçmiyorsunuz? Molaya ihtiyacınız olduğunda,
          müzenin dinlendirici bahçelerinden daha iyi neresi var?
        </h2>
      </div>

      {/* Carousel */}
      <Carousel />

      {/* Podcast */}
      <Podcast images={images} />

      {/* Ziyaret */}
      <Ziyaret />

    </>
  );
};

export default LandingPage;
