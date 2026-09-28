import axios from 'axios';

const API = axios.create({
    baseURL:"http://localhost:3000"
})

export const getProducts = () => API.get("/products");

export const createProducts = (data) => API.post("/products",data)

export const updateProducts = (editingid,updated) => API.put(`/products/${editingid}`,updated)

export const deleteProducts = (id) => API.delete(`/products/${id}`)