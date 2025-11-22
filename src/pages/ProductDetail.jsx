import React, { useContext } from "react";
import { FaNairaSign } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import RelatedProducts from "../components/RelatedProducts";

function ProductDetail() {
    const param = useParams()
    const productId = param.id
    console.log(productId);
    
    const {products} = useContext(ShopContext)
    console.log(products);
    
    const specificProduct = products.find((item) => (item.id) == (productId))
    console.log(specificProduct);
  return (
    <div className="w-full">
      {/* Main Product Section */}
      <div className="py-8 font-semibold">
        <p className="w-[90%] mx-auto mb-4">{specificProduct?.type}</p>
        <div className="w-[90%] mx-auto space-y-5 md:flex md:gap-8 md:items-center">
          <div className="md:w-[45%]">
            <img src={specificProduct?.img} alt="" className="w-full"/>
          </div>
          <div className="md:w-[45%] space-y-4">
            <h1 className="font-bold text-3xl">{specificProduct?.name}</h1>
            <p className="text-stone-500">{specificProduct?.description}</p>
            <p className="text-amber-500 font-bold flex items-center"><FaNairaSign />{specificProduct?.price}</p>
            <button className="w-full py-3 bg-amber-500 text-black rounded-sm font-semibold">Add to cart</button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <RelatedProducts currentProductId={specificProduct?.id} currentProductType={specificProduct?.type} />
    </div>
  );
}

export default ProductDetail;
