import React from "react";

async function fetchData() {
  const res = await fetch("https://6912588152a60f10c8216486.mockapi.io/name", {
    next: { revalidate: 5 },
  });
  
  if (!res.ok) {
    console.error('Fetch error:', res.status, await res.text());
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }
  
  return await res.json();
}

export default async function ISR() {
  const names = await fetchData();
  const timestamp = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-red-50 p-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Incremental Static Regeneration (ISR)
          </h1>
          <p className="text-lg text-gray-600">
            Data revalidated every 5 seconds
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            Revalidate: 5s
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Last generated: {timestamp}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {names.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded">
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
