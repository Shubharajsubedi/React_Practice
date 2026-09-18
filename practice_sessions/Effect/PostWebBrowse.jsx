import { useState } from "react";

function Post() {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const addEmployee = (e) => {

        e.preventDefault();

        fetch("https://jsonplaceholder.typicode.com/users", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                username: username,
                email: email
            })

        })

        .then(response => response.json())

        .then(data => {

            console.log("Created employee:", data);

            alert("Employee added!");

        })

        .catch(error => {
            console.log(error);
        });

    };


    return (

        <div>

            <h1>POST - Add Employee</h1>

            <form onSubmit={addEmployee}>

                <label>
                    Name:
                </label>

                <br />

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <br /><br />


                <label>
                    Username:
                </label>

                <br />

                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <br /><br />


                <label>
                    Email:
                </label>

                <br />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br /><br />


                <button type="submit">
                    Add Employee
                </button>

            </form>

        </div>

    );
}

export default Post;