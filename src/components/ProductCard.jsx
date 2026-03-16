"use client";

import Image from "next/image";
import Link from "next/link";
import { useProduct } from "@/context/ProductContext";

function ProductCard({ data }) {
  const { id, title, price, description, category, image } = data;
  const { addToCart } = useProduct();

  return (
    <div className="flex gap-6 p-5 border overflow-auto">
      {/* left container for image */}

      <Link href={`/${id}`}>
        <div className="relative w-[200px] h-[200px] hover:scale-105 cursor-pointer">
          <Image src={image} alt={title} fill style={{ objectFit: "cover" }} />
        </div>
      </Link>

      {/* right container for product details */}
      <div className="flex flex-col justify-between">
        {/* title */}
        <h1 className="text-xl font-semibold">{title}</h1>
        <hr />

        {/* description */}
        <div>
          <p className="font-semibold">Description</p>
          <p>{description}</p>
        </div>

        {/* category */}
        <div>
          <p className="font-semibold">
            Category: <span className="font-normal">{category}</span>
          </p>
        </div>

        {/* price & cart button */}
        <div className="flex items-center justify-between">
          <p className="text-3xl text-zinc-300 font-semibold">${price}</p>
          <button
            onClick={() => addToCart(id)}
            className="font-semibold px-4 py-2 border border-yellow-400 hover:bg-yellow-900/50 cursor-pointer"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
