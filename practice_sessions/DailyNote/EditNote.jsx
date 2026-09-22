
import { useState } from "react";

function EditNote({ newNote }) {

    const [selectedNote, setSelectedNote] = useState(newNote);
    const [editing, setEditing] = useState(true);


    // Handles all input changes
    const handleChange = (e) => {

        setSelectedNote({
            ...selectedNote,
            [e.target.name]: e.target.value
        });

    };


    // Save updated note to backend
    const handleSave = () => {

        fetch(`http://localhost:3000/admin/${selectedNote.id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(selectedNote)
        })

        .then(res => {

            if (!res.ok) {
                throw new Error("Failed to update note");
            }

            return res.json();

        })

        .then(data => {

            console.log("Note updated successfully:", data);

            setSelectedNote(data);
            setEditing(false);

        })

        .catch(error => {

            console.log("Error updating the note:", error);

        });

    };


    return (
        <div>

            {selectedNote && (

                <div>

                    <h2>Notes</h2>


                    {editing ? (

                        <div>

                            <label>
                                Name:
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={selectedNote.name}
                                onChange={handleChange}
                            />

                            <br />
                            <br />


                            <label>
                                Email:
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={selectedNote.email}
                                onChange={handleChange}
                            />

                            <br />
                            <br />


                            <label>
                                Note:
                            </label>

                            <input
                                type="text"
                                name="thought"
                                value={selectedNote.thought}
                                onChange={handleChange}
                            />

                            <br />
                            <br />


                            <button onClick={handleSave}>
                                Save
                            </button>


                            <button
                                onClick={() => setEditing(false)}
                            >
                                Cancel
                            </button>

                        </div>

                    ) : (

                        <div>

                            <p>
                                ID: {selectedNote.id}
                            </p>

                            <p>
                                Name: {selectedNote.name}
                            </p>

                            <p>
                                Email: {selectedNote.email}
                            </p>

                            <p>
                                Note: {selectedNote.thought}
                            </p>


                            <button
                                onClick={() => setEditing(true)}
                            >
                                Edit
                            </button>

                        </div>

                    )}

                </div>

            )}

        </div>
    );
}

export default EditNote;
