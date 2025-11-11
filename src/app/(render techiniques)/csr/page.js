"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function CSR() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const res = await fetch(
        "https://6912588152a60f10c8216486.mockapi.io/name"
      );
      const names = await res.json();
      setData(names);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-blue-50 p-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Client-Side Rendering (CSR)
          </h1>
          <p className="text-lg text-gray-600">
            Data fetched on the client after page load
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
            Rendered: Client-Side
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading data...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    ID: {item.id}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
