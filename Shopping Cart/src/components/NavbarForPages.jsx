
import { Link, useNavigate } from "react-router-dom"
import useLoginStore from "../store/LoginStore"


const NavbarForPages = () => {

    // Get logout function from Zustand
    const loggingout = useLoginStore((state) => state.logout)

    // Used for navigation
    const navigate = useNavigate()


    // Logout function
    const handleLogout = () => {

        // Clear logged-in user from Zustand
        loggingout()

        // Go back to login page
        navigate("/login")
    }


    return (

        <nav className="
            sticky
            top-0
            z-50
            w-full
            border-b
            border-gray-200
            bg-white
            shadow-sm
        ">

            <div className="
                mx-auto
                flex
                max-w-7xl
                items-center
                justify-between
                px-6
                py-4
            ">


                {/* =========================
                    LOGO
                ========================= */}

                <div className="
                    text-xl
                    font-bold
                    text-purple-700
                ">
                    Login Authentication
                </div>


                {/* =========================
                    NAVIGATION LINKS
                ========================= */}

                <ul className="
                    hidden
                    items-center
                    gap-8
                    md:flex
                ">

                    <li>
                        <Link
                            to="/home"
                            className="
                                font-medium
                                text-gray-600
                                transition
                                hover:text-purple-700
                            "
                        >
                            Home
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/about"
                            className="
                                font-medium
                                text-gray-600
                                transition
                                hover:text-purple-700
                            "
                        >
                            About
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/cart"
                            className="
                                font-medium
                                text-gray-600
                                transition
                                hover:text-purple-700
                            "
                        >
                           Cart
                        </Link>
                    </li>


                    <li>
                        <Link
                            to="/contact-us"
                            className="
                                font-medium
                                text-gray-600
                                transition
                                hover:text-purple-700
                            "
                        >
                            Contact Us
                        </Link>
                    </li>

                </ul>


                {/* =========================
                    LOGOUT BUTTON
                ========================= */}

                <button
                    onClick={handleLogout}
                    className="
                        rounded-full
                        bg-purple-700
                        px-5
                        py-2
                        font-medium
                        text-white
                        shadow-sm
                        transition
                        hover:bg-purple-800
                        active:scale-95
                    "
                >
                    Logout
                </button>

            </div>

        </nav>
    )
}

export default NavbarForPages

