import React from "react";

function Home() {
  return (
    <div>
      <div>
        <div className="bg-[url('/images/marketifystore.jpg')] h-[70vh] bg-no-repeat bg-cover flex flex-col justify-center items-center">
          <div className="text-center space-y-2 sm:w-full md:w-[59%]">
            <h1 className="text-4xl font-bold text-white">
              Discover luxury fashion - Shop the latest trends
            </h1>
            <button className="p-[10px] rounded-sm font-bold bg-amber-500 text-black">
              Shop Now
            </button>
          </div>
        </div>
        <div>
          <p>Testing</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
