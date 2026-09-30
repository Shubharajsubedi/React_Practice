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
        <div>

            <h2>Edit Customer</h2>

            <form onSubmit={editCustomer}>

                <label>Username: </label>

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <br />
                <br />


                <label>Email: </label>

                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />


                <label>Password: </label>

                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />


                <label>Role: </label>

                <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />

                <br />
                <br />


                <button type="submit">
                    Update
                </button>

            </form>

            <button onClick={() => navigate("/admin")}>
                Cancel
            </button>

        </div>
    )
}

export default EditCustomer