import { useState } from "react";

function PostEmployee() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [department, setDepartment] = useState("");

    const [employee, setEmployee] = useState(null);

    const addEmployee = (e) => {
        e.preventDefault();

        const newEmployee = {
            name: name,
            username: username,
            email: email,
            department: department
        };

        fetch("http://localhost:3000/employee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Employee created:", data);

                setEmployee(data);
                setName("");
                setUsername("");
                setEmail("");
                setDepartment("");
            })
            .catch(error => {
                console.log("Error:", error);
            });
    };

    return (
        <div>
            <h1>POST - Create Employee</h1>

            <form onSubmit={addEmployee}>

                <label>Name:</label>
                <br />

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />

                <br /><br />

                <label>Username:</label>
                <br />

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
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
                    Create Employee
                </button>

            </form>

            <hr />

            {employee && (
                <div>
                    <h2>Employee Created</h2>

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

export default PostEmployee;