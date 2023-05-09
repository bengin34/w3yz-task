import React from "react";

const Podcast = () => {
  return (
    <div className="w-[1860px] h-[1327px] rounded-[40px] mx-auto mt-[160px] bg-slate-400 grid grid-cols-2 gap-4 ">
      <div className="flex flex-col justify-center items-start ml-[110px] mr-[110px] ">
        <h1 className="text-[60px] font-extralight">Podcast</h1>
        <h3 className="capitalize font-extralight text-[30px] mb-[30px]">
          bu muhteşem müzede keşfedilecek o kadar çok sanat eseri var ki! Bu
          yüzden en iyi şekilde.
        </h3>

        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.{" "}
        </h5>

        <h6 className="uppercase mt-[120px]">spotify</h6>
      </div>

      <div className=" mt-[120px] grid grid-rows-3 grid-cols-4 gap-3">
        <div class="col-start-1 col-end-1 ">01</div>
        <div class=" row-span-2 col-start-2 col-end-3 ">03</div>
        <div class="row-span-1 col-start-3 col-end-5 ...">04</div>
        <div class=" col-start-1 col-end-1 row-span-2 ...">02</div>
        <div class="row-span-1 col-start-3 col-end-4 ...">04</div>
        <div class="row-span-1 col-start-4 col-end-5 ...">04</div>
        <div class="row-span-1 col-start-2 col-end-3 ...">05</div>
        <div class="row-span-1 col-start-3 col-end-5 ...">04</div>
        
      </div>



      <div class="col-start-1 col-end-7 m-6">Podcast</div>
    </div>
  );
};

export default Podcast;
