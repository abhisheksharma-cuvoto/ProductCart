import ProductDetailCard from "@/components/ProductDetailCard";

async function ProductDetails({ params }) {
  const { productId } = await params;
  const data = await (
    await fetch(`https://fakestoreapi.com/products/${productId}`, {
      cache: "no-store",
    })
  ).json();

  return (
    <div className="flex justify-center">
      <main>
        <ProductDetailCard details={data} />
      </main>
    </div>
  );
}

export default ProductDetails;
