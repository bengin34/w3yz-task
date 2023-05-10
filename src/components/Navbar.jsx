import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex-no-wrap relative flex w-full items-center justify-between py-2 h-[100px]  shadow-black/5 
 lg:justify-start lg:py-4"
      data-te-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* Hamburger button for mobile view */}

        {/* Collapsible navigation container */}
        <div className="visible flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
          {/* Logo and Name */}
          <div className="flex">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.79269 6.54123C0.79269 6.09586 0.437781 5.73477 0 5.73477V0C3.55094 0 6.42954 2.92861 6.42954 6.54123V18.4588C6.42954 18.9041 6.78444 19.2652 7.22222 19.2652C7.66001 19.2652 8.01491 18.9041 8.01491 18.4588V6.54123C8.01491 2.92861 10.8935 0 14.4445 0C17.9954 0 20.874 2.92861 20.874 6.54123V18.4588C20.874 18.9041 21.2289 19.2652 21.6667 19.2652C22.1044 19.2652 22.4594 18.9041 22.4594 18.4588V6.54123C22.4594 2.92861 25.3379 0 28.8888 0C32.4399 0 35.3185 2.92861 35.3185 6.54123V18.4588C35.3185 18.9041 35.6733 19.2652 36.1112 19.2652C36.5489 19.2652 36.9039 18.9041 36.9039 18.4588V6.54123C36.9039 2.92861 39.7824 0 43.3333 0V5.73477C42.8956 5.73477 42.5406 6.09586 42.5406 6.54123V18.4588C42.5406 22.0714 39.6621 25 36.1112 25C32.5601 25 29.6815 22.0714 29.6815 18.4588V6.54123C29.6815 6.09586 29.3267 5.73477 28.8888 5.73477C28.4511 5.73477 28.0961 6.09586 28.0961 6.54123V18.4588C28.0961 22.0714 25.2176 25 21.6667 25C18.1158 25 15.2372 22.0714 15.2372 18.4588V6.54123C15.2372 6.09586 14.8822 5.73477 14.4445 5.73477C14.0066 5.73477 13.6518 6.09586 13.6518 6.54123V18.4588C13.6518 22.0714 10.7732 25 7.22222 25C3.67128 25 0.79269 22.0714 0.79269 18.4588V6.54123Z"
                fill="#E3A22D"
              />
            </svg>
            <h3 className="mx-2 text-[27px]   ">HAPPY GALERİ</h3>
          </div>
        </div>
        {/* Right elements */}
        <div className="relative flex items-center">
          {/* Cart Icon */}
          <Link
            className="mr-4 text-[#67645E]  hover:text-neutral-700 focus:text-neutral-700 "
            href="#"
          >
            HAKKIMIZDA
          </Link>
          <Link
            className="mr-4 text-[#67645E] hover:text-neutral-700 focus:text-neutral-700 "
            href="#"
          >
            SIKÇA SORULAN SORULAR
          </Link>
          <Link
            className="mr-4 text-[#67645E] hover:text-neutral-700 focus:text-neutral-700 "
            href="#"
          >
            GALERİ
          </Link>
          <Link
            className="mr-4 text-[#67645E] hover:text-neutral-700 focus:text-neutral-700 "
            href="#"
          >
            İLETİŞİM
          </Link>
          <Link
            className="mr-4 text-[#67645E] hover:text-neutral-700 focus:text-neutral-700 "
            href="#"
          >
            GİRİŞ YAP
          </Link>
          <Link
            className="mr-4 text-[#67645E] hover:text-neutral-700 focus:text-neutral-700 "
            href="#"
          >
            ALIŞVERİŞ(0)
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
