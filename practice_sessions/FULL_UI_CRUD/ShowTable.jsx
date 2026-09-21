
import { useEffect, useState } from "react";
import Delete from "../src/Components/DeleteEmployee";
import Put from "../src/Components/EditEmployee";

const [editing, setEditing] = useState(false)

function ShowTable({employee,setEmployee}) {
     
      const handleEmployeeClick = (emp) => {

        setEmployee(emp);

        setEditing(false);
    };

    const handleDeleted = (deletedId) => {

    setEmployee(prevEmployees =>
        prevEmployees.filter(emp => emp.id !== deletedId)
    );

};

    return (
        <div>

            <h1>Employee Details</h1>


            {/* =========================
                EMPLOYEE TABLE
            ========================== */}

            <table border="1" cellPadding="10">

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>

                </thead>


                <tbody>

                    {employee.map(emp => (

                        <tr key={emp.id}>

                            <td>
                                {emp.id}
                            </td>


                            {/* NAME IS CLICKABLE */}
                            <td>

                                
                                    {emp.name}
                               

                            </td>


                            <td>
                                {emp.username}
                            </td>


                            <td>
                                {emp.email}
                            </td>


                            <td>
                                {emp.department}
                            </td>

                            <td>
                                
                                <Put
                                employee={}
                                />
                                
                                    <Delete
                                    employeeId={emp.id}
                                    onDeleted={handleDeleted}
                                    />
                                   
                                
                            </td>

                           
                                
                            

                        </tr>

                    ))}

                </tbody>

            </table>

           


          
        </div>
    );
}

export default ShowTable;