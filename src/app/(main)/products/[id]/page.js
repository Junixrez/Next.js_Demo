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
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Fetch error:", res.status, res.statusText);
      throw new Error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
    }

    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error in getAllProducts:", error);
    return [];
  }
}

export async function generateStaticParams() {
  const products = await getAllProducts();

  if (products.length === 0) {
    console.warn("No products found for static generation");
    return [];
  }

  const ids = products.map((product) => {
    return {
      id: product.id.toString(),
    };
  });
  return ids;
}

export default async function ProductDetails({ params }) {
  try {
    const { id } = await params;
    const product = await getSingleProduct(id);
    return <DetailsCard product={product} />;
  } catch (error) {
    console.error("Error loading product:", error);
    return (
      <div className="max-w-3xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-2">
            Error Loading Product
          </h1>
          <p className="text-gray-700">
            Unable to load product details. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
