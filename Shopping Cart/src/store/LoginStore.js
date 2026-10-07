
import { create } from "zustand";

const useLoginStore = create((set) => ({

    // Stores the currently logged-in user's information
    user: null,

    // Checks whether someone is logged in
    isAuthenticated: false,

    // Login function
    // userData will contain the user who logged in
    login: (userData) => {

        set({

            // Store the actual user
            user: userData,

            // User is now authenticated
            isAuthenticated: true,

            // Store the user's role
            role: userData.role
        });
    },

    // Logout function
    logout: () => {

        set({

            // Remove the user
            user: null,

            // User is no longer authenticated
            isAuthenticated: false,

            // Remove the role
            role: null
        });
    }

}));

export default useLoginStore;

