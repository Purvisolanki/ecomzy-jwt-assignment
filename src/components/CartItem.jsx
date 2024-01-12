import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";




const CartItem = ({item, index}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
      dispatch(remove(item.id));
      toast.error("Item removed");
  }

  return (
    <div className="flex flex-col justify-center mb-10 ">
        <div className="flex w-full px-8 space-x-4 lg:px-8 py-10 border-b-2 border-slate-900 md:px-32"  >
            <div className="flex justify-center items-center  h-[180px] w-1/3 ">
                <img src={item.thumbnail} className="h-full"/>
            </div>

            <div className="flex flex-col justify-evenly w-2/3">
              <h1 className="text-gray-700 font-bold text-xl ">{item.title}</h1>
              <p className="font-normal">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>

              <div className="flex justify-between">
                <p className="text-green-600 font-semibold text-lg">₹{item.price}</p>
                <div 
                className="bg-red-300 text-xs w-10 h-10 flex
                justify-center items-center rounded-full text-red"
                onClick={removeFromCart}>
                  <FcDeleteDatabase className="text-red" />
                </div>
              </div>
            </div>

        </div>  

    </div>
  );
};

export default CartItem;
