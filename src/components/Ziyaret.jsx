import React from "react";
import { BsChevronCompactRight } from "react-icons/bs";
const Ziyaret = () => {

    const ziyaretTipleri = [
        {
          icon: ,
          text:true,

        },
      ];

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
      <div class="col-start-3 col-end-3 flex justify-center items-center">
        Aile ile ziyaret
      </div>
      <div class="col-start-4 col-end-4 flex justify-center items-center">
        Grup olarak ziyaret
      </div>
      <div class="col-start-3 col-end-3 flex justify-center items-center">
        Araştırma için ziyaret
      </div>
      <div class="col-start-4 col-end-4 flex justify-center items-center">
        Engelinize göre ziyaret
      </div>
      <div class="col-start-3 col-end-3 flex justify-center items-center">
        Kurumsal eğitim için ziyaret
      </div>
      <div class="col-start-4 col-end-4 flex justify-center items-center">
        Sponsor olmak için ziyaret
      </div>
    </div>
  );
};

export default Ziyaret;
