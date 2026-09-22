import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:3000",
})

//Getting 
export const getEmployee = () => API.get("/Employee");
//Posting
export const createEmployee = (data) => API.post("/Employee",data)
//updating
export const updateEmployee = (id, updatedID) => API.put(`/Employee/${id}`, updatedID)

//deleting
export const deleteEmployee = (id)=> API.delete(`/Employee/${id}`)


