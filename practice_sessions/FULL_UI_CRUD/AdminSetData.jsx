
import { useEffect, useState } from "react";
import EditEmployee from "../src/Components/EditEmployee";

function GetEmployee({ newEmployee }) {

    const [employee, setEmployee] = useState([]);

    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const [editing, setEditing] = useState(false);


    
    
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

    // Get all employees when component loads
    useEffect(() => {

        getEmployees();

    }, []);
    
    // useEffect(() => {

    //     if (newEmployee) {
    //         setEmployee(prevEmployees => [
    //             ...prevEmployees,
    //             newEmployee
    //         ]);
    //     }
        

    // }, [newEmployee]);

   


    // Handle changes while editing
    const handleChange = (e) => {

        setSelectedEmployee({
            ...selectedEmployee,
            [e.target.name]: e.target.value
        });

    };


    // Save edited employee
    const handleSave = () => {

        fetch(
            `http://localhost:3000/employee/${selectedEmployee.id}`,
            {
                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(selectedEmployee)
            }
        )
            .then(res => res.json())

            .then(updatedEmployee => {

                // Update employee in table
                setEmployee(prevEmployees =>
                    prevEmployees.map(emp =>
                        emp.id === updatedEmployee.id
                            ? updatedEmployee
                            : emp
                    )
                );

                // Update selected employee
                setSelectedEmployee(updatedEmployee);

                // Stop editing
                setEditing(false);

            })

            .catch(error => {
                console.log(
                    "Error updating employee:",
                    error
                );
            });
    };

    const deleteEmployee = (employeeId) => {

        fetch(`http://localhost:3000/employee/${employeeId}`, {
            method: "DELETE"
        })
            .then(response => {

                if (!response.ok) {
                    throw new Error("Employee not found");
                }

                // setMessage("Deleted successfully!");

                // onDeleted(employeeId);
                getEmployees();

            })
            .catch(error => {

                console.log(error);

                // setMessage("Employee could not be deleted.");

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


            {/* =========================
                EMPLOYEE TABLE
            ========================== */}

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


                            {/* NAME IS CLICKABLE */}
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
                                    // onClick={() =>
                                    //     handleEditEmployee(emp)
                                    // }
                                >Edit</button>

                                <button
                                    onClick={() =>
                                        handleDeleteEmployee(emp)
                                    }
                                >Delete</button>

                                {/* <Get
                                employee={emp.id}
                                onUpdated={handleEmployeeClick}/>
                                
                                
                                    <Delete
                                    employeeId={emp.id}
                                    onDeleted={handleDeleted}
                                    /> */}
                                   
                                
                            </td>

                           
                                
                            

                        </tr>

                    ))}

                </tbody>

            </table>

           


            {/* =========================
                SELECTED EMPLOYEE
            ========================== */}

            {/*selectedEmployee && (

                <div>

                    

                    <h2>
                        Employee Details
                    </h2>


                    {editing ? (

                        /* =====================
                           EDIT MODE
                        ====================== 

                        <div>

                            <label>
                                Name:
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={selectedEmployee.name}
                                onChange={handleChange}
                            />

                            <br /><br />


                            <label>
                                Username:
                            </label>

                            <input
                                type="text"
                                name="username"
                                value={selectedEmployee.username}
                                onChange={handleChange}
                            />

                            <br /><br />


                            <label>
                                Email:
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={selectedEmployee.email}
                                onChange={handleChange}
                            />

                            <br /><br />


                            <label>
                                Department:
                            </label>

                            <input
                                type="text"
                                name="department"
                                value={selectedEmployee.department}
                                onChange={handleChange}
                            />

                            <br /><br />


                            <button onClick={handleSave}>
                                Save
                            </button>


                            <button
                                onClick={() =>
                                    setEditing(false)
                                }
                            >
                                Cancel
                            </button>

                        </div>

                    ) : (

                        /* =====================
                           VIEW MODE
                        ====================== 

                        <div>

                            <p>
                                ID: {selectedEmployee.id}
                            </p>

                            <p>
                                Name: {selectedEmployee.name}
                            </p>

                            <p>
                                Username: {selectedEmployee.username}
                            </p>

                            <p>
                                Email: {selectedEmployee.email}
                            </p>

                            <p>
                                Department: {selectedEmployee.department}
                            </p>


                            <button
                                onClick={() =>
                                    setEditing(true)
                                }
                            >
                                Edit
                            </button>

                        </div>

                    )}

                </div>

            )*/}

            {selectedEmployee && <EditEmployee newEmployee={selectedEmployee} key={selectedEmployee.id} />}

        </div>
    );
}

export default GetEmployee;