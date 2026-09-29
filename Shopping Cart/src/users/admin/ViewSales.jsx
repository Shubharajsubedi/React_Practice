import { useState } from "react"

const ViewSales = () => {
    const [sales,setSales] = useState([])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Product</th>
                </tr>
            </thead>
        </table>

    </div>
  )
}

export default ViewSales