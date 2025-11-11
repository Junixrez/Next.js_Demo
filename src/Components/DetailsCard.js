import React from "react";

export default function DetailsCard({ product }) {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden md:flex">
        <div className="md:w-1/3 flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-56 md:h-48 object-contain"
          />
        </div>

        <div className="md:w-2/3 p-6">
          <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>

          <div className="flex items-baseline gap-3 mb-3">
            <span className="text-2xl font-bold text-green-600">
              ${product.price}
            </span>
            <span className="text-sm text-gray-500">/ unit</span>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="mr-0.5">
                  {i < Math.round(product.rating?.rate ?? 0) ? "★" : "☆"}
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              ({product.rating?.count ?? 0} reviews)
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {product.description}
          </p>

          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Add to cart
            </button>
            <button className="px-4 py-2 border rounded text-gray-700 hover:bg-gray-100">
              View similar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
