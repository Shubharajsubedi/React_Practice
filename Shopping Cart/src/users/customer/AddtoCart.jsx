import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../../store/CartStore';
import usePayStore from '../../store/PayStore';
import useCountStore from '../../store/CountStore';
import { useState, useCallback } from 'react';


const AddtoCart = () => {
  const { cart, removeFromCart } = useCartStore();
  // const navigate = useNavigate();
  // const { viewSales } = usePayStore();
  // const {productCount, increaseCount, decreaseCount} = useCountStore();
  const [count, setCount] = useState({});
  

  // const getCount = useCallback((id) => {
  //   var product = productCount.find(p => p.id === id) 
  //   if(product) {
  //     return product.count
  //   }

  //   return 1;
  // }, [productCount]);

  // const getTotalPrice = () => {
  //   var sum = 0;
  //   for(var i=0; i<cart.length; i++){
  //     var _p = +cart[i].productprice * getCount(cart[i].id);
  //     sum = sum + _p;
  //   }

  //   return sum;
  // };


  const Increament = (id) => {
    const currentvlaue = count[id] || 1;

    setCount({
      ...count,
      [id]: currentvlaue + 1
    });
  }


  const Decreament = (id) => {
    const currentvlaue = count[id] || 1;

    if (currentvlaue > 1) {
      setCount({
        ...count,
        [id]: currentvlaue - 1
      });
    }
  }


  return (
    <div className="max-w-5xl mx-auto my-8 px-4 font-sans text-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Shopping Cart
      </h2>
      
      
      <div className="w-full overflow-x-auto rounded-lg shadow-md border border-gray-200">
        <table className="w-full border-collapse bg-white text-left text-sm">
          
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-600 uppercase ">
                Name
              </th>

              <th className="px-6 py-4 font-semibold text-gray-600 uppercase">
                Unit Price
              </th>

              <th className="px-6 py-4 font-semibold text-gray-600 uppercase ">
                Quantity
              </th>

              <th className="px-6 py-4 font-semibold text-gray-600 uppercase ">
                Total Price
              </th>

              <th className="px-6 py-4 font-semibold text-gray-600 uppercase tracking-wider text-center">
                Remove Items
              </th>
            </tr>
          </thead>
          
         
          {/* <tbody className="divide-y divide-gray-200">
            {cart.map((sls) => (
              <tr key={sls.id} className="hover:bg-slate-50 transition-colors duration-150">
                <td className="px-6 py-4 font-medium text-gray-900">{sls.productname}</td>
                <td className="px-6 py-4 text-gray-600">Rs. {sls.productprice}</td>
                <td className="px-6 py-4 text-gray-600">
                  <button onClick={() => decreaseCount(sls.id)}>-</button>
                  {getCount(sls.id)} 
                  <button onClick={() => increaseCount(sls.id)}>+</button></td>
                <td className="px-6 py-4 font-semibold text-gray-900">Rs. {sls.productprice * getCount(sls.id)}</td>
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
          </tbody> */}


          <tbody>
            {cart.map((pdt) => {

              // Get quantity of the current product
              const quantity = count[pdt.id] || 1;

              return (
                <tr key={pdt.id}>

                  <td className='px-6 py-2 border'>
                    {pdt.productname}
                  </td>

                  <td className='px-6 py-2 border'>
                    Rs. {pdt.productprice}
                  </td>

                  <td className='px-6 py-2 border'>

                    <button
                      onClick={() => Decreament(pdt.id)}
                      className="px-3 border"
                    >
                      -
                    </button>

                    <span className="px-3">
                      {quantity}
                    </span>

                    <button
                      onClick={() => Increament(pdt.id)}
                      className="px-3 border"
                    >
                      +
                    </button>

                  </td>

                  <td className='px-6 py-2 border'>
                    Rs. {pdt.productprice * quantity}
                  </td>

                  <td className='px-6 py-2 border text-center'>

                    <button
                      onClick={() => removeFromCart(pdt.id)}
                      className="px-3 py-1 border"
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

      <h3 className="mt-5 text-xl font-bold">
        Total Price: $
      </h3>


      {/* {cart.length > 0 && (

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
        )} */}


       
        

        {/* {getTotalPrice()} */}

      </div>
    
  );
};

export default AddtoCart;