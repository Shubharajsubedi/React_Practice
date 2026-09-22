
import { useEffect,useState } from "react";
import EditNote from "./EditNote";

export default function GetNote(){
    const [Notes, setNotes]=useState([]);
    const [selectedNote,setSelectedNote]=useState(null);


    const GetNote= ()=>{
        fetch("http://localhost:3000/admin")
        .then(res=>res.json())
        .then(data=>
            {setNotes(data)
            }
        )
        .catch(error => {
            console.log(error)
        })
    };

    useEffect(()=>{
        GetNote();
    },[]);


     const deleteNote = (NoteId) => {

        fetch(`http://localhost:3000/admin/${NoteId}`, {
            method: "DELETE"
        })
            .then(response => {

                if (!response.ok) {
                    throw new Error("Notes cannot be deleted due to error.");
                }
                
                GetNote();

            })
            .catch(error => {

                console.log(error);

                

            });
    };

    const handleEditNote = (note)=>{
        setSelectedNote(note)
    }
    const handleDeleteNote = (note)=>{
        deleteNote(note.id)
    }

    return (
        <div>
            <h1> Notes </h1>
            <table border ="1" cellPadding ="10">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name of an Employee</th>
                        <th>Email</th>
                        <th>Notes</th>
                    </tr>
                </thead>

                <tbody>
                    {Notes.map(nte => (
                        <tr key={nte.id}>
                            <td>
                                {nte.id}
                            </td>

                            <td>
                               {nte.name} 
                            </td>

                            <td>
                            {nte.email}
                            </td>
                            <td>
                                {nte.thought}
                            </td>

                            <button 
                            onClick={handleEditNote.bind(null,nte)}>
                                Edit
                            </button>

                            <button
                            onClick={()=>handleDeleteNote(nte)}>
                                Delete
                            </button>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedNote &&
            <EditNote newNote = {selectedNote} key ={selectedNote.id} />}
        </div>
    )


}
