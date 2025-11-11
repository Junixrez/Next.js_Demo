import DetailsCard from "@/Components/DetailsCard";

async function getSingleProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();
  return product;
}
async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return products;
}
export async function generateStaticParams() {
  const products = await getAllProducts();
  const ids = products.map((product) => {
    return {
      id: product.id.toString(),
    };
  });
  return ids;
}

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);
  return <DetailsCard product={product} />;
}
