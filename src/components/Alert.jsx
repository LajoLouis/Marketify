import React from "react";
import { useContext } from "react";
import Shopcontext from "../context/ShopContext"

function Alert() {
  const {alertMessage} = useContext(Shopcontext)
  
  return (
    <div>
      {alertMessage.show && (
        <div className={`w-[80%] md:w-[50%] p-[10px] fixed top-0 right-0 z-10 rounded-l-[2px] border-b-8 bg-white ${alertMessage.type === "success" ? "border-green-400" : "border-red-400"}`}>
          {alertMessage.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
