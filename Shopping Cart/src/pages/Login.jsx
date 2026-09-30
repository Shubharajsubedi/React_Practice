
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import { getUsers } from "../api/UsersApi"
import useLoginStore from "../store/LoginStore"
import { useNotificationStore } from "../store/notificationStore"
import { Link } from "react-router-dom"


const Login = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   
    const [error, setError] = useState("")


    const [loading, setLoading] = useState(false)


 
    const loginUser = useLoginStore((state) => state.login)

    
    const { addNotification } = useNotificationStore()




    const navigate = useNavigate()


    

    const handleLogin = async (e) => {

       
        e.preventDefault()

        setError("")


       

        if (!email || !password) {

            setError("Please enter both email and password.")

            return
        }


        try {

           
            setLoading(true)


            
            const res = await getUsers()

            const users = res.data


           
            const user = users.find(
                (usr) =>
                    usr.email.toLowerCase() === email.toLowerCase() &&
                    usr.password === password
            )
            


           

            if (!user) {

                setError("Invalid email or password.")

                addNotification("Invalid email or password.")

                return
            }


            
            console.log("Logged in user:", user)


           
            loginUser(user)


            
            addNotification(`Welcome ${user.username}!`)


         
            if (user.role === "customer") {

                navigate("/customer")

            } else if (user.role === "sales") {

                navigate("/sales")

            } else if (user.role === "manager") {

                navigate("/manager")

            } else if (user.role === "admin") {

                navigate("/admin")

            } else {

                setError("User role is not recognized.")

            }


        } catch (error) {

            console.log("Login error:", error)

            setError(
                "Unable to connect to the server. Please try again."
            )

        } finally {

            
            setLoading(false)

        }

    }


    return (

        <div className="min-h-screen bg-gray-100">

          
            <Navbar />


            

            <div className="
                flex
                min-h-[calc(100vh-64px)]
                items-center
                justify-center
                px-4
                py-10
            ">


              

                <div className="
                    w-full
                    max-w-md
                    rounded-2xl
                    bg-white
                    p-8
                    shadow-lg
                ">


                   

                    <div className="mb-8 text-center">

                        <div className="
                            mx-auto
                            mb-4
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-100
                            text-2xl
                        ">
                            🔐
                        </div>


                        <h1 className="
                            text-3xl
                            font-bold
                            text-gray-800
                        ">
                            Welcome Back
                        </h1>


                        <p className="
                            mt-2
                            text-sm
                            text-gray-500
                        ">
                            Login to your shopping account
                        </p>

                    </div>


                 
                    {error && (

                        <div className="
                            mb-5
                            rounded-lg
                            border
                            border-red-200
                            bg-red-50
                            px-4
                            py-3
                            text-sm
                            text-red-600
                        ">
                            {error}
                        </div>

                    )}



                    <form
                        onSubmit={handleLogin}
                        className="space-y-5"
                    >


                   

                        <div>

                            <label
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-medium
                                    text-gray-700
                                "
                            >
                                Email
                            </label>


                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    setError("")
                                }}
                                placeholder="Enter your email"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-gray-300
                                    px-4
                                    py-3
                                    outline-none
                                    transition
                                    placeholder:text-gray-400
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>



                        <div>

                            <label
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-medium
                                    text-gray-700
                                "
                            >
                                Password
                            </label>


                            <input
                                type="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    setError("")
                                }}
                                placeholder="Enter your password"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-gray-300
                                    px-4
                                    py-3
                                    outline-none
                                    transition
                                    placeholder:text-gray-400
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            />

                        </div>


                        {/* =====================================
                            LOGIN BUTTON
                        ===================================== */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                w-full
                                rounded-lg
                                bg-blue-600
                                px-5
                                py-3
                                font-semibold
                                text-white
                                transition
                                hover:bg-blue-700
                                disabled:cursor-not-allowed
                                disabled:bg-blue-400
                            "
                        >

                            {loading
                                ? "Logging in..."
                                : "Login"
                            }

                        </button>

                    </form>


                   

                    <p className="
                        mt-6
                        text-center
                        text-sm
                        text-gray-500
                    ">
                        Don't have an account?

                        <Link to={"/register"}><button
                            type="button"
                            
                            className="
                                ml-1
                                font-medium
                                text-blue-600
                                hover:text-blue-700
                            "
                        >
                            Create Account
                        </button></Link>

                    </p>

                </div>

            </div>

        </div>
    )
}

export default Login

