import React from "react";
import { socialIcons } from "../helper/data";

const Footer = () => {
  return (
    <div className="w-[1920px] h-[376px] bg-[#250400] absolute overflow-hidden ">
      <div className=" mt-[64px] grid grid-rows-2 text-white gap-3 mx-[160px] ">
        <div className="grid grid-cols-5">
          <div className="col-span-3 grid grid-cols-7 gap-[24px]">
            <div className="col-span-3 h-[210px] ">
              <h3 className="mb-[20px] text-[22px] font-montserrat tracking-[1.3px] ">
                HAKKIMIZDA
              </h3>
              <ul className="flex flex-col font-roboto text-[14px] leading-[22px] justify-between items-start gap-5">
                <li>Galeri Hakkında</li>
                <li>Ziyaret Kuralları</li>
                <li>Bizi Desteklemek İsteyenler Için</li>
              </ul>
            </div>
            <div className="col-span-2  ">
              <h3 className="mb-[20px] text-[22px] font-montserrat tracking-[1.3px] ">
                WEB SITEMIZ
              </h3>
              <ul className="flex flex-col font-roboto text-[14px] leading-[22px] justify-between items-start gap-5">
                <li>Online Bilet Al</li>
                <li>Mağaza</li>
                <li>Koleksiyonlar</li>
              </ul>
            </div>
            <div className="col-span-2">
              <h3 className="mb-[20px] font-montserrat text-[22px] tracking-[1.3px] ">
                CONTACT
              </h3>
              <ul className="flex flex-col font-roboto text-[14px] leading-[22px] justify-between items-start gap-5">
                <li>Sıkça Sorulan Sorular</li>
                <li>Bizimle İletişime Geç</li>
                <li>bize fikir verin</li>
                <li>Kariyer</li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 border-l-2 border-l-[#333333] w-[640px] h-[193px] ">
            <div className="ml-[130px] h-[94px] flex flex-col">
              <div className="flex">
                <h2 className="uppercase text-[14px] font-montserrat leading-[22px] w-1/5">
                  Bizi takip et
                </h2>
                <div className="flex justify-start items-end py-5 w-4/5 relative">
                  <div className="absolute bottom-7 left-0 right-0 border-t-2 border-t-[#333333]"></div>
                </div>
              </div>

              <div className="flex flex-row gap-6 justify-start items-center ">
                {socialIcons.map((item, index) => (
                  <div className="mt-6" key={index}>
                    <img
                      style={{ width: "48px", height: "48px" }}
                      className="border-2 border-[#333333] p-3 rounded-full "
                      src={item.img}
                      alt=""
                    />{" "}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[96px] text-[#C6C6C6] font-roboto flex flex-row justify-center items-center border-t-2 border-t-[#333333] leading-[18px] text-[12px] gap-6 ">
          <h2>Legal Notice</h2>
          <h2>Privacy Policy</h2>
          <h2>Cookies</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
