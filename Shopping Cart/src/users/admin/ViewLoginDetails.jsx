
import { useEffect, useState } from "react"
import { deleteUsers, getUsers } from "../../api/UsersApi"
import { useSearchParams } from "react-router-dom"
import {  Link} from "react-router-dom"

const ViewLoginDetails = () => {

    
    const [users, setUsers] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get("q") || ""

    const [searchterm, setSearchterm] = useState(query)

    
        
   
   


  
   
    useEffect(() => {

        const fetchLoginDetails = async () => {

            try {

                const res = await getUsers()

                
                setUsers(res.data)

            } catch (error) {

                console.log("Error occurred:", error)

            }
        }

        fetchLoginDetails()

    }, [])


    

    // =========================
    // SEARCH
    // =========================
    const handleSearch = (e) => {

        e.preventDefault()

        // Put search value into URL
        setSearchParams({
            q: searchterm
        })
    }


    // =========================
    // FILTER USERS
    // =========================
    const filteredUsers = users.filter((usr) =>
        usr.role?.toLowerCase()
            .includes(query.toLowerCase()) || usr.username?.toLowerCase().includes(query.toLowerCase())
    )


    // =========================
    // DELETE USER
    // =========================
    const deleteUser = async (id) => {

        try {

            const res = await deleteUsers(id)

            console.log(res.data)

            // Remove deleted user from frontend
            setUsers(
                users.filter((sls) => sls.id !== id)
            )

        } catch (error) {

            console.log(error)

        }
    }
     

    return (

        <div className="min-h-screen bg-gray-100 p-6">

           
            <div className="mx-auto max-w-7xl">


               
                <div className="mb-8">

                    <h1 className="text-3xl font-bold text-gray-800">
                        User Management
                    </h1>

                    <p className="mt-1 text-gray-500">
                        Search, manage and control registered users
                    </p>

                </div>


                
                <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">

                    <div className="mb-5">

                        <h2 className="text-xl font-semibold text-gray-800">
                            Search Users
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Search users according to their role
                        </p>

                    </div>


                    <form
                        onSubmit={handleSearch}
                        className="flex flex-col gap-4 md:flex-row md:items-end"
                    >

                        {/* Search Input */}
                        <div className="flex-1">

                            <label
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Search by Role
                            </label>

                            <input
                                type="text"
                                value={searchterm}
                                onChange={(e) =>
                                    setSearchterm(e.target.value)
                                }
                                placeholder="e.g. customer, manager, admin"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-gray-300
                                    px-4
                                    py-2.5
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


                        {/* Search Button */}
                        <button
                            type="submit"
                            className="
                                rounded-lg
                                bg-blue-600
                                px-7
                                py-2.5
                                font-medium
                                text-white
                                transition
                                hover:bg-blue-700
                                active:scale-95
                            "
                        >
                            Search
                        </button>


                        {/* Cancel Button */}
                        <button
                            type="button"
                            onClick={() => {

                                // Remove URL search parameter
                                setSearchParams({})

                                // Clear input
                                setSearchterm("")

                            }}
                            className="
                                rounded-lg
                                border
                                border-gray-300
                                bg-white
                                px-7
                                py-2.5
                                font-medium
                                text-gray-700
                                transition
                                hover:bg-gray-100
                                active:scale-95
                            "
                        >
                            Clear
                        </button>

                    </form>

                </div>


                {/* =================================
                    USERS TABLE
                ================================= */}
                <div className="overflow-hidden rounded-xl bg-white shadow-sm">


                    {/* TABLE HEADER */}
                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            border-b
                            border-gray-200
                            px-6
                            py-5
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >

                        <div>

                            <h2 className="text-xl font-semibold text-gray-800">
                                Registered Users
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Total users: {filteredUsers.length}
                            </p>

                        </div>


                        {/* ADD MANAGER BUTTON */}
                        <button
                            className="
                                rounded-lg
                                bg-green-600
                                px-5
                                py-2.5
                                font-medium
                                text-white
                                shadow-sm
                                transition
                                hover:bg-green-700
                                active:scale-95
                            "
                        >
                            + Add Manager
                        </button>

                    </div>


                    {/* TABLE */}
                    <div className="overflow-x-auto">

                        <table className="min-w-full divide-y divide-gray-200">


                            {/* =================================
                                TABLE HEAD
                            ================================= */}
                            <thead className="bg-gray-50">

                                <tr>

                                    <th className="
                                        px-6
                                        py-4
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    ">
                                        Customer Name
                                    </th>


                                    <th className="
                                        px-6
                                        py-4
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    ">
                                        Email
                                    </th>


                                    <th className="
                                        px-6
                                        py-4
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    ">
                                        Password
                                    </th>


                                    <th className="
                                        px-6
                                        py-4
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    ">
                                        Role
                                    </th>


                                    <th className="
                                        px-6
                                        py-4
                                        text-center
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wider
                                        text-gray-500
                                    ">
                                        Actions
                                    </th>

                                </tr>

                            </thead>


                            {/* =================================
                                TABLE BODY
                            ================================= */}
                            <tbody className="divide-y divide-gray-100 bg-white">

                                {filteredUsers.map((sls) => (

                                    <tr
                                        key={sls.id}
                                        className="
                                            transition
                                            hover:bg-gray-50
                                        "
                                    >


                                        {/* USERNAME */}
                                        <td className="whitespace-nowrap px-6 py-4">

                                            <div className="flex items-center gap-3">

                                                {/* Avatar */}
                                                <div
                                                    className="
                                                        flex
                                                        h-10
                                                        w-10
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        bg-blue-100
                                                        font-semibold
                                                        text-blue-600
                                                    "
                                                >
                                                    {sls.username
                                                        ?.charAt(0)
                                                        .toUpperCase()}
                                                </div>


                                                {/* Username */}
                                                <span className="
                                                    font-medium
                                                    text-gray-800
                                                ">
                                                    {sls.username}
                                                </span>

                                            </div>

                                        </td>


                                        {/* EMAIL */}
                                        <td className="
                                            whitespace-nowrap
                                            px-6
                                            py-4
                                            text-sm
                                            text-gray-600
                                        ">
                                            {sls.email}
                                        </td>


                                        {/* PASSWORD */}
                                        <td className="
                                            whitespace-nowrap
                                            px-6
                                            py-4
                                            text-sm
                                            text-gray-500
                                        ">
                                            ••••••••
                                        </td>


                                        {/* ROLE */}
                                        <td className="
                                            whitespace-nowrap
                                            px-6
                                            py-4
                                        ">

                                            <span
                                                className="
                                                    inline-flex
                                                    rounded-full
                                                    bg-blue-100
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    font-semibold
                                                    text-blue-700
                                                "
                                            >
                                                {sls.role}
                                            </span>

                                        </td>


                                        {/* ACTIONS */}
                                        <td className="px-6 py-4">

                                            <div className="
                                                flex
                                                items-center
                                                justify-center
                                                gap-2
                                            ">


                                                {/* EDIT BUTTON */}
                                                <Link to={`/editingcustomer/${sls.id}`}><button 
                                                    className="
                                                        rounded-lg
                                                        bg-yellow-100
                                                        px-4
                                                        py-2
                                                        text-sm
                                                        font-medium
                                                        text-yellow-700
                                                        transition
                                                        hover:bg-yellow-200
                                                    "
                                                >
                                                    Edit
                                                </button></Link>


                                                {/* DELETE BUTTON */}
                                                <button
                                                    onClick={() =>
                                                        deleteUser(sls.id)
                                                    }
                                                    className="
                                                        rounded-lg
                                                        bg-red-100
                                                        px-4
                                                        py-2
                                                        text-sm
                                                        font-medium
                                                        text-red-600
                                                        transition
                                                        hover:bg-red-200
                                                    "
                                                >
                                                    Delete
                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))}


                                {/* =================================
                                    NO USERS MESSAGE
                                ================================= */}
                                {filteredUsers.length === 0 && (

                                    <tr>

                                        <td
                                            colSpan="5"
                                            className="
                                                px-6
                                                py-12
                                                text-center
                                            "
                                        >

                                            <div className="text-gray-400">

                                                <p className="text-lg font-medium">
                                                    No users found
                                                </p>

                                                <p className="mt-1 text-sm">
                                                    Try searching for another role.
                                                </p>

                                            </div>

                                        </td>

                                    </tr>

                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ViewLoginDetails

