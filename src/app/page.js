import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  const productData = await res.json();

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center gap-10 py-10">
        <h1 className="text-4xl font-semibold text-blue-400 ">Products</h1>
        <div className="grid grid-cols-1 gap-5 px-10 xl:grid-cols-2">
          {productData.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
