"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./Button";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 w-full p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    NextProduct
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="text-white hover:text-gray-300 transition-colors">Home</Link>
                    <Link href="/products" className="text-white hover:text-gray-300 transition-colors">Products</Link>
                    <Link href="/login">
                        <Button variant="primary" size="sm">
                            Login
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-gray-300 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-700 mt-2 rounded-lg mx-4">
                    <div className="px-4 py-2 space-y-2">
                        <Link 
                            href="/" 
                            className="block text-white hover:text-gray-300 py-2 px-3 rounded transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            href="/products" 
                            className="block text-white hover:text-gray-300 py-2 px-3 rounded transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Products
                        </Link>
                        <div className="pt-2">
                            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                                <Button variant="primary" size="sm" fullWidth>
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;