"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

// Provider - Wrapper
export function ProductProvider({ children }) {
  const [carts, setCarts] = useState(() => {
    return JSON.parse(localStorage.getItem("productCart")) || []; // issue: showing an error that localStorage is not defined
  });
  const [cartInfo, setCartInfo] = useState({
    totalPrice: 0,
    totalProducts: 0,
  });

  // Add products in cart
  function addToCart(id) {
    const alreadyPresent = carts.find((product) => product.id == id);
    console.log({ alreadyPresent });

    if (!alreadyPresent) {
      async function fetchProducts() {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();

        setCarts((prev) => [...prev, { ...data, quantity: 1 }]);
      }
      fetchProducts();
    } else {
      // Increase quantity if the product already exists in the cart
      setCarts((prev) =>
        prev.map((product) =>
          product.id == alreadyPresent.id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      );
    }
  }

  // remove products in cart
  function removeProduct(id) {
    const product = carts.find((product) => product.id === id);

    if (product.quantity !== 1) {
      setCarts((prev) =>
        prev.map((product) =>
          product.id == id
            ? { ...product, quantity: product.quantity - 1 }
            : product,
        ),
      );
    } else {
      setCarts((prev) => prev.filter((product) => product.id !== id));
    }
  }

  useEffect(() => {
    const totalProducts = carts.reduce(
      (total, product) => total + product.quantity,
      0,
    );

    const totalPrice = carts.reduce(
      (total, product) => total + product.price * product.quantity,
      0,
    );

    setCartInfo({ totalProducts, totalPrice });
    localStorage.setItem("productCart", JSON.stringify(carts));
  }, [carts]);

  return (
    <ProductContext.Provider
      value={{ carts, setCarts, cartInfo, addToCart, removeProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}
