import React, { useContext } from "react";
import { FaNairaSign } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ShopContext from "../context/ShopContext";

function ProductDetail() {
    const param = useParams()
    const productId = param.id
    console.log(productId);
    
    const {products} = useContext(ShopContext)
    console.log(products);
    
    const specificProduct = products.find((item) => (item.id) == (productId))
    console.log(specificProduct);
  return (
    <>
      <div className="py-[20px] font-semibold">
        <p className="w-[80%] mx-auto">{specificProduct?.type}</p>
        <div className="w-[80%] mx-auto space-y-5 md:flex md:h-[70vh] md:justify-between">
          <div className={`md:w-[45%]`}>
            <img src={specificProduct?.img} alt="" className="w-full"/>
          </div>
          <div className="md:w-[45%] md:flex md:flex-col md:justify-center space-y-2">
            <h1 className="font-bold text-3xl">{specificProduct?.name}</h1>
            <p className="text-stone-500">{specificProduct?.description}</p>
            <p className="text-amber-500 font-bold flex items-center"><FaNairaSign />{specificProduct?.price}</p>
            <button className="w-full py-[15px] bg-amber-500 text-black rounded-sm font-semibold">Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
