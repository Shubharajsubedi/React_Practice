import { useState } from "react";

function Delete({ employeeId, onDeleted }) {

    const [message, setMessage] = useState("");

    const deleteEmployee = () => {

        fetch(`http://localhost:3000/employee/${employeeId}`, {
            method: "DELETE"
        })
            .then(response => {

                if (!response.ok) {
                    throw new Error("Employee not found");
                }

                setMessage("Deleted successfully!");

                onDeleted(employeeId);

            })
            .catch(error => {

                console.log(error);

                setMessage("Employee could not be deleted.");

            });
    };


    return (
        <div>

            <button onClick={deleteEmployee}>
                Delete
            </button>

            {message && (
                <p>{message}</p>
            )}

        </div>
    );
}

export default Delete;