import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { FaNairaSign } from "react-icons/fa6";

function CartItem({product}) {
    console.log(product);
    
  return (
    <div className="bg-white border-[1px] border-stone-200 rounded-sm text-stone-600  h-[100px] ">
      <div className="flex my-auto h-full justify-around space-x-1">
        <img src={product?.img} alt="" className="w-[20%]" />
        <div className="w-[50%] flex flex-col justify-center">
          <p className="font-bold text-[15px] text-stone-800">Name: {product?.name}</p>
          <p>Type: {product?.type}</p>
          <p className="font-bold text-[15px] text-stone-800 flex items-center">Price: <FaNairaSign/>{product?.price}</p>
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
  );
}

export default CartItem;
