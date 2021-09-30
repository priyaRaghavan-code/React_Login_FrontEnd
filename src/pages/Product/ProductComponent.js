import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

export const ProductComponent = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const products = useSelector((state) => state.products.products);

  const addToCart = (product) => {
    let itemInCart = cart.find((item) => product.name === item.name);
    let newCart = [...cart];
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };

  const renderProducts = () => (
    <>
      <h1>Products</h1>
      {products.map((product) => (
        <div className="products">
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg mt-14"
            // key={product.id}
          >
            {/* <Link to={`/product/${product.id}`}> */}
            <img
              className="w-sm object-cover h-48 ml-28"
              src={product.image}
              alt="Display"
            />

            <div className="ml-24 font-bold items-center">{product.name}</div>
            <div className="ml-24 font-bold items-center">
              Rs {product.price}
            </div>
            {/* <div>{description}</div> */}
            {/* </Link> */}
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold ml-28 py-2 px-4 border border-red-700 rounded right-auto mb-8"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );

  const renderCart = () => (
    <>
      <h1>Cart Products</h1>
      {cart.length > 0 && (
        <button
          class="bg-yellow-500 hover:bg-yellow-700 text-white  mt-9 ml-96 font-bold py-2 px-4 rounded"
          onClick={() => clearCart()}
        >
          Clear Cart
        </button>
      )}
      {cart.map((product) => (
        <div className="products">
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg mt-14"
            // key={product.id}
          >
            {/* <Link to={`/product/${product.id}`}> */}
            <img
              className="w-sm object-cover h-48 ml-28"
              src={product.image}
              alt="Display"
            />
            <div className="ml-24 font-bold items-center">{product.name}</div>
            <div className="ml-24 font-bold items-center">
              Rs {product.price}
            </div>
            <input
              value={product.quantity}
              onChange={(e) => setQuantity(product, e.target.value)}
            />

            {/* <div>{description}</div> */}
            {/* </Link> */}
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-28 py-2 px-4 border border-red-700 rounded right-auto mb-8"
              onClick={() => removeFromCart(product)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="font-bold">Total Cost:Rs{getTotalSum()}</div>
    </>
  );

  // const renderProducts = products.map((product) => {
  //   const { id, name, price, description, image } = product;
  //   const addToCart = (product) => {
  //     setCart([...cart, product]);
  //   };
  //   return (
  //     <div
  //       className="max-w-sm rounded overflow-hidden shadow-lg space-y-10 mt-14"
  //       key={id}
  //     >
  //       <Link to={`/product/${id}`}>
  //         <img
  //           className="w-sm object-cover h-48 align-middle"
  //           src={image}
  //           alt="Display"
  //         />

  //         <div className="">{name}</div>
  //         <div>Rs {price}</div>
  //         {/* <div>{description}</div> */}
  //       </Link>
  //       <button
  //         class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded right-auto"
  //         onClick={() => addToCart(product)}
  //       >
  //         Add to Cart
  //       </button>
  //     </div>
  //   );
  // });
  // return <>{renderList}</>;

  return (
    <div>
      <div>
        <header>
          <button
            class="bg-yellow-500 hover:bg-yellow-700 text-white  mt-9 ml-96 font-bold py-2 px-4 rounded"
            onClick={() => navigateTo(PAGE_CART)}
          >
            Cart ({getCartTotal()})
          </button>
          <button
            class="bg-yellow-500 hover:bg-yellow-700 text-white  mt-9 ml-96 font-bold py-2 px-4 rounded"
            onClick={() => navigateTo(PAGE_PRODUCTS)}
          >
            View Products
          </button>
        </header>
        {page === PAGE_PRODUCTS && renderProducts()}
        {page === PAGE_CART && renderCart()}
      </div>
    </div>
  );
};
