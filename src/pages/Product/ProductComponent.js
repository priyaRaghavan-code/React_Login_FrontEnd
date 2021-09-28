import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

export const ProductComponent = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("products");
  const products = useSelector((state) => state.products.products);

  const renderList = products.map((product) => {
    const { id, name, price, description, image } = product;
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
    return (
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg space-y-10 mt-14"
        key={id}
      >
        <div>
          <header>
            <button class="bg-blue-500 ml-20">Cart {cart.length}</button>
          </header>
        </div>
        <Link to={`/product/${id}`}>
          <img
            className="w-sm object-cover h-48 align-middle"
            src={image}
            alt="Display"
          />

          <div className="">{name}</div>
          <div>Rs {price}</div>
          {/* <div>{description}</div> */}
        </Link>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded right-auto"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    );
  });
  //   const { id, name } = products[0];
  return <>{renderList}</>;
};
