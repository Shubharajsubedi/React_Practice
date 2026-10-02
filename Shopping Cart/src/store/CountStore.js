import { create } from "zustand"
const useCountStore = create(
    (set) => ({
        productCount: [],

        decreaseCount: (id) => {
            set((state) => {
                var _productIndex = state.productCount.findIndex(p => p.id === id);

                if(_productIndex === -1) {
                    return
                }

                var _product = state.productCount[_productIndex];
                
                var _count = 0;
                 
                if(_product) {
                    _count = _product.count
                }
                _count = _count === 0 ? 0 : _count - 1;

                var _productCount = [...state.productCount];
                _productCount[_productIndex] = {
                    id: id,
                    count: _count
                }
                
                return {
                    productCount: _productCount
                }
            }
        )
        },

        increaseCount: (id) => {
            set((state) => {
                var _productIndex = state.productCount.findIndex(p => p.id === id);

                var _product = {
                    id: id,
                    count: 1
                }

                if(_productIndex !== -1) {
                    _product = state.productCount[_productIndex];
                }
                
                var _count = _product.count;
                
                _count = _count + 1;

                var _productCount = [...state.productCount];
                
                if(_productIndex !== -1) {
                    _productCount[_productIndex] = {
                        id: id,
                        count: _count
                    }
                }else {
                    _productCount.push({
                        id: id,
                        count: _count
                    })
                }
                return {
                    productCount: _productCount
                }
            }
        )
        }


    })
)

export default useCountStore;