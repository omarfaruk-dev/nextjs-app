"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Button from '../../components/Button';
import { HiShoppingCart, HiArrowLeft } from 'react-icons/hi';
import Image from 'next/image';

const ProductDetailsPage = () => {
    const params = useParams();
    const { id } = params;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('/data/products.json');
                const products = await response.json();
                const foundProduct = products.find(p => p.id === parseInt(id));
                
                if (foundProduct) {
                    setProduct(foundProduct);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setLoading(false);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading product details...</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">❌</div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h1>
                    <p className="text-gray-600 mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/products">
                        <Button variant="primary">
                            <HiArrowLeft className="mr-2" />
                            Back to Products
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <Link href="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
                    <span className="mx-2 text-gray-400">/</span>
                    <span className="text-gray-900">{product.name}</span>
                </nav>

                {/* Back Button */}
                <div className="mb-6">
                    <Link href="/products">
                        <Button variant="outline" size="sm">
                            <HiArrowLeft className="mr-2" />
                            Back to Products
                        </Button>
                    </Link>
                </div>

                {/* Product Details */}
                <div className="bg-base-100 rounded-lg shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div className="bg-white rounded-lg h-80 flex items-center justify-center overflow-hidden">
                            <Image 
                                src={product.image} 
                                alt={product.name}
                                width={400}
                                height={320}
                                className="w-full h-full object-contain"
                            />

                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            {/* Header */}
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                            </div>

                            {/* Price */}
                            <div className="text-3xl font-bold text-indigo-600">
                                ${product.price}
                            </div>

                            {/* Description */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                                <p className="text-gray-600 leading-relaxed">{product.description}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 pt-4">
                                <Button 
                                    variant="primary" 
                                    size="lg" 
                                    className="flex-1"
                                >
                                    <HiShoppingCart className="mr-2" />
                                    Add to Cart
                                </Button>
                                <Button variant="outline" size="lg">
                                    Add to Wishlist
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;