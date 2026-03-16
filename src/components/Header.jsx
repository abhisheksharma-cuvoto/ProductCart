"use client";

import Link from "next/link";
import { useProduct } from "@/context/ProductContext";

function Header() {
  const { carts } = useProduct();

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/cart", name: "Cart", productCount: carts.length || 0 },
  ];

  return (
    <header className="w-full px-6 py-4 bg-zinc-900">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-3xl font-semibold">
          ProductShop
        </Link>
        <ul className="flex items-center gap-6 mr-10">
          {navLinks.map((nav) => (
            <li
              key={nav.name}
              className="text-xl hover:font-semibold hover:scale-105"
            >
              <Link href={nav.path}>
                {nav.name} {nav?.productCount && `(${nav.productCount})`}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
