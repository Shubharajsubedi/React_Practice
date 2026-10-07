
import { create} from "zustand"
import { persist } from "zustand/middleware"


const usePayStore = create(
   persist(
    
        (set) => ({
    
    pay:[],

    viewSales: (sales) => {
        set((state) => ({
            pay: [
                ...state.pay,...sales
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
}),


))

export default usePayStore