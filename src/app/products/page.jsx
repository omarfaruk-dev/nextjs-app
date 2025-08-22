

'use client'
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(data => setProducts(data.products || []));
  }, []);

  return (
    <section className="min-h-screen bg-white text-gray-900 px-4 py-12">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-gray-900 text-center">All Products</h1>
        <div className="text-center mb-8 text-gray-600">Total Products: {products.length}</div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length === 0 ? (
            <div className="text-center text-gray-600 col-span-full py-12">No products found.</div>
          ) : (
            products.map((product, index) => (
              <ProductCard 
                key={product._id} 
                product={product}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
