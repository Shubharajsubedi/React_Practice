import { useState } from "react";

function PostAdmin() {

    const [admin, setAdmin] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const addAdmin = (e) => {

        e.preventDefault();

        const newAdmin = {
            name: name,
            email: email,
            phoneNumber: phoneNumber
        };

        fetch("http://localhost:3000/admin", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(newAdmin)

        })
            .then(res => res.json())
            .then(data => {

                console.log("Admin created:", data);

                setAdmin(data);

                setName("");
                setEmail("");
                setPhoneNumber("");

            })
            .catch(error => {

                console.log("Error:", error);

            });
    };

    return (
        <div>

            <h1>POST DATA</h1>

            <form onSubmit={addAdmin}>

                <label>Enter name: </label>

                <input
                    type="text"
                    value={name}
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                />

                <br />
                <br />

                <label>Enter Email: </label>

                <input
                    type="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />
                <br />

                <label>Enter Number: </label>

                <input
                    type="number"
                    value={phoneNumber}
                    placeholder="Enter number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">
                    Create Admin
                </button>

            </form>

            {admin && (
                <div>

                    <h2>Admin Created</h2>

                    <p>Name: {admin.name}</p>
                    <p>Email: {admin.email}</p>
                    <p>Phone Number: {admin.phoneNumber}</p>

                </div>
            )}

        </div>
    );
}

export default PostAdmin;