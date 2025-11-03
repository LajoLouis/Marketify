import React from "react";

function TopSellingCard({product}) {
  return (
    <div className=" h-[400px] rounded-3xl overflow-hidden w-[90%] mx-auto md:w-[22%] flex-shrink-0 transition hover:scale-110 cursor-pointer">
      <img
        src= { `${product.img}`}
        alt=""
        className="h-[80%] w-full rounded-xl"
      />
      <p className="font-bold text-xl">{product.name}</p>
      <p>#{product.price}</p>
    </div>
  );
}

export default TopSellingCard;