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
    <NavbarAdmin/>
        <h1>Do you want to add Products.</h1>

        <div>
           <h2>Add your Products From here.</h2> 
           <form onSubmit={createProduct} >
                <label >Product Name:</label>
                <input type="text" 
                value={productname}
                onChange={(e)=>setProductname(e.target.value)}
                placeholder="Enter Product Name." />
              

              <br />

              

              <label >Product Price.</label>
              <input type="number" 
              value={productprice}
              onChange={(e)=>setProductprice(e.target.value)}
              placeholder="Enter Product Price" />
              <br />

              

              <button type="submit">Submit</button>
          </form>

        </div>
        <br />

       <div>
        <b><h1>USER VIEW</h1></b>
        <FetchProducts/>
       </div>

        
    </>
  )
}

export default AddProducts