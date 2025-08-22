import React from 'react';
import Link from 'next/link';
import Button from './Button';
import Image from 'next/image';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative h-40 bg-base-100 border rounded-md overflow-hidden">
                <Image 
                    src={product.image} 
                    alt={product.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-contain"
                />

            </div>

            {/* Product Info */}
            <div className="p-4">
                {/* Product Name */}
                <h3 className="font-semibold text-gray-900 mb-2 text-lg line-clamp-2">
                    {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                </p>

                {/* Price */}
                <div className="text-xl font-bold text-indigo-600 mb-4">
                    ${product.price}
                </div>

                {/* Details Button */}
                <Link href={`/products/${product.id}`}>
                    <Button variant="primary" size="sm" fullWidth>
                        View Details
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
