
import { useEffect, useState } from "react";
import EditEmployee from "../src/Components/EditEmployee";

function GetEmployee() {

    const [employee, setEmployee] = useState([]);

    const [selectedEmployee, setSelectedEmployee] = useState(null);

    
    const getEmployees = () => {
        fetch("http://localhost:3000/employee")
        .then(res => res.json())
        .then(data => {
            setEmployee(data);
        })
        .catch(error => {
            console.log("Error:", error);
        });
    }

    
    useEffect(() => {

        getEmployees();

    }, []);
    
  

    const deleteEmployee = (employeeId) => {

        fetch(`http://localhost:3000/employee/${employeeId}`, {
            method: "DELETE"
        })
            .then(response => {

                if (!response.ok) {
                    throw new Error("Employee not found");
                }
                
                getEmployees();

            })
            .catch(error => {

                console.log(error);

                

            });
    };

    const handleEditEmployee = (employee) => {
        console.log("edit employee", employee);
        setSelectedEmployee(employee)
    }
     const handleDeleteEmployee = (employee) => {
        console.log("edit employee", employee);
        deleteEmployee(employee.id);
    }

    return (
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
                                onClick={handleEditEmployee.bind(null, emp)}
                                   
                                >Edit</button>

                                <button
                                    onClick={() =>
                                        handleDeleteEmployee(emp)
                                    }
                                >Delete</button>

                               
                                   
                                
                            </td>

                           
                                
                            

                        </tr>

                    ))}

                </tbody>

            </table>
            

            {selectedEmployee &&
             <EditEmployee newEmployee={selectedEmployee} key={selectedEmployee.id} />}

        </div>
    );
}

export default GetEmployee;