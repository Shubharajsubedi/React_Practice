import { useState, useEffect } from "react";
import { 
    getPostAdmin, 
    createPostAdmin, 
    updatePostAdmin, 
    deletePostAdmin 
} from "../src/api/PostApi";

function AdminPost() {
    // Form Inputs State
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [thought, setThought] = useState("");
    const [date, setDate] = useState("");

    // App Data & Tracking State
    const [notes, setNotes] = useState([]); // Holds the array of all notes
    const [editId, setEditId] = useState(null); // Tracks if we are editing an existing note

    // 1. READ: Fetch all notes on component mount
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await getPostAdmin();
                // Ensure data falls back to an array if empty
                setNotes(Array.isArray(res.data) ? res.data : []); 
            } catch (error) {
                console.error("Error fetching notes:", error);
            }
        };
        fetchPosts();
    }, []);

    // 2. CREATE & UPDATE: Combined submit handler
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const notePayload = { name, email, thought, date };

        try {
            if (editId) {
                // --- UPDATE MODE ---
                const res = await updatePostAdmin(editId, notePayload);
                console.log("Updated Note:", res.data);
                
                // Update the state array with the edited item
                setNotes(notes.map(note => note.id === editId ? res.data : note));
                setEditId(null); // Reset edit state tracking
            } else {
                // --- CREATE MODE ---
                const res = await createPostAdmin(notePayload);
                console.log("Created Note:", res.data);
                
                // Append the new note to your local notes list
                setNotes([...notes, res.data]);
            }

            // Clear all form inputs after completion
            clearForm();
        } catch (error) {
            console.error("Error submitting form:", error.response?.data || error.message);
        }
    };

    // 3. EDIT TRIGGER: Populates the form fields with target data
    const startEdit = (note) => {
        setEditId(note.id);
        setName(note.name);
        setEmail(note.email);
        setThought(note.thought);
        setDate(note.date);
    };

    // 4. DELETE: Removes note from database and interface
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            await deletePostAdmin(id);
            console.log(`Deleted note ${id} successfully`);
            
            // Filter out the deleted item from the UI state
            setNotes(notes.filter(note => note.id !== id));
            
            // If deleting the item currently being edited, reset form
            if (editId === id) clearForm();
        } catch (error) {
            console.error("Error deleting note:", error.response?.data || error.message);
        }
    };

    // Helper function to clear form inputs
    const clearForm = () => {
        setName("");
        setEmail("");
        setThought("");
        setDate("");
        setEditId(null);
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>{editId ? " Edit Note" : " Add Daily Note"}</h2>
            
            <form onSubmit={handleFormSubmit}>
                <label>Name:</label>
                <input type="text" value={name} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required />
                <br /><br />

                <label>Email:</label>
                <input type="email" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
                <br /><br />

                <label>What do you want to write?</label><br />
                <textarea style={{ width: "100%", height: "80px" }} value={thought} onChange={(e) => setThought(e.target.value)} placeholder="Write your note" required />
                <br /><br />

                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                <br /><br />

                <button type="submit">{editId ? "Update Note" : "Done"}</button>
                {editId && <button type="button" onClick={clearForm} style={{ marginLeft: "10px" }}>Cancel Edit</button>}
            </form>

            <hr />

            <h1>Saved Notes</h1>
            {notes.length === 0 ? (
                <p>No notes found.</p>
            ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    {notes.map((note) => (
                        <div key={note.id} style={{ border: "1px solid ", padding: "15px", borderRadius: "5px" }}>
                            <p><strong>ID:</strong> {note.id}</p>
                            <p><strong>Name:</strong> {note.name}</p>
                            <p><strong>Email:</strong> {note.email}</p>
                            <p><strong>Thought:</strong> {note.thought}</p>
                            <p><strong>Date:</strong> {note.date}</p>
                            
                            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                                <button onClick={() => startEdit(note)}> Edit</button>
                                <button onClick={() => handleDelete(note.id)} style={{  color: "white" }}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AdminPost;
