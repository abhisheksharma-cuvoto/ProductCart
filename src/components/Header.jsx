"use client";

import Link from "next/link";
import { useProduct } from "@/context/ProductContext";

function Header() {
  const { carts, cartInfo } = useProduct();

  return (
    <div className="h-[80px] flex justify-between items-center px-6 bg-zinc-900">
      <h1 className="text-3xl font-semibold">ProductShop</h1>
      <ul className="flex items-center gap-6 mr-10">
        <Link href={"/"}>
          <li className="text-xl hover:font-semibold hover:scale-105">Home</li>
        </Link>
        <Link href={"/cart"}>
          <li className="text-xl hover:font-semibold hover:scale-105">
            Cart ({cartInfo.totalProducts})
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
