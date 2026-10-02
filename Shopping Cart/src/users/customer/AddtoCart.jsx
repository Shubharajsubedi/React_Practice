import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/CartStore';
import usePayStore from '../../store/PayStore';


const AddtoCart = () => {
  const { cart, removeFromCart } = useCartStore();
  const navigate = useNavigate();
  const { viewSales } = usePayStore();

 
  return (
   <div className="max-w-5xl mx-auto my-8 px-4 font-sans text-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Shopping Cart</h2>
      
      
      <div className="w-full overflow-x-auto rounded-lg shadow-md border border-gray-200">
        <table className="w-full border-collapse bg-white text-left text-sm">
          
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider">Name</th>
              <th className="px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider">Unit Price</th>
              <th className="px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider">Total Price</th>
              <th className="px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider text-center">Remove Items</th>
            </tr>
          </thead>
          
         
          <tbody className="divide-y divide-gray-200">
            {cart.map((sls) => (
              <tr key={sls.id} className="hover:bg-slate-50 transition-colors duration-150">
                <td className="px-6 py-4 font-medium text-gray-900">{sls.productname}</td>
                <td className="px-6 py-4 text-gray-600">Rs. {sls.productprice}</td>
                <td className="px-6 py-4 text-gray-600">{sls.quantity}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Rs. {sls.total}</td>
                <td className="px-6 py-4 text-center">
                  <button 
                    className="px-4 py-2 border"
                    onClick={() => removeFromCart(sls.id)}
                  >
                    Delete
                  </button> 

                  <button className='px-4 py-2 border text-green-500' onClick={() => {viewSales(cart)
                    navigate("/purchased")
                  }}>Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        <h3>Total Price: $</h3>
        {cart.length > 0 && (

            <div>
                {cart.map((sls) => (
                    <div key={sls.id}>
                        <p>Selected Products : {sls.productname}</p>
                        <p>Selected Products Price : {sls.productprice}</p>
                        
                        </div>
                ))}
                        <button 
                                onClick={() => {
                                viewSales(cart);
                                navigate('/purchased');
                                }}
                            >
                                Pay
                        </button>  
          
          </div>
        )}
      </div>
    
  );
};

export default AddtoCart;
