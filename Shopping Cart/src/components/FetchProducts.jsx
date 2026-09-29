import { useEffect, useState } from "react"
import { getProducts } from "../api/ProductsApi"
import { useSearchParams } from "react-router-dom"
import useThemeStore from "../store/ThemeStore"

const FetchProducts = () => {

    const { theme, setTheme } = useThemeStore()

    const [products,setProducts]=useState([])
    

    const [searchParams,setSearchParams]= useSearchParams()
    const query = searchParams.get("productname") || ""
    const [searchterm,setSearchterm]=useState(query)

    const handlesubmit = (e) => {
        e.preventDefault()

        setSearchParams({
            productname:searchterm
        })

        
    }

    const filteredProducts = products.filter((sls) => {
        return sls.productname
        .toLowerCase()
        .includes(query.toLowerCase())
    })



   useEffect (() => {
    const fetchProducts = async() => {
        try {
           const res = await getProducts();
           setProducts(res.data) 
        } catch (error) {
          console.log(error)  
        }
    }
    fetchProducts()
   },[])

    
  return (
    <div className={theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"}>

        <form onSubmit={handlesubmit}>
            <label >search Products : -</label>
            <input type="text"
            value={searchterm}
            onChange={(e)=>setSearchterm(e.target.value)}
            placeholder="search products by name" />

            <button type="submit">Search</button>
            <br />
            <button onClick={()=> {setSearchParams({}) ,setSearchterm("")}}>Cancel</button>
        </form>
        <br />
        <br />
        
       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

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

            {/* Product Image */}
            <div className="h-48 bg-gray-100">
                <img
                    src={sls.productimage}
                    alt={sls.productname}
                    className="h-full w-full object-cover"
                />
            </div>


            {/* Product Details */}
            <div className="p-5">

                <p className="text-lg font-semibold text-gray-900">
                    {sls.productname}
                </p>

                <p className="mt-2 text-xl font-bold text-gray-900">
                    Rs. {sls.productprice}
                </p>


                
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

    </div>
  )
}

export default FetchProducts