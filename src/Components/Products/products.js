"use client";

import { useState, useEffect } from "react";
import ProductCard from "../productCard";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      setData(products);
    }
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
