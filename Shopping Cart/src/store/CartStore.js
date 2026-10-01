import { create } from "zustand"

export const useCartStore = create((set) => ({

    // Stores all products added to the cart
    cart: [],

    // Function to add a product
    addToCart: (product) => {

        set((state) => ({
            cart: [
                ...state.cart,
                product
            ]
        }))

    }

}))