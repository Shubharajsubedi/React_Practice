import {create} from 'zustand'


 export const useCardStore = create((set) => ({
    cart: [],

    addtocart: (product) => {
        set((state) => ({
            cart: [...state.cart,product]
        }))
    }
}))

