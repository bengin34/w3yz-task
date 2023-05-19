import React from "react";
import Card from "./Card";

const Podcast = ({ images }) => {

  return (
    <div
      style={{
        background: "linear-gradient(295deg, #D2D2D2 0%, #EFEFEF 94%)",
      }}
      className="w-[1860px] h-[1327px] rounded-[40px] mx-auto mt-[160px] grid grid-cols-2 gap-4"
    >
      <div className="flex flex-col justify-center items-start ml-[110px] mr-[110px] ">
        <h1 className="text-[60px] font-extralight font-manrope">Podcast</h1>
        <h3 className="capitalize font-manrope font-extralight text-[30px] mb-[30px]">
          bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu
          yüzden en iyi şekilde.
        </h3>

        <h5 className="font-avenir text-[16px]  text-[#808080]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.{" "}
        </h5>

        <h6 className="uppercase mt-[120px] text-[16px] font-avenir text-[#808080]">spotify</h6>
      </div>

      <div className=" mt-[120px] grid grid-rows-3 grid-cols-4  m-auto  ">
        <div className="col-start-1 col-end-1 ">
          <img src={images[7]?.imagelist?.[0].url} alt={images[6]?.name} />
        </div>
        <div className=" row-span-2 col-start-2 col-end-3  ">
          <img src={images[8]?.imagelist?.[0].url} alt={images[7]?.name} />
        </div>
        <div className="row-span-1 col-start-3 col-end-5 ">
          <img src={images[10]?.imagelist?.[0].url} alt={images[9]?.name} />
        </div>
        <div className=" col-start-1 col-end-1 row-span-2 mt-[14px] ">
          <img src={images[4]?.imagelist?.[0].url} alt={images[3]?.name} />
        </div>
        <div className="row-span-1 col-start-3 col-end-4 ">
          <img src={images[9]?.imagelist?.[0].url} alt={images[8]?.name} />
        </div>
        <div className="row-span-1 col-start-4 col-end-5 mx-[4px]">
          <img src={images[9]?.imagelist?.[0].url} alt={images[8]?.name} />
        </div>
        <div className="row-span-1 col-start-2 col-end-3 mt-2 ">
          <img src={images[7]?.imagelist?.[0].url} alt={images[6]?.name} />
        </div>
        <div className="row-span-1 col-start-3 col-end-5 mt-2">
          <img src={images[5]?.imagelist?.[0].url} alt={images[4]?.name} />
        </div>
      </div>

      <div className="col-start-1 col-end-7 gap-7 flex items-center mx-auto pl-6  pr-10">
        {images?.slice(1, 4).map((item, index) => (
          <Card item={item} key={index} />
        ))}
        {/* api de Figma görsellerinden bir resin eksik olduğu için bu eklemeyi yaptım  */}
        <Card item={images[1]} />
      </div>
    </div>
  );
};

export default Podcast;
