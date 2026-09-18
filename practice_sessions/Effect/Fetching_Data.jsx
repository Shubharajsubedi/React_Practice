// import { useEffect, useState } from "react";

// function EmployeesPage() {
//   const [employees, setEmployees] = useState([]);
//   const [showList, setShowList] = useState(false); 
  

//   useEffect(() => { 
//     const mockData = [
//       { id: 1, name: "Alice Johnson" },
//       { id: 2, name: "Bob Smith" },
//       { id: 3, name: "Charlie Brown" }
//     ];
//     setEmployees(mockData);
    
    
//   }, []);

//   return (
//     <div>
//       <h1>Employees</h1>
      
//       <button onClick={() => setShowList(true)}>Show data</button>

      

//       {/* Only renders the list if showList is true */}
//       {showList && employees.map(employee => (
//         <p key={employee.id}>
//           {employee.name}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default EmployeesPage;
