import { useState } from "react";

function Patch() {

    const [id, setId] = useState("");
    const [department, setDepartment] = useState("");
    const [email,setEmail]=useState("")

    const [employee, setEmployee] = useState(null);

    const patchEmployee = (e) => {

        e.preventDefault();

        fetch(`http://localhost:3000/employee/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                department: department,
                email:email
            })
        })
            .then(response => response.json())
            .then(data => {

                console.log("Employee patched:", data);

                setEmployee(data);

            })
            .catch(error => {
                console.log("Error:", error);
            });
    };

    return (
        <div>

            <h1>PATCH - Update Department</h1>

            <form onSubmit={patchEmployee}>

                <label>Employee ID:</label>
                <br />

                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter employee ID"
                />

                <br /><br />

                <label>New Department:</label>
                <br />

                <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Enter new department"
                />

                <br /><br />

                <label>New Email:</label>
                <br />

                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter new department"
                />

                <br /><br />

                <button type="submit">
                    Update Employee Details
                </button>

            </form>

            <hr />

            {employee && (
                <div>

                    <h2>Employee Updated</h2>

                    <p>ID: {employee.id}</p>
                    <p>Name: {employee.name}</p>
                    <p>Username: {employee.username}</p>
                    <p>Email: {employee.email}</p>
                    <p>Department: {employee.department}</p>

                </div>
            )}

        </div>
    );
}

export default Patch;