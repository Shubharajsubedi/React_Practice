
import { useEffect, useState } from "react"
import { getProducts } from "../api/ProductsApi"
import { useSearchParams } from "react-router-dom"

const FetchProducts = () => {

    // --------------------------------
    // 1. Store all products
    // --------------------------------
    const [products, setProducts] = useState([])

    // --------------------------------
    // 2. Get search value from URL
    // Example:
    // /products?productname=shirt
    // --------------------------------
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get("productname") || ""

    // Search input value
    const [searchterm, setSearchterm] = useState(query)


    // --------------------------------
    // 3. Search button
    // --------------------------------
    const handlesubmit = (e) => {
        e.preventDefault()

        // Put the search value into the URL
        setSearchParams({
            productname: searchterm
        })
    }


    // --------------------------------
    // 4. Filter products
    // --------------------------------
    const filteredProducts = products.filter((sls) => {

        return sls.productname
            .toLowerCase()
            .includes(query.toLowerCase())

    })


    // --------------------------------
    // 5. Fetch products from db.json
    // --------------------------------
    useEffect(() => {

        const fetchProducts = async () => {

            try {

                const res = await getProducts()

                // Store products inside state
                setProducts(res.data)

            } catch (error) {

                console.log(error)

            }

        }

        fetchProducts()

    }, [])


    // --------------------------------
    // 6. UI
    // --------------------------------
    return (

        <div className="min-h-screen bg-gray-100 p-6">

            
            <div className="mx-auto mb-8 max-w-7xl rounded-xl bg-white p-6 shadow-sm">

                <form onSubmit={handlesubmit}>

                    <label className="mb-2 block font-semibold text-gray-700">
                        Search Products
                    </label>

                    <div className="flex flex-col gap-3 sm:flex-row">

                        {/* Search Input */}
                        <input
                            type="text"
                            value={searchterm}
                            onChange={(e) => setSearchterm(e.target.value)}
                            placeholder="Search products by name..."
                            className="
                                flex-1
                                rounded-lg
                                border
                                border-gray-300
                                px-4
                                py-2.5
                                outline-none
                                focus:border-blue-500
                                focus:ring-2
                                focus:ring-blue-200
                            "
                        />

                        {/* Search Button */}
                        <button
                            type="submit"
                            className="
                                rounded-lg
                                bg-blue-600
                                px-6
                                py-2.5
                                font-semibold
                                text-white
                                transition
                                hover:bg-blue-700
                                active:scale-95
                            "
                        >
                            Search
                        </button>

                        {/* Cancel Button */}
                        <button
                            type="button"
                            onClick={() => {
                                setSearchParams({})
                                setSearchterm("")
                            }}
                            className="
                                rounded-lg
                                border
                                border-gray-300
                                bg-white
                                px-6
                                py-2.5
                                font-semibold
                                text-gray-700
                                transition
                                hover:bg-gray-100
                                active:scale-95
                            "
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>


            {/* --------------------------------
                PRODUCT CARDS
            -------------------------------- */}
            <div className="
                mx-auto
                grid
                max-w-7xl
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
            ">

                {filteredProducts.map((sls) => (

                    <div
                        key={sls.id}
                        className="
                            overflow-hidden
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            shadow-sm
                            transition
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-lg
                        "
                    >

                        {/* --------------------------------
                            PRODUCT IMAGE
                        -------------------------------- */}
                        <div className="h-48 bg-gray-100">

                            <img
                                src={sls.productimage}
                                alt={sls.productname}
                                className="h-full w-full object-cover"
                            />

                        </div>


                        {/* --------------------------------
                            PRODUCT DETAILS
                        -------------------------------- */}
                        <div className="p-5">

                            {/* Product Name */}
                            <p className="
                                text-lg
                                font-semibold
                                text-gray-900
                            ">
                                {sls.productname}
                            </p>


                            {/* Product Price */}
                            <p className="
                                mt-2
                                text-xl
                                font-bold
                                text-gray-900
                            ">
                                Rs. {sls.productprice}
                            </p>


                            {/* Add To Cart */}
                            <button
                                type="button"
                                className="
                                    mt-4
                                    w-full
                                    rounded-lg
                                    bg-blue-600
                                    px-4
                                    py-2.5
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-blue-700
                                    active:scale-95
                                "
                            >
                                Add to Cart
                            </button>

                        </div>

                    </div>

                ))}

            </div>


            {/* --------------------------------
                NO PRODUCTS FOUND
            -------------------------------- */}
            {filteredProducts.length === 0 && (

                <div className="
                    mx-auto
                    mt-10
                    max-w-7xl
                    rounded-xl
                    bg-white
                    p-10
                    text-center
                    shadow-sm
                ">

                    <p className="text-lg font-semibold text-gray-700">
                        No products found.
                    </p>

                    <p className="mt-2 text-gray-500">
                        Try searching with a different product name.
                    </p>

                </div>

            )}

        </div>

    )
}

export default FetchProducts

