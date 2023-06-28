import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import ShoppingProdCard from "./ShoppingProdCard";
import { Glasses } from "./products";

const ShoppingProducts = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const toggleShowArrow = () => {
      if (window.scrollY > 300) {
        setShowScrollArrow(true);
      } else {
        setShowScrollArrow(false);
      }
    };
    window.addEventListener("scroll", toggleShowArrow);

    return () => {
      window.removeEventListener("scroll", toggleShowArrow);
    };
  }, []);
  return (
    <>
      <div>
        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {Glasses.map((glasses) => {
            return <ShoppingProdCard key={glasses.id} data={glasses}/>;
          })}
        </div>

        <button
          className={` fixed bottom-10 bg-gray-800 right-2 p-2 rounded-full text-xl shadow-2xl transition-all delay-100 ease-in-out ${
            showScrollArrow ? "block" : "hidden"
          }`}
          onClick={scrollToTop}
        >
          <MdKeyboardArrowUp className=" text-white" />
        </button>
      </div>
    </>
  );
};

export default ShoppingProducts;