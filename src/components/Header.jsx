import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";

function Header() {
  const [open, setIsOpen] = useState(false);
  const desktopOptions = (
    <div className="flex justify-around w-full">
      <p>Top Selling</p>
          <p>Bags</p>
          <p>Shirts</p>
          <p>Shoes</p>
          <Link to="/profile">Profile</Link>
          <Link className="flex items-center" to={`/cart`}><LuShoppingCart /><sup className=""><span className="bg-amber-600 text-white p-[3px] rounded-full">2</span></sup></Link>
    </div>
  )

  return (
    <div>
      <div className="flex justify-between w-[90%] mx-auto py-[15px] border-b-[1px] border-solid border-amber-500/20">
        <h1 className="flex items-center gap-2 text-[20px] font-bold w-[20%]">
          <span>
            <FaCube className="text-yellow-500" />
          </span>
          <Link to="/">Marketify</Link>
        </h1>
        <div className="hidden md:flex w-[80%]">
          {
            desktopOptions
          }
        </div>
        <div className="flex md:hidden space-x-2 items-center">
          <Link to="/profile" className="text-blue-500 p-2 text-lg font-bold"><RxAvatar /> </Link>
          <GiHamburgerMenu onClick={() => setIsOpen(!open)} />
        </div>
      </div>
      <div>
        <div className={`w-[90%] space-y-3 mx-auto ${open ? "h-full md:hidden" : "h-0"} overflow-hidden transition-all duration-500 ease-in-out`}>
          <p>Top Selling</p>
          <p>Bags</p>
          <p>Shirts</p>
          <p>Shoes</p>
          <Link to="/cart"><LuShoppingCart /></Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
