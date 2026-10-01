
import { create } from "zustand"

const usePayStore = create((set) => ({
    pay:[],

    viewSales: (sales) => {
        set((state) => ({
            pay: [
                ...state.pay,sales
            ]
        }))
    },

    deleteSales:  (id) => {
        set((state) => ({
            pay: state.pay.filter(
                (sls) => sls.id !== id
            )
        }))
    }
}))

export default usePayStore