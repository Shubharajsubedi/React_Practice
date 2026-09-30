
import { useState } from "react"
import Navbar from "../components/Navbar"
import { createUsers } from "../api/UsersApi"


const Register = () => {

  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [username, setUsername] = useState("")


    const handleLogin = async (e) => {

       
        e.preventDefault()

        
        const payload = {
            username,
            email,
            password,
            role
        }

        try {

         
            const res = await createUsers(payload)

            console.log(res.data)

        } catch (error) {

            console.log("Error occurred:", error)

        }

    }


    return (

        <div className="min-h-screen bg-gray-100">

            <Navbar />



            <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-10">


                

                <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">


                   

                    <div className="mb-8 text-center">

                       
                        <div
                            className="
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
                                text-blue-600
                            "
                        >
                            👤
                        </div>


                        <h1 className="text-3xl font-bold text-gray-800">
                            Create Account
                        </h1>


                        <p className="mt-2 text-sm text-gray-500">
                            Enter your details to create your account
                        </p>

                    </div>


               

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
                                Username
                            </label>


                            <input
                                type="text"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                                placeholder="Enter your username"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-gray-300
                                    px-4
                                    py-3
                                    text-gray-700
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
                                Email
                            </label>


                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                placeholder="Enter your email"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-gray-300
                                    px-4
                                    py-3
                                    text-gray-700
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
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                placeholder="Enter your password"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-gray-300
                                    px-4
                                    py-3
                                    text-gray-700
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
                                Role
                            </label>


                            <select
                                value={role}
                                onChange={(e) =>
                                    setRole(e.target.value)
                                }
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-gray-300
                                    bg-white
                                    px-4
                                    py-3
                                    text-gray-700
                                    outline-none
                                    transition
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                "
                            >

                                <option value="">
                                    Select your role
                                </option>

                                <option value="customer">
                                    Customer
                                </option>

                                <option value="sales">
                                    Sales
                                </option>

                                <option value="manager">
                                    Manager
                                </option>

                            </select>

                        </div>


                        

                        <button
                            type="submit"
                            className="
                                w-full
                                rounded-lg
                                bg-blue-600
                                px-5
                                py-3
                                font-semibold
                                text-white
                                shadow-sm
                                transition
                                hover:bg-blue-700
                                active:scale-[0.98]
                                focus:outline-none
                                focus:ring-2
                                focus:ring-blue-300
                            "
                        >
                            Create Account
                        </button>

                    </form>


                   

                    <p className="mt-6 text-center text-sm text-gray-500">

                        Already have an account?

                        <button
                            className="
                                ml-1
                                font-medium
                                text-blue-600
                                hover:text-blue-700
                            "
                        >
                            Login
                        </button>

                    </p>

                </div>

            </div>

        </div>

    )
}

export default Register

