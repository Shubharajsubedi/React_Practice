import { create } from "zustand";

const useCountStore = create((set) => ({

    counts: {},

    increament: (id) => {

        set((state) => {

            const currentQuantity = state.counts[id] || 1;

            return {
                counts: {
                    ...state.counts,
                    [id]: currentQuantity + 1
                }
            };
        });
    },

    decreament: (id) => {

        set((state) => {

            const quantity = state.counts[id] || 1;

            if (quantity <= 1) {
                return state;
            }

            return {
                counts: {
                    ...state.counts,
                    [id]: quantity - 1
                }
            };
        });
    }

}));

export default useCountStore;