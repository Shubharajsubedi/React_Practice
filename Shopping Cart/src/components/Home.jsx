

import { useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {

    // Store the search text
    const [search, setSearch] = useState("")


    // Categories
    const categories = [
        {
            name: "Electronics",
            icon: "💻",
            description: "Laptops, phones and gadgets"
        },
        {
            name: "Fashion",
            icon: "👕",
            description: "Clothes and accessories"
        },
        {
            name: "Shoes",
            icon: "👟",
            description: "Shoes for every occasion"
        },
        {
            name: "Accessories",
            icon: "🎧",
            description: "Headphones, watches and more"
        }
    ]


    // Featured products
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 2500,
            icon: "🎧"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 4500,
            icon: "⌚"
        },
        {
            id: 3,
            name: "Running Shoes",
            price: 3500,
            icon: "👟"
        },
        {
            id: 4,
            name: "Laptop",
            price: 85000,
            icon: "💻"
        }
    ]


    return (

        <div className="min-h-screen bg-gray-50">


            {/* ================= HERO SECTION ================= */}

            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

                <div className="max-w-7xl mx-auto px-6 py-20">

                    <div className="grid md:grid-cols-2 gap-10 items-center">

                        {/* Hero Text */}

                        <div>

                            <p className="text-blue-200 font-semibold mb-3">
                                🛍️ YOUR ONLINE SHOPPING DESTINATION
                            </p>

                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Shop Everything
                                <span className="text-yellow-300">
                                    {" "}You Love.
                                </span>
                            </h1>

                            <p className="mt-6 text-lg text-blue-100 max-w-lg">
                                Discover amazing products at great prices.
                                Browse our collection and find something
                                perfect for you.
                            </p>


                            {/* Search */}

                            <div className="mt-8 flex bg-white rounded-xl p-2 max-w-xl">

                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search for products..."
                                    className="flex-1 px-4 py-3 text-gray-700 outline-none rounded-lg"
                                />

                                <button
                                    className="bg-blue-600 hover:bg-blue-700
                                    px-6 py-3 rounded-lg font-semibold
                                    transition"
                                >
                                    🔍 Search
                                </button>

                            </div>


                            {/* Shop Button */}

                            <div className="mt-6">

                                <Link
                                    to="/products"
                                    className="inline-block bg-yellow-400
                                    hover:bg-yellow-300 text-gray-900
                                    font-bold px-8 py-3 rounded-lg
                                    transition duration-200
                                    hover:scale-105"
                                >
                                    Shop Now →
                                </Link>

                            </div>

                        </div>


                        {/* Hero Illustration */}

                        <div className="hidden md:flex justify-center">

                            <div className="text-[180px] animate-bounce">
                                🛒
                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* ================= CATEGORIES ================= */}

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="text-center mb-10">

                    <h2 className="text-3xl font-bold text-gray-800">
                        Shop by Category
                    </h2>

                    <p className="text-gray-500 mt-2">
                        Find exactly what you're looking for
                    </p>

                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {categories.map((category) => (

                        <div
                            key={category.name}
                            className="bg-white rounded-2xl p-6 text-center
                            shadow-md hover:shadow-xl
                            hover:-translate-y-2
                            transition duration-300 cursor-pointer"
                        >

                            <div className="text-5xl mb-4">
                                {category.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-800">
                                {category.name}
                            </h3>

                            <p className="text-gray-500 mt-2 text-sm">
                                {category.description}
                            </p>

                            <button
                                className="mt-4 text-blue-600
                                font-semibold hover:text-blue-800"
                            >
                                Explore →
                            </button>

                        </div>

                    ))}

                </div>

            </section>



            {/* ================= FEATURED PRODUCTS ================= */}

            <section className="bg-gray-100 py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex justify-between items-center mb-10">

                        <div>

                            <h2 className="text-3xl font-bold text-gray-800">
                                Featured Products
                            </h2>

                            <p className="text-gray-500 mt-2">
                                Popular products you may like
                            </p>

                        </div>

                        <Link
                            to="/products"
                            className="text-blue-600 font-semibold
                            hover:text-blue-800"
                        >
                            View All →
                        </Link>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {products.map((product) => (

                            <div
                                key={product.id}
                                className="bg-white rounded-2xl overflow-hidden
                                shadow-md hover:shadow-xl
                                transition duration-300
                                hover:-translate-y-2"
                            >

                                {/* Product Image */}

                                <div className="h-48 bg-gray-100
                                    flex items-center justify-center">

                                    <span className="text-8xl">
                                        {product.icon}
                                    </span>

                                </div>


                                {/* Product Information */}

                                <div className="p-5">

                                    <h3 className="text-lg font-bold text-gray-800">
                                        {product.name}
                                    </h3>

                                    <div className="flex justify-between items-center mt-4">

                                        <span className="text-xl font-bold text-blue-600">
                                            NPR {product.price.toLocaleString()}
                                        </span>

                                        <button
                                            className="bg-blue-600
                                            hover:bg-blue-700
                                            text-white px-4 py-2
                                            rounded-lg transition"
                                        >
                                            🛒 Add
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>



            {/* ================= PROMOTION ================= */}

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="bg-gradient-to-r from-indigo-600 to-purple-600
                    rounded-3xl p-10 md:p-16 text-white
                    flex flex-col md:flex-row
                    justify-between items-center gap-8">

                    <div>

                        <p className="text-purple-200 font-semibold">
                            SPECIAL OFFER
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mt-2">
                            Get 20% Off Your First Order!
                        </h2>

                        <p className="text-purple-100 mt-3">
                            Create an account and start shopping today.
                        </p>

                    </div>


                    <Link
                        to="/products"
                        className="bg-white text-indigo-600
                        font-bold px-8 py-4 rounded-xl
                        hover:bg-gray-100
                        transition whitespace-nowrap"
                    >
                        Start Shopping →
                    </Link>

                </div>

            </section>



            {/* ================= FOOTER ================= */}

            <footer className="bg-gray-900 text-gray-300">

                <div className="max-w-7xl mx-auto px-6 py-10">

                    <div className="grid md:grid-cols-3 gap-8">

                        <div>

                            <h3 className="text-2xl font-bold text-white">
                                🛒 ShopCart
                            </h3>

                            <p className="mt-3 text-gray-400">
                                Your simple and trusted online shopping
                                destination.
                            </p>

                        </div>


                        <div>

                            <h4 className="text-white font-semibold mb-3">
                                Quick Links
                            </h4>

                            <div className="space-y-2">

                                <Link
                                    to="/"
                                    className="block hover:text-white"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/products"
                                    className="block hover:text-white"
                                >
                                    Products
                                </Link>

                                <Link
                                    to="/cart"
                                    className="block hover:text-white"
                                >
                                    Shopping Cart
                                </Link>

                            </div>

                        </div>


                        <div>

                            <h4 className="text-white font-semibold mb-3">
                                Contact
                            </h4>

                            <p>📧 support@shopcart.com</p>
                            <p className="mt-2">📞 +977 9800000000</p>
                            <p className="mt-2">📍 Kathmandu, Nepal</p>

                        </div>

                    </div>


                    <div className="border-t border-gray-700 mt-8 pt-6 text-center">

                        <p className="text-gray-500">
                            © 2026 ShopCart. All rights reserved.
                        </p>

                    </div>

                </div>

            </footer>

        </div>
    )
}

export default Home

