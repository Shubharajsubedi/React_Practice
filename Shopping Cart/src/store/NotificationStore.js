import { create } from "zustand"

export const useNotificationStore = create((set) => ({

    notifications: [],

    addNotification: (message, type = "success") => {

        const id = Date.now()

        set((state) => ({
            notifications: [
                ...state.notifications,
                {
                    
                    message,
                    type
                }
            ]
        }))

        setTimeout(() => {

            set((state) => ({
                notifications: state.notifications.filter(
                    (notification) => notification.id !== id
                )
            }))

        }, 3000)
    },

    removeNotification: (id) => {

        set((state) => ({
            notifications: state.notifications.filter(
                (notification) => notification.id !== id
            )
        }))

    },

    clearNotifications: () => {

        set({
            notifications: []
        })

    }

}))