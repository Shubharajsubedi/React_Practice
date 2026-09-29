import { useNotificationStore } from "../store/notificationStore"

const Notifications = () => {

    const {notifications,removeNotification } = useNotificationStore()


    return (

        <div className="fixed right-5 top-5 z-50 flex w-80 flex-col gap-3
        ">

            {notifications.map((notification) => (

                <div
                    key={notification.id}
                    className=" flex items-center justify-between rounded-lg  bg-white p-4 shadow-lg ring-1  ring-gray-200
                    "
                >

                    <div>

                        <p className="font-medium text-gray-900">
                            {notification.message}
                        </p>

                    </div>


                    <button
                        onClick={() =>
                            removeNotification(notification.id)
                        }
                        className="
                            ml-4
                            text-gray-400
                            hover:text-gray-900
                        "
                    >
                        ✕
                    </button>

                </div>

            ))}

        </div>

    )
}

export default Notifications