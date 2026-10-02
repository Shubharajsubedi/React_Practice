
import { useState } from "react"
import Navbar from "./Navbar"

const About = () => {

    
    const [showMore, setShowMore] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar/>

           

            <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white">

                <div className="max-w-7xl mx-auto px-6 py-20 text-center">

                    <p className="text-blue-200 font-semibold mb-3">
                        🛍️ ABOUT SHOPCART
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold">
                        We Make Shopping
                        <span className="text-yellow-300">
                            {" "}Simple.
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto mt-6 text-lg text-blue-100">
                        ShopCart is an online shopping platform designed to
                        make discovering and purchasing products simple,
                        convenient, and enjoyable.
                    </p>

                </div>

            </section>


            {/* ================= ABOUT US ================= */}

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left side */}

                    <div>

                        <span className="text-blue-600 font-semibold">
                            WHO WE ARE
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                            Your Online Shopping Partner
                        </h2>

                        <p className="text-gray-600 mt-5 leading-relaxed">
                            Welcome to ShopCart! We created this platform
                            to provide customers with a simple way to
                            explore products, compare options, and shop
                            online.
                        </p>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Our goal is to bring useful products together
                            in one convenient place while providing a
                            smooth and enjoyable shopping experience.
                        </p>


                        {/* Show More */}

                        {showMore && (
                            <p className="text-gray-600 mt-4 leading-relaxed">
                                We are continuously improving ShopCart by
                                adding new products, improving the user
                                experience, and building useful features
                                for our customers.
                            </p>
                        )}


                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="mt-6 bg-blue-600 hover:bg-blue-700
                            text-white font-semibold px-6 py-3 rounded-lg
                            transition duration-200"
                        >
                            {showMore ? "Show Less ↑" : "Learn More ↓"}
                        </button>

                    </div>


                    {/* Right side */}

                    <div className="flex justify-center">

                        <div className="bg-white rounded-3xl shadow-xl
                            p-12 text-center
                            hover:-translate-y-2
                            transition duration-300">

                            <div className="text-8xl">
                                🛒
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mt-6">
                                ShopCart
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Shop. Discover. Enjoy.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= OUR VALUES ================= */}

            <section className="bg-white py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-12">

                        <span className="text-blue-600 font-semibold">
                            WHAT WE VALUE
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                            Why Shop With Us?
                        </h2>

                    </div>


                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Card 1 */}

                        <div className="p-8 rounded-2xl bg-gray-50
                            shadow-md hover:shadow-xl
                            hover:-translate-y-2
                            transition duration-300">

                            <div className="text-5xl mb-5">
                                🚀
                            </div>

                            <h3 className="text-xl font-bold text-gray-800">
                                Simple Experience
                            </h3>

                            <p className="text-gray-600 mt-3">
                                We focus on making the shopping process
                                easy and straightforward.
                            </p>

                        </div>


                        {/* Card 2 */}

                        <div className="p-8 rounded-2xl bg-gray-50
                            shadow-md hover:shadow-xl
                            hover:-translate-y-2
                            transition duration-300">

                            <div className="text-5xl mb-5">
                                🔒
                            </div>

                            <h3 className="text-xl font-bold text-gray-800">
                                Secure Shopping
                            </h3>

                            <p className="text-gray-600 mt-3">
                                We aim to provide customers with a safe
                                and reliable shopping environment.
                            </p>

                        </div>


                        {/* Card 3 */}

                        <div className="p-8 rounded-2xl bg-gray-50
                            shadow-md hover:shadow-xl
                            hover:-translate-y-2
                            transition duration-300">

                            <div className="text-5xl mb-5">
                                ❤️
                            </div>

                            <h3 className="text-xl font-bold text-gray-800">
                                Customer First
                            </h3>

                            <p className="text-gray-600 mt-3">
                                Our goal is to create a pleasant experience
                                for every customer.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= STATISTICS ================= */}

            <section className="bg-gray-100 py-16">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">
                                100+
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Products
                            </p>
                        </div>


                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">
                                500+
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Customers
                            </p>
                        </div>


                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">
                                24/7
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Support
                            </p>
                        </div>


                        <div>
                            <h3 className="text-4xl font-bold text-blue-600">
                                100%
                            </h3>

                            <p className="text-gray-500 mt-2">
                                Dedication
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700
                    rounded-3xl text-white text-center
                    px-6 py-14">

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ready to Start Shopping?
                    </h2>

                    <p className="mt-4 text-blue-100">
                        Explore our products and discover something you love.
                    </p>

                    <button
                        className="mt-7 bg-yellow-400
                        hover:bg-yellow-300
                        text-gray-900 font-bold
                        px-8 py-3 rounded-lg
                        transition duration-200
                        hover:scale-105"
                    >
                        Start Shopping →
                    </button>

                </div>

            </section>


            {/* ================= FOOTER ================= */}

            <footer className="bg-gray-900 text-gray-300 py-8">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <h3 className="text-xl font-bold text-white">
                        🛒 ShopCart
                    </h3>

                    <p className="mt-2 text-gray-500">
                        Shop. Discover. Enjoy.
                    </p>

                    <p className="mt-5 text-sm text-gray-600">
                        © 2026 ShopCart. All rights reserved.
                    </p>

                </div>

            </footer>

        </div>
    )
}

export default About

