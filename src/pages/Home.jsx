import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ShopContext from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import { IoPersonSharp } from "react-icons/io5";

function Home() {
  const { topSelling } = useContext(ShopContext);

  return (
    <div>
      <div>
        <div className="bg-[url('/images/marketifystore.jpg')] h-[70vh] bg-no-repeat bg-cover flex flex-col justify-center items-center">
          <div className="text-center space-y-4 sm:w-full md:w-[59%]">
            <h1 className="text-4xl font-bold text-white">
              Discover luxury fashion - Shop the latest trends
            </h1>
            <Link to="/products" className="p-[10px] rounded-sm font-bold bg-amber-500 text-black">
              Shop Now
            </Link>
            <Link to="/profile" className="text-blue-500 p-2 text-lg font-bold"><IoPersonSharp className="size-10" /> </Link>
          </div>
        </div>
        <div>
          <h1 className="font-bold py-2 w-[90%] mx-auto">
            Top Selling Products
          </h1>
          <div className="flex overflow-x-auto hide-scrollbar w-full mt-4 gap-x-7 p-2">
            {topSelling.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
