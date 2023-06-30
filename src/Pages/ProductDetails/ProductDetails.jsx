import React from "react";
import { useProductById } from "../ProductsContext/ProductsContext";
import { GiRoundStar } from "react-icons/gi";
import Navbar from "../../Components/navbar/Navbar";
import { useAddToWishList } from "../WishListContext/WishListContext";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { ProductById } = useProductById();
  const { addWishList, addToWishList } = useAddToWishList();

  const handleWishList = () => {
    addWishList(ProductById);
    toast.success("Product Added to WishList");
  };

  const isInWishList = addToWishList.some((item) => item.id === ProductById.id);

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="md:min-h-[80vh] flex justify-center items-center pt-5 sm:pt-3 pb-2 relative px-24">
        <main className="grid grid-rows-1 sm:grid-cols-2 gap-2 sm:gap-10 ">
          <section className="relative p-7 bg-black/[0.075]  flex items-center justify-center rounded-lg">
            <img
              src={ProductById?.img}
              alt="pic"
              className="w-full object-contain max-w-xs"
            />
          </section>

          <section className="p-7 px-10 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-3 sm:gap-5 ">
            <div className="flex flex-col gap-2">
              <h1 className=" text-2xl sm:text-4xl font-bold">
                {ProductById?.name}
              </h1>
              <p className=" text-gray-600 text-sm sm:text-base">
                {ProductById?.description}
              </p>
              <div className="flex items-center gap-1">
                <GiRoundStar className=" text-yellow-400 mb-1" />

                <span className="text-xs text-gray-400">
                  ({ProductById?.rating}) Rating
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2  ">
              <h2 className="  text-lg font-semibold">About Product</h2>
              <ul className="flex gap-5">
                <div>
                  <li>
                    <span className="text-gray-500 text-sm">Brand: </span>
                    {ProductById?.brand}
                  </li>
                  <li>
                    <span className="text-gray-500 text-sm">Category: </span>
                    {ProductById?.category}
                  </li>
                </div>
                <div>
                  <li>
                    <span className="text-gray-500 text-sm">Gender: </span>
                    {ProductById?.gender}
                  </li>
                  <li>
                    <span className="text-gray-500 text-sm">Heavy: </span>
                    {ProductById?.weight}
                  </li>
                </div>
              </ul>
            </div>

            <div className="flex gap-2 items-center pb-10 sm:pb-0">
              Price:
              <span className="ms-1 text-xl sm:text-2xl text-amber-600">
                ₹{ProductById?.newPrice}
              </span>
              <span className="text-sm text-gray-600 line-through">
                ₹{ProductById?.oldPrice}
              </span>
            </div>
            <div className="w-full border-t flex justify-between items-center py-5 pt-6 px-4">
              <button className="border border-[--primary-text-color]  py-1.5 text-sm  rounded-full px-6 hover:bg-[--primary-text-color] hover:text-white transition hover:shadow-md">
                Add To Bag
              </button>
              <button
                onClick={() => handleWishList(ProductById.id)}
                className="btn-rounded-primary rounded-full flex items-center gap-2 text-sm "
              >
                {isInWishList ? (
                  <BsFillBookmarkHeartFill className="text-xl text-rose-600 hover:shadow-md transition" />
                ) : (
                  <BsBookmarkHeart className="text-xl hover:text-rose-600 hover:shadow-md transition" />
                )}
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProductDetails;