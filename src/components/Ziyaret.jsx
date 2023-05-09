import React from "react";

import { visit } from "../helper/data";
const Ziyaret = () => {
  return (
    <div className="h-[638px] grid grid-rows-3 grid-cols-4 gap-4 m-[150px] ">
      <div class=" row-start-1 row-end-4 col-start-1 col-span-2  flex  flex-col justify-center items-center">
        <h1 className="capitalize font-extralight justify-start flex text-[60px] mr-[110px] ">
          Ziyaret Biçimini Seç
        </h1>
        <h1 className="capitalize font-extralight text-[30px]  ">
          bu muhteşem müzeyi nasıl keşfetmek istersin?
        </h1>
      </div>

      {visit.map((item, index) => (
        <div
          className={`col-start-${
            index % 2 === 0 ? 3 : 4
          } col-end-${
            index % 2 === 0 ? 3 : 4
          } flex justify-center items-center`}
          key={index}
        >
        <div className="flex flex-row justify-between items-center"> <img className="mr-4" src={item.img} alt="" />
          {item.showText}</div>
         
        </div>
      ))}
    </div>
  );
};

export default Ziyaret;
