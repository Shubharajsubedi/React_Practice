
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom"


const LandingPage = () => {

    const navigate = useNavigate()

    return (

        <div className="min-h-screen bg-gray-50">

            {/* =========================
                NAVBAR
            ========================= */}

            <Navbar />


            {/* =========================
                HERO SECTION
            ========================= */}

            <section className="
                bg-gradient-to-r
                from-blue-600
                to-indigo-700
                px-6
                py-20
                text-white
            ">

                <div className="
                    mx-auto
                    max-w-6xl
                    text-center
                ">

                    {/* Small heading */}

                    <p className="
                        mb-3
                        text-sm
                        font-semibold
                        uppercase
                        tracking-widest
                        text-blue-100
                    ">
                        Welcome to our store
                    </p>


                    {/* Main Heading */}

                    <h1 className="
                        text-4xl
                        font-extrabold
                        leading-tight
                        md:text-6xl
                    ">
                        Welcome to
                        <span className="block">
                            Shopping Cart
                        </span>
                    </h1>


                    {/* Description */}

                    <p className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-lg
                        leading-relaxed
                        text-blue-100
                    ">
                        Discover amazing products, enjoy a simple
                        shopping experience, and get everything you
                        need for your Dashain celebration.
                    </p>


                    {/* Buttons */}

                    <div className="
                        mt-8
                        flex
                        flex-col
                        justify-center
                        gap-4
                        sm:flex-row
                    ">

                        {/* Shop Button */}

                        <button
                            onClick={() => navigate("/products")}
                            className="
                                rounded-lg
                                bg-white
                                px-7
                                py-3
                                font-semibold
                                text-blue-600
                                shadow-md
                                transition
                                hover:bg-gray-100
                                active:scale-95
                            "
                        >
                            Shop Now
                        </button>


                        {/* Learn More */}

                        <button
                            onClick={() => navigate("/")}
                            className="
                                rounded-lg
                                border
                                border-white
                                px-7
                                py-3
                                font-semibold
                                text-white
                                transition
                                hover:bg-white/10
                                active:scale-95
                            "
                        >
                            Explore
                        </button>

                    </div>

                </div>

            </section>


            {/* =========================
                FEATURES
            ========================= */}

            <section className="px-6 py-16">

                <div className="mx-auto max-w-6xl">

                    {/* Section Heading */}

                    <div className="mb-10 text-center">

                        <h2 className="
                            text-3xl
                            font-bold
                            text-gray-800
                        ">
                            What can you do here?
                        </h2>

                        <p className="
                            mt-2
                            text-gray-500
                        ">
                            Everything you need for a simple
                            and convenient shopping experience.
                        </p>

                    </div>


                    {/* Feature Cards */}

                    <div className="
                        grid
                        gap-6
                        md:grid-cols-3
                    ">


                        {/* =========================
                            CARD 1
                        ========================= */}

                        <div className="
                            rounded-xl
                            bg-white
                            p-6
                            text-center
                            shadow-sm
                            transition
                            hover:-translate-y-1
                            hover:shadow-lg
                        ">

                            <div className="
                                mx-auto
                                mb-4
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-full
                                bg-blue-100
                                text-2xl
                            ">
                                🛒
                            </div>

                            <h3 className="
                                text-xl
                                font-semibold
                                text-gray-800
                            ">
                                Easy Shopping
                            </h3>

                            <p className="
                                mt-2
                                text-gray-500
                            ">
                                Browse products and add your
                                favorite items to your shopping cart.
                            </p>

                        </div>


                        {/* =========================
                            CARD 2
                        ========================= */}

                        <div className="
                            rounded-xl
                            bg-white
                            p-6
                            text-center
                            shadow-sm
                            transition
                            hover:-translate-y-1
                            hover:shadow-lg
                        ">

                            <div className="
                                mx-auto
                                mb-4
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-full
                                bg-green-100
                                text-2xl
                            ">
                                💳
                            </div>

                            <h3 className="
                                text-xl
                                font-semibold
                                text-gray-800
                            ">
                                Simple Checkout
                            </h3>

                            <p className="
                                mt-2
                                text-gray-500
                            ">
                                Manage your cart and complete
                                your shopping process easily.
                            </p>

                        </div>


                        {/* =========================
                            CARD 3
                        ========================= */}

                        <div className="
                            rounded-xl
                            bg-white
                            p-6
                            text-center
                            shadow-sm
                            transition
                            hover:-translate-y-1
                            hover:shadow-lg
                        ">

                            <div className="
                                mx-auto
                                mb-4
                                flex
                                h-14
                                w-14
                                items-center
                                justify-center
                                rounded-full
                                bg-orange-100
                                text-2xl
                            ">
                                🎉
                            </div>

                            <h3 className="
                                text-xl
                                font-semibold
                                text-gray-800
                            ">
                                Dashain Shopping
                            </h3>

                            <p className="
                                mt-2
                                text-gray-500
                            ">
                                Find products for your Dashain
                                celebration in one place.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                DASHain SECTION
            ========================= */}

            <section className="
                bg-orange-50
                px-6
                py-16
            ">

                <div className="
                    mx-auto
                    max-w-6xl
                    rounded-2xl
                    bg-white
                    p-8
                    shadow-sm
                    md:p-12
                ">

                    <div className="
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-8
                        md:flex-row
                    ">


                        {/* Text */}

                        <div className="max-w-xl">

                            <span className="
                                rounded-full
                                bg-orange-100
                                px-3
                                py-1
                                text-sm
                                font-semibold
                                text-orange-600
                            ">
                                🎉 Dashain Special
                            </span>


                            <h2 className="
                                mt-4
                                text-3xl
                                font-bold
                                text-gray-800
                                md:text-4xl
                            ">
                                Get Ready for Dashain!
                            </h2>


                            <p className="
                                mt-4
                                leading-relaxed
                                text-gray-500
                            ">
                                Prepare for the festival with products
                                for yourself, your family, and your
                                loved ones. Start shopping today.
                            </p>


                            <button
                                onClick={() => navigate("/products")}
                                className="
                                    mt-6
                                    rounded-lg
                                    bg-orange-500
                                    px-6
                                    py-3
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-orange-600
                                    active:scale-95
                                "
                            >
                                Start Shopping →
                            </button>

                        </div>


                        {/* Festival Icon */}

                        <div className="
                            flex
                            h-40
                            w-40
                            items-center
                            justify-center
                            rounded-full
                            bg-orange-100
                            text-7xl
                        ">
                            🪔
                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                FOOTER
            ========================= */}

            <footer className="
                bg-gray-900
                px-6
                py-8
                text-center
                text-gray-400
            ">

                <p>
                    © 2026 Shopping Cart. All rights reserved.
                </p>

                <p className="mt-2 text-sm">
                    Happy Shopping! 🛒
                </p>

            </footer>

        </div>
    )
}

export default LandingPage

