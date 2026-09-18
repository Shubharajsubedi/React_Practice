import { useState,useEffect } from "react";

function Get(){
    const [employee, setEmployee]=useState([])
    const [showdata,setShowData]= useState(false)

    useEffect(()=>{
        fetch("http://localhost:3000/employee")
        .then(res => res.json())
        .then(data => {
            setEmployee(data)
        })

        .catch(error => {
            console.log("Error",error)
        })
    },[]);

    return (
         <div>

            <h1>GET - Employee Data</h1>

            {showdata && employee.map(employee => (

                <div key={employee.id}>

                    <h2>{employee.name}</h2>

                    <p>ID: {employee.id}</p>
                    <p>Username: {employee.username}</p>
                    <p>Email: {employee.email}</p>
                    <p>Department: {employee.department}</p>

                    <hr />

                </div>

            ))}

            <button onClick={()=> setShowData(true)}>Click to view Employees</button>

        </div>
    )
}

export default Get;