import { useState } from "react"
import { createProducts } from "../../api/ProductsApi"
import NavbarAdmin from "../../components/NavbarAdmin"
import FetchProducts from "../../components/FetchProducts"


const AddProducts = () => {
    const [productname,setProductname]=useState("")
    const [productprice,setProductprice]= useState("")
   

    const [productdetails, setProductdetails]=useState([])
    

    const createProduct = async(e) => {
      e.preventDefault()
      const payload = {
            productname,
            productprice,
           
          }
      try {
        const res = await createProducts(payload)
        console.log(res.data)
        setProductdetails([...productdetails,res.data])
        
        setProductname("")
        setProductprice("")
        

        
      } catch (error) {
        console.log(error)
      }
    }
    
  return (
    <>
  <NavbarAdmin />

  <main className="min-h-screen bg-gray-50 px-6 py-10">
    <div className="mx-auto max-w-6xl">

      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Add New Products
        </h1>
        <p className="mt-2 text-gray-500">
          Add your products and manage them from here.
        </p>
      </div>

      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Product Details
        </h2>

        <form onSubmit={createProduct} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Product Name
            </label>

            <input
              type="text"
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
              placeholder="Enter product name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Product Price
            </label>

            <input
              type="number"
              value={productprice}
              onChange={(e) => setProductprice(e.target.value)}
              placeholder="Enter product price"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700 hover:shadow-lg"
          >
            Add Product
          </button>

        </form>
      </div>

      <div className="mt-12 rounded-2xl bg-white p-8 shadow-md">
        <div className="mb-6 border-b border-gray-200 pb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Available Products
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Products currently available for users.
          </p>
        </div>

        <FetchProducts />
      </div>

    </div>
  </main>
</>
  )
}

export default AddProducts