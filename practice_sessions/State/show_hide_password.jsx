import { useState } from "react";

function Login(){
    const[showPassword, setShowPassword] = useState(false)
    return(
        <div>
            <p>Enter your password: <input type={showPassword? "text" : "password"} 
            placeholder="Enter yout password" /></p>
            <button onClick={()=> setShowPassword(!showPassword)}>{showPassword? "hides password" : "showPassword"}</button>
        </div>
    )
}

export default Login;