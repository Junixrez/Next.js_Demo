import DetailsCard from "@/Components/DetailsCard";

async function getSingleProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    console.error("Fetch error:", res.status, res.statusText);
    throw new Error(`Failed to fetch product: ${res.status} ${res.statusText}`);
  }

  const product = await res.json();
  return product;
}

async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    console.error("Fetch error:", res.status, res.statusText);
    throw new Error(
      `Failed to fetch products: ${res.status} ${res.statusText}`
    );
  }

  const products = await res.json();
  return products;
}

export async function generateStaticParams() {
  try {
    const products = await getAllProducts();
    const ids = products.map((product) => {
      return {
        id: product.id.toString(),
      };
    });
    return ids;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);
  return <DetailsCard product={product} />;
}
