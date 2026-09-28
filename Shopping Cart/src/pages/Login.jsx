import {  useState } from "react"
// import Navbar from "../components/Navbar"
import useLoginStore from "../store/LoginStore"
import {useNavigate} from "react-router-dom"
import Navbar from "../components/Navbar"
import { createUsers} from "../api/UsersApi"


const Login = () => {
    const [email,setEmail]= useState("")
    const [password,setPassword]=useState("")
    const [role,setRole] = useState("")
    const [username,setUsername] = useState("")

    const [users,setUsers] =useState([])

    const loginUser = useLoginStore((state) => state.login)

    const navigate = useNavigate();
    

    const handleLogin = async(e) => {
        e.preventDefault();
        const payload = {
                username,
                email,
                password,
                role
            }
        try {
            const res = await createUsers(payload);
            console.log(res.data)
            setUsers([...users,res.data])

                const AuthUser = res.data;
            

        

            if (AuthUser && AuthUser.email === email && AuthUser.password === password) {
                loginUser(AuthUser); // Saves { username, email, role... } to state.user

                if (AuthUser.role === "admin") {
                    navigate("/admin")
                } else if (AuthUser.role === "customer") {
                    navigate("/customer")
                }
            } else {
                alert("You are not authorised.")
            }

        } catch (error) {
           console.log(error) 
        }
        

        
    
    

        
    

    

    }
  return (
    <div>
        <Navbar/>
        <h1>
            Login Form
        </h1>
        <hr />
        <br /><br />
        <h2>Enter your Details</h2>
        <hr />
        
        <form onSubmit={handleLogin}>

            <label htmlFor=""> Username: </label>
            <input type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="Enter your Username" />
            <br /><br />

            <label htmlFor=""> Email: </label>
            <input type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your Email" />
            <br /><br />

            <label htmlFor="">Password</label>
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your passowrd" />
            <br /><br />

            <label>Role:</label>
            <input type="text"
            value={role} 
            onChange={(e)=>setRole(e.target.value)}/>
            <br />
            <hr />

            <button type="submit">Login</button>
            
            <hr />
        </form>
        <br /><br /><br />

        <h2>Passwords</h2>
        <p>admin@gmail.com / admin123</p>
        <p>customer@gmail.com / customer123</p>
    </div>
  )
}

export default Login