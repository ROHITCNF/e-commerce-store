import React, { useContext } from "react";

//cart context
import { CartContext } from "../contexts/CartContext";

import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

const Product = ({ product }) => {
  //destructuring the product
  const { id, image, category, title, price } = product;

  //using cart context
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            {/* buttons */}
            <div
              className="absolute top-6 right-11 group-hover:right-5  p-2 
            flex flex-col items-center justify-center gap-y-2
            opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <button onClick={() => addToCart(product,id)}>
                <div className="flex justify-center items-center text-white h-12 w-12 bg-red-500">
                  <BsPlus className="text-3x1" />
                </div>
              </button>

              <Link
                to={`/product/${id}`}
                className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
              >
                <BsEyeFill />
              </Link>
            </div>
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Category , title  and Price */}
      <div>
        <div className="text-sm capitalize text-gray-500">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>

        <h2 className="font-semibold">{price}</h2>
      </div>
    </div>
  );
};

export default Product;
