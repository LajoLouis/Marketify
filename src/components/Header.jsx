import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCube } from "react-icons/fa";

function Header() {
  const [open, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between w-[90%] mx-auto py-[15px] border-b-[1px] border-solid border-amber-500/20">
        <h1 className="flex items-center gap-2 text-[20px] font-bold">
          <span>
            <FaCube className="text-yellow-500" />
          </span>
          Marketify
        </h1>
        <div className="flex  space-x-2 items-center">
          <RxAvatar />
          <GiHamburgerMenu onClick={() => setIsOpen(!open)} />
        </div>
      </div>
      <div>
        <div className={`w-[90%] mx-auto ${open ? "block" : "hidden"}`}>
          <p>Top Selling</p>
          <p>Bags</p>
          <p>Shirts</p>
          <p>Shoes</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
