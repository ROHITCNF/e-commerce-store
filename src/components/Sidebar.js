import React, { useContext } from "react";
import CartItem from "./CartItem.js";

//Link
import { Link } from "react-router-dom";

//icons
import { FiTrash2 } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";

//sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

//cart context
import { CartContext } from "../contexts/CartContext.js";

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemCount, totalPrice } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full 
  shadow-2x1 md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="text-sm font-semibold">SHOPPING BAG ({itemCount})</div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div
        className="flex flex-col gap-y-2 h-[520px] lg:h-[500px]
       overflow-y-auto overflow-x-hidden border-b"
      >
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center">
          {/* Total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>₹ {totalPrice}
          </div>
          {/* Clear cart icon */}
          <div className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
            <FiTrash2 onClick={() => clearCart()} />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-4 justify-center 
        items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to="/"
          className="bg-primary flex p-4 justify-center 
        items-center text-white w-full font-medium"
        >
          Checkout Cart
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
