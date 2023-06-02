import React, { useContext } from "react";
//import product
import Product from "../components/Product";

//import hero
import Hero from '../components/Hero'
//product context
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  // products from Product Context
  const { products } = useContext(ProductContext);

  //men's and women's clothing only
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4
          max-w-sm mx-auto md:max-w-none md:mx-0 "
          >
            {filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
