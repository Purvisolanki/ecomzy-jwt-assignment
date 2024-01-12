import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    console.log("clikc hua");
      dispatch(add(post));
      toast.success("Item added to cart");
  }

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }

  return (
    <div className="flex flex-col items-center justify-between
    
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl 
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
    hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]
    ">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
      </div>


      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>

      <div className="h-[180px] ">
        <img src={post.thumbnail} className="h-full w-full " />
      </div>


      <div className="flex items-center gap-11 justify-between">
          <div>
            <p className="text-green-600 font-semibold">₹{post.price}</p>
          </div>

          {
            cart.some((p) => p.id === post.id) ?
            (<button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
            text-[13px] p-1 px-3 uppercase
            hover:bg-gray-700
            hover:text-white
            transition duration-300 ease-in "
            onClick={removeFromCart}>
              Remove Item
            </button>) :

            (<button
              className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
              text-[13px] p-1 px-3 uppercase
              hover:bg-gray-700
              hover:text-white
              transition duration-300 ease-in "
              onClick={addToCart}>
              Add To Cart
            </button>)
          }
      </div>
            
    </div>
  );
};

export default Product;
