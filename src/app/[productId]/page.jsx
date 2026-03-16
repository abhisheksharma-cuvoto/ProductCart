import ProductDetailCard from "@/components/ProductDetailCard";

async function fetchProduct(params) {
  const { productId } = await params;
  return await (
    await fetch(`https://fakestoreapi.com/products/${productId}`, {
      cache: "no-store",
    })
  ).json();
}
export async function generateMetadata({ params }) {
  const product = await fetchProduct(params);
  console.log({ product });

  return {
    title: product.title,
    description: product.description,
  };
}

async function ProductDetails({ params }) {
  const data = await fetchProduct(params);

  return (
    <div className="flex justify-center">
      <main>
        <ProductDetailCard details={data} />
      </main>
    </div>
  );
}

export default ProductDetails;
