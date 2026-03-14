import Image from "next/image";
import { useProduct } from "@/context/ProductContext";

function CartItemCard({ cartItem }) {
  const { id, title, price, image, quantity } = cartItem;
  const { addToCart, removeProduct } = useProduct();

  return (
    <div
      key={id}
      className="p-4 flex justify-between items-center gap-4 border"
    >
      <div className="flex gap-5">
        <Image src={image} alt={title} width={50} height={50}></Image>
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <p>${price}</p>
        </div>
      </div>
      <div className="flex ">
        <button
          onClick={() => removeProduct(id)}
          className="p-3 border hover:bg-red-500 cursor-pointer"
        >
          -
        </button>
        <span className="p-3 border font-semibold bg-zinc-800">{quantity}</span>
        <button
          onClick={() => addToCart(id)}
          className="p-3 border hover:bg-blue-500 cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CartItemCard;
