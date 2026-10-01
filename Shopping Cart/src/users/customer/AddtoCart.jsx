
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/CartStore"
import usePayStore from "../../store/PayStore"


const AddtoCart = () => {

    // Get cart data from Zustand
    const { cart } = useCartStore()


   const  {viewSales} = usePayStore();
   const navigate = useNavigate();


    return (

        <div className="min-h-screen bg-gray-100 p-6">

            <h1 className="
                mb-6
                text-3xl
                font-bold
            ">
                My Cart
            </h1>


            {/* Check if cart is empty */}

            {cart.length === 0 ? (

                <div 
                >

                    <p className="text-gray-600">
                        Your cart is empty.
                    </p>

                </div>

            ) : (

                <div className="space-y-4">

                    {cart.map((product) => (

                        <div
                            key={product.id}
                            className="
                                rounded-lg
                                bg-white
                                p-5
                                shadow
                            "
                        >

                            <h2 className="
                                text-xl
                                font-bold
                            ">
                                {product.productname}
                            </h2>


                            <p className="
                                mt-2
                                text-gray-700
                            ">
                                Rs. {product.productprice}
                            </p>
                            <button onClick={() => {viewSales(product) 
                                navigate("/purchased")}  }>Pay</button>

                        </div>

                    ))}

                    
                    <button >Cancel</button>

                </div>

            )}

        </div>

    )
}

export default AddtoCart