
import { FaNairaSign } from "react-icons/fa6";
import { Link } from "react-router-dom"
import CartItem from "../components/CartItem";
import { useContext } from "react";
import ShopContext from "../context/ShopContext";

function Cart() {
  const {cart} = useContext(ShopContext)
  return (
    <div>
      <div className="w-[90%] mx-auto my-2.5 ">
        <h1 className="font-bold text-2xl">Your Cart</h1>
        <div className="flex flex-col md:flex-row w-full justify-around">
          <div className="w-full md:w-[65%] space-y-2">{
            cart.map((item)=>(
              <CartItem product ={item} key={item.id}/>
            ))
          }</div>
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
