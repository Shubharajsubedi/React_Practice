import { useState } from "react";

function EmployeeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <form>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
      />

      <input
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder="Department"
      />

      <h3>Name: {name}</h3>
      <p> Email: {email}</p>
      <p>Phone : {phone}</p>
      <p>Department: {department}</p>
    </form>
  );
}

export default EmployeeForm;