import { useState } from "react";

function Delete() {

    const [id, setId] = useState("");
    const [message, setMessage] = useState("");

    const deleteEmployee = (e) => {

        e.preventDefault();

        fetch(`http://localhost:3000/employee/${id}`, {
            method: "DELETE"
        })
            .then(response => {

                if (!response.ok) {
                    throw new Error("Employee not found");
                }

                setMessage("Employee deleted successfully!");

                setId("");

            })
            .catch(error => {

                console.log("Error:", error);

                setMessage("Employee could not be deleted.");

            });
    };

    return (
        <div>

            <h1>DELETE - Employee</h1>

            <form onSubmit={deleteEmployee}>

                <label>Employee ID:</label>
                <br />

                <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="Enter employee ID"
                />

                <br /><br />

                <button type="submit">
                    Delete Employee
                </button>

            </form>

            <hr />

            {message && (
                <h2>{message}</h2>
            )}

        </div>
    );
}

export default Delete;