import axios from 'axios';

const API = axios.create({
    baseURL:"http://localhost:3000"
})

export const getUsers = () => API.get("/users");

export const createUsers = (data) => API.post("/users",data)

export const updateUsers = (editingid,updated) => API.put(`/users/${editingid}`,updated)

export const deleteUsers = (id) => API.delete(`/users/${id}`)