import { useEffect, useState } from "react";
import { createEmployee, deleteEmployee, getEmployee, updateEmployee } from "../src/api/AxiousEmployee";

function EmployeePost(){
    const[ name,setName] = useState("")
    const[email, setEmail]= useState("")
    const[phoneNumber, setphoneNumber]=useState("")
    const[department,setDepartment]=useState("")


    const[employee,setEmployee]=useState([])
    const[edit,setEditing]=useState(null)

    //fetching data
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await getEmployee();
                setEmployee(res.data)
            } catch (error) {
                console.log("Error:",error)
            }
        };
        fetchData();
    },[])

    //Creating the data

    const handleFormSubmit = async(e)=> {
        e.preventDefault();
        const Payload = {
            name,
            email,
            phoneNumber,
            department
        }

        try {
            if (edit!==null){//mistake
                const res = await updateEmployee(edit,Payload);
                setEmployee(employee.map(emp => emp.id ===edit?res.data:emp))
                setEditing(null);
            }else{
                const res = await createEmployee(Payload);
                console.log("created employee:",res.data)
                setEmployee([...employee,res.data])
            }
            setName("");
            setEmail("")
            setDepartment("");
            setphoneNumber("")
            setEditing(null);
        }catch(error){
            console.log("Error",error)
        }
    };

    const startedit = (emp) => {
        setEditing(emp.id)//edit remails null i didnt put it here
        setName(emp.name)
        setEmail(emp.email)
        setphoneNumber(emp.phoneNumebr)
        setDepartment(emp.department)
    };

    const handleDelete = async(id)=>{
        try {
            const res = await deleteEmployee(id);
            console.log(`Deleted employee${id}`,res)
            setEmployee(employee.filter(emp=>emp.id !==id))//remove the deleted element from the react.
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <div>
            <h1>POST - Create Employee</h1>

            <form onSubmit={handleFormSubmit}>

                <label>Name:</label>
                <br />

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />

                <br /><br />
                

                <label>Email:</label>
                <br />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                />

                <br /><br />

                <label>Department:</label>
                <br />

                <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Enter department"
                />

                <br /><br />

                <button type="submit">
                    {edit !== null? "Update Employee":"Create Employee"} 
                </button>

            </form>

            <hr />

            {/* {employee && (
                <div>
                    <h2>Employee Created</h2>

                    <p>ID: {employee.id}</p>
                    <p>Name: {employee.name}</p>
                    <p>Username: {employee.username}</p>
                    <p>Email: {employee.email}</p>
                    <p>Department: {employee.department}</p>
                </div>
            )} */}
        </div>


         <div>

            <h1>Employee Details</h1>

            <table border="1" cellPadding="10">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>

                </thead>


                <tbody>

                    {employee.map(emp => (

                        <tr key={emp.id}>

                            <td>
                                {emp.id}
                            </td>
                          
                            <td>

                                
                                    {emp.name}
                               

                            </td>


                            <td>
                                {emp.username}
                            </td>


                            <td>
                                {emp.email}
                            </td>


                            <td>
                                {emp.department}
                            </td>

                            <td>
                                <button
                                onClick={()=>startedit(emp)}
                                   
                                >Edit</button>

                                <button
                                    onClick={() =>
                                        handleDelete(emp.id) //needes id for deletion of an employee.
                                    }
                                >Delete</button>

                               
                                   
                                
                            </td>

                           
                                
                            

                        </tr>

                    ))}

                </tbody>

            </table>
            

       

        </div>



        </>
        

    )



}

export default EmployeePost;