import { useEffect, useState } from "react";

import {
    createEmployee,
    deleteEmployee,
    getEmployee,
    updateEmployee
} from "../src/api/AxiousEmployee";


function EmployeePosts() {

    // =========================================================
    // FORM STATES
    // =========================================================

    // Stores the value entered in the Name input
    const [name, setName] = useState("");

    // Stores the value entered in the Email input
    const [email, setEmail] = useState("");

    // Stores the value entered in the Phone Number input
    const [phoneNumber, setPhoneNumber] = useState("");

    // Stores the value entered in the Department input
    const [department, setDepartment] = useState("");


    // =========================================================
    // EMPLOYEE STATE
    // =========================================================

    // employee is an ARRAY because we will store multiple employees.
    //
    // Initially:
    //
    // employee = []
    //
    // After getting data from backend:
    //
    // employee = [
    //     { id: 1, name: "Ram", ... },
    //     { id: 2, name: "Hari", ... }
    // ]
    //
    const [employee, setEmployee] = useState([]);


    // =========================================================
    // EDIT STATE
    // =========================================================

    // edit stores the ID of the employee currently being edited.
    //
    // null means:
    // "We are NOT editing anybody."
    //
    // Example:
    //
    // edit = null
    //
    // When we click Edit for employee with id 5:
    //
    // edit = 5
    //
    const [edit, setEditing] = useState(null);


    // =========================================================
    // GET EMPLOYEES FROM BACKEND
    // =========================================================

    useEffect(() => {

        // Create an async function because API requests
        // take some time to complete.
        const fetchData = async () => {

            try {

                // Call our GET API function.
                const res = await getEmployee();


                // IMPORTANT:
                // Check what the backend actually returned.
                console.log("FULL RESPONSE:", res);

                console.log("RESPONSE DATA:", res.data);

                console.log(
                    "IS RESPONSE DATA AN ARRAY?",
                    Array.isArray(res.data)
                );


                // Store the employees in React state.
                //
                // This assumes the backend returns:
                //
                // [
                //     { id: 1, name: "Ram", ... },
                //     { id: 2, name: "Hari", ... }
                // ]
                //
                setEmployee(res.data);

            } catch (error) {

                // If GET request fails, show the error.
                console.log("GET EMPLOYEE ERROR:", error);

            }
        };


        // Call the function.
        fetchData();

    }, []);


    // =========================================================
    // CREATE / UPDATE EMPLOYEE
    // =========================================================

    const handleFormSubmit = async (e) => {

        // Prevent the browser from refreshing the page
        // when the form is submitted.
        e.preventDefault();


        // =====================================================
        // CREATE PAYLOAD
        // =====================================================

        // This object will be sent to the backend.
        const payload = {

            name: name,

            email: email,

            phoneNumber: phoneNumber,

            department: department
        };


        try {

            // =================================================
            // UPDATE EMPLOYEE
            // =================================================

            // If edit is NOT null, it means we are editing
            // an existing employee.
            //
            // Example:
            //
            // edit = 5
            //
            // Therefore update employee with ID 5.
            if (edit !== null) {

                // Send PUT/PATCH request to backend.
                const res = await updateEmployee(edit, payload);


                // Update the employee inside our React state.
                //
                // map() creates a NEW array.
                //
                // If employee ID matches edit ID:
                //     replace it with updated employee.
                //
                // Otherwise:
                //     keep the old employee.
                setEmployee(
                    employee.map((emp) =>
                        emp.id === edit
                            ? res.data
                            : emp
                    )
                );


                // We are finished editing.
                setEditing(null);


            } else {

                // =================================================
                // CREATE EMPLOYEE
                // =================================================

                // Send POST request to backend.
                const res = await createEmployee(payload);


                // Check the newly created employee.
                console.log("CREATED EMPLOYEE:", res.data);


                // Add the new employee to our existing array.
                //
                // ...employee
                // means:
                // "take all existing employees"
                //
                // res.data
                // means:
                // "add the newly created employee"
                setEmployee([
                    ...employee,
                    res.data
                ]);
            }


            // =================================================
            // CLEAR FORM
            // =================================================

            // Empty the form after creating/updating.
            setName("");

            setEmail("");

            setPhoneNumber("");

            setDepartment("");


            // Make sure we are no longer in edit mode.
            setEditing(null);


        } catch (error) {

            console.log("CREATE / UPDATE ERROR:", error);

        }
    };


    // =========================================================
    // START EDITING
    // =========================================================

    const startEdit = (emp) => {

        // Store the ID of the employee being edited.
        //
        // Example:
        // Employee:
        // {
        //     id: 3,
        //     name: "Ram"
        // }
        //
        // edit becomes:
        //
        // 3
        setEditing(emp.id);


        // Put the employee's existing information
        // into the form fields.

        setName(emp.name);

        setEmail(emp.email);

        setPhoneNumber(emp.phoneNumber);

        setDepartment(emp.department);
    };


    // =========================================================
    // DELETE EMPLOYEE
    // =========================================================

    const handleDelete = async (id) => {

        try {

            // Send DELETE request to backend.
            await deleteEmployee(id);


            // Remove the deleted employee from React state.
            //
            // filter() creates a NEW array.
            //
            // We KEEP every employee whose ID
            // is NOT equal to the deleted ID.
            //
            // Example:
            //
            // employee =
            // [
            //     { id: 1 },
            //     { id: 2 },
            //     { id: 3 }
            // ]
            //
            // If id = 2:
            //
            // result =
            // [
            //     { id: 1 },
            //     { id: 3 }
            // ]
            setEmployee(
                employee.filter((emp) => emp.id !== id)
            );


            console.log(`Deleted employee: ${id}`);


        } catch (error) {

            console.log("DELETE ERROR:", error);

        }
    };


    // =========================================================
    // JSX / UI
    // =========================================================

    return (
        <>

            {/* =================================================
                EMPLOYEE FORM
            ================================================= */}

            <div>

                <h1>
                    {edit !== null
                        ? "UPDATE EMPLOYEE"
                        : "CREATE EMPLOYEE"
                    }
                </h1>


                <form onSubmit={handleFormSubmit}>

                    {/* ================= NAME ================= */}

                    <label>
                        Name:
                    </label>

                    <br />

                    <input
                        type="text"

                        value={name}

                        onChange={(e) =>
                            setName(e.target.value)
                        }

                        placeholder="Enter name"
                    />


                    <br />
                    <br />


                    {/* ================= EMAIL ================= */}

                    <label>
                        Email:
                    </label>

                    <br />

                    <input
                        type="email"

                        value={email}

                        onChange={(e) =>
                            setEmail(e.target.value)
                        }

                        placeholder="Enter email"
                    />


                    <br />
                    <br />


                    {/* ================= PHONE ================= */}

                    <label>
                        Phone Number:
                    </label>

                    <br />

                    <input
                        type="text"

                        value={phoneNumber}

                        onChange={(e) =>
                            setPhoneNumber(e.target.value)
                        }

                        placeholder="Enter phone number"
                    />


                    <br />
                    <br />


                    {/* ================= DEPARTMENT ================= */}

                    <label>
                        Department:
                    </label>

                    <br />

                    <input
                        type="text"

                        value={department}

                        onChange={(e) =>
                            setDepartment(e.target.value)
                        }

                        placeholder="Enter department"
                    />


                    <br />
                    <br />


                    {/* =================================================
                        SUBMIT BUTTON
                    ================================================= */}

                    <button type="submit">

                        {edit !== null
                            ? "Update Employee"
                            : "Create Employee"
                        }

                    </button>


                    {/* =================================================
                        CANCEL EDIT BUTTON

                        Only show this button when editing.
                    ================================================= */}

                    {edit !== null && (

                        <button
                            type="button"

                            onClick={() => {

                                // Exit edit mode
                                setEditing(null);

                                // Clear form
                                setName("");
                                setEmail("");
                                setPhoneNumber("");
                                setDepartment("");

                            }}
                        >
                            Cancel
                        </button>

                    )}

                </form>

            </div>


            <hr />


            {/* =================================================
                EMPLOYEE TABLE
            ================================================= */}

            <div>

                <h1>
                    Employee Details
                </h1>


                <table
                    border="1"
                    cellPadding="10"
                >

                    {/* ================= TABLE HEADER ================= */}

                    <thead>

                        <tr>

                            <th>
                                ID
                            </th>

                            <th>
                                Name
                            </th>

                            <th>
                                Username
                            </th>

                            <th>
                                Email
                            </th>

                            <th>
                                Phone Number
                            </th>

                            <th>
                                Department
                            </th>

                            <th>
                                Action
                            </th>

                        </tr>

                    </thead>


                    {/* ================= TABLE BODY ================= */}

                    <tbody>

                        {
                            employee.map((emp) => (

                                <tr key={emp.id}>

                                    {/* ID */}

                                    <td>
                                        {emp.id}
                                    </td>


                                    {/* NAME */}

                                    <td>
                                        {emp.name}
                                    </td>


                                    {/* USERNAME */}

                                    <td>
                                        {emp.username}
                                    </td>


                                    {/* EMAIL */}

                                    <td>
                                        {emp.email}
                                    </td>


                                    {/* PHONE */}

                                    <td>
                                        {emp.phoneNumber}
                                    </td>


                                    {/* DEPARTMENT */}

                                    <td>
                                        {emp.department}
                                    </td>


                                    {/* ACTION BUTTONS */}

                                    <td>

                                        {/* EDIT */}

                                        <button
                                            onClick={() =>
                                                startEdit(emp)
                                            }
                                        >
                                            Edit
                                        </button>


                                        {" "}


                                        {/* DELETE */}

                                        <button
                                            onClick={() =>
                                                handleDelete(emp.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

        </>

    );
}


export default EmployeePosts;