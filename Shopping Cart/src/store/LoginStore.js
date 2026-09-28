import {create} from "zustand"

const useLoginStore = create ((set) => ({
    user:null,
    isAuthenticated:false,

    login:() => {
        set({
            user:null,
            isAuthenticated:true,
            role:null
        })
    },

    logout: () => {
        set({
            user:null,
            isAuthenticated:false,
            role:null
        })
    }
}));

export default useLoginStore;