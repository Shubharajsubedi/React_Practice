import { useState,useEffect } from "react";

function EditEmployee({newEmployee}){
    // const [employee, setEmployee]=useState([])
    // const [showdata,setShowData]= useState(false)
    const [selectedEmployee, setSelectedEmployee] = useState(newEmployee);
    console.log(newEmployee)
    const [editing, setEditing] = useState(true);

    // useEffect(()=>{
        // fetch("http://localhost:3000/employee")
        // .then(res => res.json())
        // .then(data => {
        //     setEmployee(data)
        // })

        // .catch(error => {
        //     console.log("Error",error)
        // })
        // setSelectedEmployee(newEmployee);
    // },[newEmployee]);
       
    // const handleEdit = () => {

    //     if (newEmployee) {
    //         setEmployee(prevEmployees => [
    //             ...prevEmployees,
    //             newEmployee
    //         ]);
    //     }
        

    // };

     const handleChange = (e) => {

        setSelectedEmployee({
            ...selectedEmployee,
            [e.target.name]: e.target.value
        });

    };


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


    return (
         <div>

            {/* <h1>GET - Employee Data</h1>

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

            <button onClick={()=> setShowData(true)}>Click to view Employees</button> */}

             {selectedEmployee && (

                <div>

                    

                    <h2>
                        Employee Details 123
                    </h2>


                    {editing ? (

                        /* =====================
                           EDIT MODE
                        ====================== */

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
                        ====================== */

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
                )}

            </div>
    )
}

export default EditEmployee;