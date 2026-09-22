
import { useState,useEffect } from "react";
import { getPostAdmin } from "../src/api/PostApi";

function AdminPost() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [thought, setThought] = useState("");
    const [date, setDate] = useState("");

    const [savedNote, setSavedNote] = useState(null);

    const Note = (e) => {
        e.preventDefault();

        const addNote = {
            name: name,
            email: email,
            thought: thought,
            date: date
        };

        fetch("http://localhost:3000/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addNote)
        })
            .then(res => res.json())
            .then(datas => {
                console.log("Daily Notes:", datas);

                setSavedNote(datas);

                setName("");
                setEmail("");
                setThought("");
                setDate("");
            })
            .catch(error => {
                console.log("Error:", error);
            });
    };
//   useEffect(() => {
//     const fetchPosts = async () => {
//         try {
//             const res = await getPostAdmin();

//             console.log(res.data);

//             setSavedNote(res.data);
//         } catch (error) {
//             console.log("Error:", error);
//         }
//     };

//     fetchPosts();
// }, []);



    return (
        <div>

            <form onSubmit={Note}>

                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                />

                <br />

                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <label>What do you want to write?</label>
                <br />

                <textarea className="100px"
                    value={thought}
                    onChange={(e) => setThought(e.target.value)}
                    placeholder="Write your note"
                />

                <br />

                <label>Date:</label>

                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <br />

                <button type="submit">
                    Done
                </button>

            </form>

            {savedNote && (
                <div>
                    <h1>Notes</h1>

                    <p>ID: {savedNote.id}</p>
                    <p>Name: {savedNote.name}</p>
                    <p>Email: {savedNote.email}</p>
                    <p>Thought: {savedNote.thought}</p>
                    <p>Date: {savedNote.date}</p>
                </div>
            )}

        </div>
    );
}

export default AdminPost;

