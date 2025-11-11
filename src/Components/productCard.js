import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="h-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">
      <div className="h-48 w-full flex items-center justify-center p-4 bg-gray-50 rounded-t-lg">
        <img
          className="h-full w-auto object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="p-5 flex flex-col grow">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 h-14">
          {product.title}
        </h5>
        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 line-clamp-3 grow">
          {product.description}
        </p>
        <div className="flex flex-col xs:flex-row items-center justify-between gap-3 mt-auto">
          <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <Link
            href={`/products/${product.id}`}
            className="w-full xs:w-auto inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
          >
            Details
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
