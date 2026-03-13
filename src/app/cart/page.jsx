"use client";

import CartItemCard from "@/components/CartItemCard";
import { useProduct } from "@/context/ProductContext";
import Image from "next/image";

function CartPage() {
  const { carts, cartInfo } = useProduct();

  return (
    <div className="flex justify-center py-10">
      <div>
        <h1 className="text-4xl font-semibold text-blue-400 text-center">
          Cart
        </h1>
        <div className="flex text-xl justify-center items-center gap-10 py-2">
          <p>Total Product: {cartInfo.totalProducts}</p>
          <p>
            Total Price:{" "}
            {cartInfo.totalPrice > 0 ? cartInfo.totalPrice.toFixed(2) : 0}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 px-10 xl:grid-cols-2">
          {carts.map((cart) => (
            <CartItemCard key={cart.id} cartItem={cart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
