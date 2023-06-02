import React, { useContext, useState } from "react";

//import link
import { Link } from "react-router-dom";

//Sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

//cart context
import { CartContext } from "../contexts/CartContext";

//icons
import { BsBag } from "react-icons/bs";

//logo
import Logo from "../img/logo.svg";
import { useEffect } from "react";

const Header = () => {
  //header state
  const [isActive, setIsActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemCount } = useContext(CartContext);

  //event listener

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      // className='bg-red-400'
      className={`${
        isActive ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        {/* Cart */}
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div
            className="bg-red-500 absolute -right-2 -bottom-2
         text-[12px] w-[18px] h-[18px] text-white
         rounded-full flex justify-center items-center"
          >
            {itemCount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
