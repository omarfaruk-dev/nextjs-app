
'use client'
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function FeaturesProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts((data.products || []).slice(0, 4)));
  }, []);

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-gray-900 text-center">Featured Products</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {products.length === 0 ? (
            <div className="text-center text-gray-600 col-span-full py-8">No featured products found.</div>
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
