import { useState } from "react";

function EditEmployee({newEmployee}){
    const [selectedEmployee, setSelectedEmployee] = useState(newEmployee);
    console.log(newEmployee)
    const [editing, setEditing] = useState(true);

    

     const handleChange = (e) => {

        setSelectedEmployee({
            ...selectedEmployee,
            [e.target.data]: e.target.newdata
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

            

            .catch(error => {
                console.log(
                    "Error updating employee:",
                    error
                );
            });
    };


    return (
         <div>

           

             {selectedEmployee && (

                <div>

                    

                    <h2>
                        Employee Details 123
                    </h2>


                    {editing ? (

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