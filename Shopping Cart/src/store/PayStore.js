
import { create } from "zustand"

const usePayStore = create((set) => ({
    pay:[],

    viewSales: (sales) => {
        set((state) => ({
            pay: [
                ...state.pay,sales
            ]
        }))
    }
}))

export default usePayStore