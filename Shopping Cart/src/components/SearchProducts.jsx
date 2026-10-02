import { useState,useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { getProducts } from "../api/ProductsApi"


const SearchProducts = () => {
    const[products,setProducts] = useState("")

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get("productname") || ""
    const [searchterm, setSearchterm] = useState(query)


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


    const handlesubmit = (e) => {
        e.preventDefault()

        setSearchParams({
            productname:searchterm
        })
    }

    const filteredProducts = products.filter((usr) => 
    usr.productname
    ?.tolowerCase()
    .includes(query.toLowerCase())
)

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" 
            value={searchterm}
            onChange={(e) => searchterm(e.target.value)}
            placeholder="search by products." />

            <button type="submit">Search</button>

        </form>

        <button onClick={() => {
            setSearchParams({})
            setSearchterm("")
        }}>Cancel</button>
        

        {filteredProducts === 0 ? (
            <div>
                <p>No products found</p>
                <p>Might be out of stock. Try searching another products.</p>
            </div>
        ):(
            filteredProducts.map((pdr) => (
                <div>
                   
                    <p>{pdr.productname}</p>
                </div>
            )
            )
        )}
    </div>
  )
}

export default SearchProducts