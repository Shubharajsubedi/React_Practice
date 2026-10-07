


import usePayStore from "../../store/PayStore"


const PurchasedGoods = () => {
   const {pay , deleteSales} = usePayStore();
   
    
   const totalSum = pay.reduce((sum,item) => 
    sum + Number(item.totalprice),0
   )
   
  return (
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
                        <th className="px-6 py-4 font-semibold text-gray-600 uppercase">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {pay.map((sls) => (
                    <tr key={sls.id}>
                        <td className="px-6 py-4 font-medium text-gray-900">{sls.productname}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">Rs.{sls.productprice}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{sls.quantity}</td>
                        <td className="px-6 py-4 font-medium text-gray-900">{sls.totalprice}</td>
                        <td className="px-6 py-4 font-medium text-gray-900"><button onClick={() => {deleteSales(sls.id)
                            }}> Remove</button></td>
                        
                    </tr>
                ))}
                </tbody>
                
                
            </table>
            </div>
            
        )}

       <div>
        <h2>Total Sum of all Products:</h2>
        <p>{totalSum}</p>
       </div>
         

       
    </div>

  )
}

export default PurchasedGoods