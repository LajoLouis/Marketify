import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom"

function Cart() {
  return (
    <div>
      <div className="w-[90%] mx-auto my-2.5 ">
        <h1 className="font-bold text-2xl">Your Cart</h1>
        <div className="flex flex-col md:flex-row w-full justify-around">
          <div className="bg-white border-[1px] border-stone-200 rounded-sm text-stone-600 w-full md:w-[65%] h-[100px]">
            <div className="flex">
              <img src="" alt="" className="w-[20%]" />
              <div className="w-[50%]">
                <p className="font-bold text-[15px] text-stone-800">Name</p>
                <p>Type</p>
                <p className="font-bold text-[15px] text-stone-800">Price</p>
              </div>
              <div className="w-[30%] flex items-center justify-around">
                <div className="flex items-center justify-around w-[65%] border-[1px] border-stone-200 rounded-sm text-[10px] p-[5px]">
                  <FaMinus />
                  <span>1</span>
                  <FaPlus />
                </div>
                <FaTrash />
              </div>
            </div>
          </div>
          <div className="my-[20px] py-[20px] bg-white w-full md:w-[30%]">
            <div className="w-[90%] mx-auto space-y-2">
              <h1 className="text-stone-800 font-bold">Order Summary</h1>
              <p className="flex justify-between text-stone-500">
                SubTotal
                <span className="flex items-center text-black">
                  <FaNairaSign /> 350
                </span>
              </p>
              <p className="flex justify-between text-stone-500">
                Delivery
                <span className="flex items-center text-black">
                  <FaNairaSign /> 100
                </span>
              </p>
              <p className="flex justify-between text-stone-500">
                Taxes
                <span className="flex items-center text-black">
                  <FaNairaSign /> 25
                </span>
              </p>
              <hr className="text-stone-200" />
              <p className="text-stone-700 font-bold flex justify-between">
                Total{" "}
                <span className="flex items-center text-black">
                  <FaNairaSign /> 450
                </span>
              </p>
              <Link to="/checkout">
                <button className="bg-amber-500 w-[90%] mx-auto p-[10px] rounded-sm text-black font-bold md:cursor-pointer">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
