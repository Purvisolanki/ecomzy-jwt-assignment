import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

useEffect(() => {
    setTotalAmount( cart.reduce( (acc,curr) => acc + curr.price, 0) );
}, [cart])


  return (
    <div className="flex jusify-center items-center max-w-6xl mx-auto flex-wrap ">
      {
        cart.length > 0 ? 
        (<div className="flex w-full gap-16 flex-wrap ">
            <div className="lg:w-1/2   xs:w-full sm:w-full  ">
              {
                cart.map((item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index}/>
                })
              }
            </div>
<div className="lg:w-1/3 xs:w-4/5 xs:mx-auto mt-6 right-40 p-5 lg:fixed">

          <div className="lg:w-full flex flex-col justify-between xs:w-full ">
            <div className="">
              <div className="text-green-800 font-bold">Your Cart</div>
              <div className="text-green-800 text font-bold text-5xl uppercase">Summary</div>

              <p>
                <span className="text-gray-700 font-semibold text-lg ">Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="pt-60">
              <p  className="text-gray-700 font-semibold text-lg">Total Amount: {totalAmount}</p>
              <button
              className="bg-green-800 w-full py-4 text-white text-xl font-bold rounded-lg"
              >Checkout Now</button>
            </div>

                </div>
                </div>
            
        </div>) :

        (<div className="flex justify-center items-center w-full h-screen">
          <div className="flex justify-center items-center flex-col gap-2">
          <h1>Cart Empty</h1>
          <NavLink to="/">
              <button className="bg-green-600 py-2 px-5 rounded-lg">Shop Now</button>
          </NavLink>
        </div>
        </div>)
        
      }
    </div>
  );
};

export default Cart;
