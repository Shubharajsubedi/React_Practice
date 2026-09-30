
import { useState } from "react"

const Contactus = () => {

    // Store form data
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    // Show success message
    const [submitted, setSubmitted] = useState(false)


    // Handle form submission
    const handleSubmit = (e) => {

        // Prevent page refresh
        e.preventDefault()

        console.log({
            name,
            email,
            message
        })

        // Show success message
        setSubmitted(true)

        // Clear form
        setName("")
        setEmail("")
        setMessage("")
    }


    return (
        <div className="min-h-screen bg-gray-50">

            {/* ================= HERO SECTION ================= */}

            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">

                <div className="max-w-7xl mx-auto px-6 py-16 text-center">

                    <p className="text-blue-200 font-semibold mb-3">
                        💬 WE ARE HERE TO HELP
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold">
                        Contact Us
                    </h1>

                    <p className="max-w-2xl mx-auto mt-5 text-blue-100 text-lg">
                        Have a question, suggestion, or need help with your
                        order? Send us a message and we'll be happy to help.
                    </p>

                </div>

            </section>


            {/* ================= CONTACT SECTION ================= */}

            <section className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-2 gap-10">


                    {/* ================= CONTACT INFORMATION ================= */}

                    <div>

                        <span className="text-blue-600 font-semibold">
                            GET IN TOUCH
                        </span>

                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            We'd Love to Hear From You
                        </h2>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Our team is ready to answer your questions and
                            help you have the best shopping experience.
                        </p>


                        {/* Email */}

                        <div className="flex items-start gap-4 mt-8">

                            <div className="w-12 h-12 bg-blue-100 rounded-xl
                                flex items-center justify-center text-2xl">
                                📧
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-800">
                                    Email
                                </h3>

                                <p className="text-gray-500 mt-1">
                                    support@shopcart.com
                                </p>
                            </div>

                        </div>


                        {/* Phone */}

                        <div className="flex items-start gap-4 mt-6">

                            <div className="w-12 h-12 bg-green-100 rounded-xl
                                flex items-center justify-center text-2xl">
                                📞
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-800">
                                    Phone
                                </h3>

                                <p className="text-gray-500 mt-1">
                                    +977 9800000000
                                </p>
                            </div>

                        </div>


                        {/* Location */}

                        <div className="flex items-start gap-4 mt-6">

                            <div className="w-12 h-12 bg-purple-100 rounded-xl
                                flex items-center justify-center text-2xl">
                                📍
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-800">
                                    Location
                                </h3>

                                <p className="text-gray-500 mt-1">
                                    Kathmandu, Nepal
                                </p>
                            </div>

                        </div>


                        {/* Support */}

                        <div className="mt-10 bg-blue-50 rounded-2xl p-6">

                            <h3 className="text-lg font-bold text-gray-800">
                                🕐 Customer Support
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Monday - Friday
                            </p>

                            <p className="text-gray-600">
                                9:00 AM - 6:00 PM
                            </p>

                        </div>

                    </div>



                    {/* ================= CONTACT FORM ================= */}

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-2xl font-bold text-gray-800">
                            Send Us a Message
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Fill out the form below and we'll get back to you.
                        </p>


                        {/* Success Message */}

                        {submitted && (
                            <div className="mt-5 bg-green-100 border
                                border-green-300 text-green-700
                                px-4 py-3 rounded-lg">

                                ✅ Your message has been sent successfully!

                            </div>
                        )}


                        <form
                            onSubmit={handleSubmit}
                            className="mt-6 space-y-5"
                        >

                            {/* Name */}

                            <div>

                                <label className="block text-sm font-medium
                                    text-gray-700 mb-2">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full px-4 py-3
                                    border border-gray-300 rounded-lg
                                    outline-none
                                    focus:ring-2 focus:ring-blue-500
                                    focus:border-blue-500
                                    transition"
                                />

                            </div>


                            {/* Email */}

                            <div>

                                <label className="block text-sm font-medium
                                    text-gray-700 mb-2">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full px-4 py-3
                                    border border-gray-300 rounded-lg
                                    outline-none
                                    focus:ring-2 focus:ring-blue-500
                                    focus:border-blue-500
                                    transition"
                                />

                            </div>


                            {/* Message */}

                            <div>

                                <label className="block text-sm font-medium
                                    text-gray-700 mb-2">
                                    Message
                                </label>

                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Write your message..."
                                    rows="5"
                                    required
                                    className="w-full px-4 py-3
                                    border border-gray-300 rounded-lg
                                    outline-none resize-none
                                    focus:ring-2 focus:ring-blue-500
                                    focus:border-blue-500
                                    transition"
                                />

                            </div>


                            {/* Submit */}

                            <button
                                type="submit"
                                className="w-full bg-blue-600
                                hover:bg-blue-700
                                text-white font-semibold
                                py-3 rounded-lg
                                transition duration-200
                                hover:shadow-lg"
                            >
                                Send Message 🚀
                            </button>

                        </form>

                    </div>

                </div>

            </section>


            {/* ================= FAQ SECTION ================= */}

            <section className="bg-white py-16">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="text-center mb-10">

                        <p className="text-blue-600 font-semibold">
                            FAQ
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mt-2">
                            Frequently Asked Questions
                        </h2>

                    </div>


                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="bg-gray-50 rounded-xl p-6
                            hover:shadow-md transition">

                            <h3 className="font-bold text-gray-800">
                                How can I place an order?
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Browse our products, add your favorite items
                                to the cart, and proceed to checkout.
                            </p>

                        </div>


                        <div className="bg-gray-50 rounded-xl p-6
                            hover:shadow-md transition">

                            <h3 className="font-bold text-gray-800">
                                How can I track my order?
                            </h3>

                            <p className="text-gray-600 mt-2">
                                You can check your order status from your
                                customer dashboard.
                            </p>

                        </div>


                        <div className="bg-gray-50 rounded-xl p-6
                            hover:shadow-md transition">

                            <h3 className="font-bold text-gray-800">
                                Can I return a product?
                            </h3>

                            <p className="text-gray-600 mt-2">
                                Please contact our support team for
                                information about returns and exchanges.
                            </p>

                        </div>


                        <div className="bg-gray-50 rounded-xl p-6
                            hover:shadow-md transition">

                            <h3 className="font-bold text-gray-800">
                                How do I contact support?
                            </h3>

                            <p className="text-gray-600 mt-2">
                                You can contact us through the form above,
                                email, or phone.
                            </p>

                        </div>

                    </div>

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

export default Contactus

