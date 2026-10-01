import useCartStore from "../store/CartStore"

const AddtoCart = () => {

    // Get cart from Zustand
    const { cart } = useCartStore()

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <h1 className="mb-6 text-3xl font-bold">
                My Cart
            </h1>

            {cart.length === 0 ? (

                <p className="text-gray-600">
                    Your cart is empty.
                </p>

            ) : (

                <div className="space-y-4">

                    {cart.map((product) => (

                        <div
                            key={product.id}
                            className="rounded-lg bg-white p-5 shadow"
                        >

                            <h2 className="text-xl font-bold">
                                {product.productname}
                            </h2>

                            <p className="mt-2">
                                Rs. {product.productprice}
                            </p>

                        </div>

                    ))}

                </div>

            )}

        </div>
    )
}

export default AddtoCart