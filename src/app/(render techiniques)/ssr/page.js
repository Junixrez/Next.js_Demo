import React from "react";

async function fetchData() {
  const res = await fetch("https://6912588152a60f10c8216486.mockapi.io/name", {
    cache: "no-store",
  });
  
  if (!res.ok) {
    console.error('Fetch error:', res.status, await res.text());
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

export default async function SSR() {
  const names = await fetchData();
  const timestamp = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-teal-50 p-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Server-Side Rendering (SSR)
          </h1>
          <p className="text-lg text-gray-600">
            Data fetched on the server on every request
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            Rendered: Server-Side
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Last rendered: {timestamp}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {names.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                  ID: {item.id}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
