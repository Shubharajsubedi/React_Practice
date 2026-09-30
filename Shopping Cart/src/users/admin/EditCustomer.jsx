import { useEffect, useState } from "react"
import { getUser, updateUsers } from "../../api/UsersApi"
import { useParams, useNavigate } from "react-router-dom"

const EditCustomer = () => {

    // Get the id from the URL
    const { id } = useParams()

    // Used to navigate after updating
    const navigate = useNavigate()

    // Store the customer information
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("")
    const [username, setUsername] = useState("")

    // Fetch the customer when the page loads
    useEffect(() => {

        const fetchdata = async () => {
            try {

                // Get one user using the id
                const res = await getUser(id)

                // Store the returned user information
                const user = res.data

                setUsername(user.username)
                setEmail(user.email)
                setPassword(user.password)
                setRole(user.role)

            } catch (error) {
                console.log(error)
            }
        }

        fetchdata()

    }, [id])


    // Run when Update button is clicked
    const editCustomer = async (e) => {

        // Prevent page refresh
        e.preventDefault()

        try {

            // Data that we want to update
            const payload = {
                username,
                email,
                password,
                role
            }

            // Send updated data to backend
            const res = await updateUsers(id, payload)

            console.log("Updated user:", res.data)

            // Go back after successful update
            navigate("/logindetails")

        } catch (error) {
            console.log(error)
        }
    }


    return (
       
<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

    <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">

        {/* Page heading */}
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
                Edit Customer
            </h2>

            <p className="text-gray-500 mt-2">
                Update the customer's information below.
            </p>
        </div>


        {/* Form */}
        <form onSubmit={editCustomer} className="space-y-5">

            {/* Username */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                </label>

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                    outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition"
                    placeholder="Enter username"
                />
            </div>


            {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                </label>

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                    outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition"
                    placeholder="Enter email"
                />
            </div>


            {/* Password */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                </label>

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                    outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition"
                    placeholder="Enter password"
                />
            </div>


            {/* Role */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                </label>

                <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                    outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    transition"
                    placeholder="Enter role"
                />
            </div>


            {/* Buttons */}
            <div className="flex gap-4 pt-4">

                <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 
                    text-white font-semibold py-3 rounded-lg 
                    transition duration-200 shadow-md hover:shadow-lg"
                >
                    Update Customer
                </button>

                <button
                    type="button"
                    onClick={() => navigate("/admin")}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 
                    text-gray-700 font-semibold py-3 rounded-lg 
                    transition duration-200"
                >
                    Cancel
                </button>

            </div>

        </form>

    </div>

</div>


    )
}

export default EditCustomer