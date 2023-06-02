import React, { useContext } from "react";

//useParams
import { useParams } from "react-router-dom";

//cartContext
import { CartContext } from "../contexts/CartContext";

//product context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  //get the id used in params
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  //get single product related  to corresponding id
  const product = products.find((item) => {
    return item.id == parseInt(id);
  });

  //product not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading ...
      </section>
    );
  }

  //destructure
  const { image, category, title, price, description } = product;
  // console.log(product);

  return (
    <section className="pt-32 pb-12 lg:py-32  h-screen flex items-center">
      <div className="container mx-auto">
        {/* image text wrap */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              ₹{price}
            </div>
            <p className="mb-8">{description}</p>
            <button onClick={() => addToCart(product , product.id)} className="bg-primary text-white py-4 px-8">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
