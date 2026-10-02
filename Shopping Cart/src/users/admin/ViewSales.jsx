import usePayStore from "../../store/PayStore";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/UsersApi";

const ViewSales = () => {
   
   const {pay , deleteSales} = usePayStore();
   const[users,setUsers] = useState([])

   useEffect(() => {
   
           const fetchLoginDetails = async () => {
   
               try {
   
                   const res = await getUsers()
   
                   
                   setUsers(res.data)
   
               } catch (error) {
   
                   console.log("Error occurred:", error)
   
               }
           }
   
           fetchLoginDetails()
   
       }, [])
  return (
    <div>
        
        <div>
        <h1 className="text-5xl "> Purchsed Goods.</h1>
        <br /><br />

        {pay.length === 0 ? (
            <div>
                <p>NO Purchsed Goods</p>
            </div>
        ):(
            <div className="">
                <table className="w-full overflow-x-auto rounded-lg border-gray-200">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Name</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Product Price</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Quantity</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Total Price</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Username</th>
                        <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Action</th>
                        
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {users && pay.map((sls) => (
                    <tr key={sls.id}>
                        <td className="px-6 py-4 font-medium text-gray-900">{sls.productname}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">Rs.{sls.productprice}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{sls.quantity}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{sls.totalprice}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{sls.username}</td>
                        <td className="px-6 py-4 font-medium text-gray-900"><button onClick={() => {deleteSales(sls.id)
                           }}> Remove</button></td>
                        
                    </tr>
                ))}
                </tbody>
                
                
            </table>
            </div>
            
        )}

       
    </div>

    </div>

  )
}

export default ViewSales