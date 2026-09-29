import { useEffect, useState } from "react"
import { getUsers } from "../../api/UsersApi"
import { useSearchParams } from "react-router-dom"

const ViewLoginDetails = () => {
    const [users,setUsers] = useState([])

    const [searchParams,setSearchParams]=useSearchParams();
    const query = searchParams.get("role") || ""

    const [searchterm, setSearchterm] =useState(query)




    useEffect(() => {
        const fetchLoginDetails = async() => {
            try {
                const res = await getUsers();
                setUsers(res.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchLoginDetails();
    },[])

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchParams({
            role:searchterm
        });
    };

    const filteredUsers = users.filter((usr) => 
        usr.role
        .toLowerCase()
        .includes(query.toLowerCase())
    )


  return (
    <div>
        <div>
            <h2>Search Users</h2>
            <form onSubmit={handleSearch}>
                <label >Search by Role:</label>

                <input type="text"
                value={searchterm}
                onChange={(e)=>setSearchterm(e.target.value)}
                placeholder="Search by Role." />
                <br />

                <button type="submit">Search</button><br />
                <button onClick={() => {
                    setSearchParams({})
                    searchterm("")
                    }
                }>Cancel</button>

            </form>
        </div>
        <table className="border- 2 min-w-full divide-y divide-gray-200"  >
            <thead>

                <tr colSpan = "5">
                    <th>
                    <div className="justify-center">
                            Add Manager
                    <button>Add</button>
                    </div>
                            </th>
                    

                </tr>
                <tr>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Role</th>
                </tr>
            </thead>

            <tbody>
                {filteredUsers&& (filteredUsers.map((sls)=> (
                    <tr key={sls.id}>
                        <td>{sls.username}</td>
                        <td>{sls.email}</td>
                        <td>{sls.password}</td>
                        <td>{sls.role}</td>
                        
                    </tr>
                ))

                )}
            </tbody>
        </table>

    </div>
  )
}

export default ViewLoginDetails