import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 w-full p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    Next.js Product App
                </div>
                <div className="space-x-4">
                    <Link href="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link href="/products" className="text-white hover:text-gray-300">Products</Link>
                    <Link href="/login" className="text-white hover:text-gray-300">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;