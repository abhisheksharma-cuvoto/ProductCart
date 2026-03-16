"use client";

import { useProduct } from "@/context/ProductContext";
import Image from "next/image";
import Link from "next/link";

function ProductDetailCard({ details }) {
  const { id, title, price, description, category, image } = details;
  const { addToCart } = useProduct();

  return (
    <div className="w-[400px] flex flex-col gap-2 p-4 border m-10 sm:w-[500px]">
      <div>
        <h1 className="text-3xl font-semibold">{title}</h1>
        <h2 className="text-xl">
          Category: {category.charAt(0).toUpperCase() + category.slice(1)}
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <Image src={image} alt={title} width={300} height={300}></Image>
      </div>
      <div>
        <h3 className="text-lg font-medium">Description:</h3>
        <p>{description}</p>
      </div>
      <p className="text-4xl font-semibold text-zinc-300">${price}</p>
      <div className="flex items-center justify-between gap-5 pt-4">
        <button
          onClick={() => addToCart(id)}
          className="w-full flex-1 font-semibold px-4 py-2 border border-yellow-400 hover:bg-yellow-900/50 cursor-pointer"
        >
          Add Cart
        </button>
        <Link
          href={"/"}
          className="w-full flex-1 text-center font-semibold px-4 py-2 border hover:bg-zinc-900 cursor-pointer"
        >
          Go back
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailCard;
