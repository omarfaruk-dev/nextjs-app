import React from 'react';
import Link from 'next/link';
import Button from './Button';

const Hero = () => {
    return (
        <div className="hero bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white py-20">
            <div className="container mx-auto text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    Next Product
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-indigo-100">
                    A modern, scalable e-commerce platform built with Next.js 15, React 19, and Tailwind CSS
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/products">
                        <Button 
                            variant="hero-primary" 
                            size="lg"
                        >
                            Explore Products
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button 
                            variant="hero-outline" 
                            size="lg"
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Fast Performance</h3>
                        <p className="text-indigo-100">Built with Next.js 15 for optimal speed and SEO</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Modern UI/UX</h3>
                        <p className="text-indigo-100">Beautiful design with Tailwind CSS and React Icons</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Responsive Design</h3>
                        <p className="text-indigo-100">Works perfectly on all devices and screen sizes</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
