import { useState } from "react";

function Put() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");

    const [employee, setEmployee] = useState(null);
    const [message, setMessage] = useState("");

    const updateEmployee = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3000/employee/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                username: username,
                email: email,
                department: department
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Employee not found");
                }

                return response.json();
            })
            .then(data => {
                console.log("Employee updated:", data);

                setEmployee(data);
                setMessage("Employee updated successfully!");
            })
            .catch(error => {
                console.log("Error:", error);
                setMessage("Employee could not be updated.");
                setEmployee(null);
            });
    };

    return (
        <div>
            <h1>PUT - Update Employee</h1>

            <form onSubmit={updateEmployee}>

                <label>Employee ID:</label>
                <br />

                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter employee ID"
                    required
                />

                <br /><br />

                <label>Name:</label>
                <br />

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                    required
                />

                <br /><br />

                <label>Username:</label>
                <br />

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                    required
                />

                <br /><br />

                <label>Email:</label>
                <br />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                />

                <br /><br />

                <label>Department:</label>
                <br />

                <input
                    type="text"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    placeholder="Enter department"
                    required
                />

                <br /><br />

                <button type="submit">
                    Update Employee
                </button>

            </form>

            <hr />

            {message && (
                <h3>{message}</h3>
            )}

            {employee && (
                <div>
                    <h2>Updated Employee</h2>

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

export default Put;