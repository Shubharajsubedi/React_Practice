
import { useNotificationStore } from "../../store/notificationStore";
import usePayStore from "../../store/PayStore"


const PurchasedGoods = () => {
   const {pay , deleteSales} = usePayStore();
   const {addNotification} = useNotificationStore()
  return (
    <div>
        <h1> Purchsed Goods.</h1>

        {pay.length === 0 ? (
            <div>
                <p>NO Purchsed Goods</p>
            </div>
        ):(
            <div>
                {pay.map((sale) => (
                    <div key={sale.id}>
                        <h2>{sale.productname}</h2>
                        <h3>Rs.{sale.productprice}</h3>
                        <button onClick={() => {deleteSales(sale.id)
                            addNotification("deleted")}}> Remove</button>
                        
                    </div>
                ))}
                
            </div>
        )}

       
    </div>

  )
}

export default PurchasedGoods