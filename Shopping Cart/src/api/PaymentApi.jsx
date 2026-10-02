import axios from "axios";


const API =  axios.create({
    baseURL: "http://localhost:3000"
})

export const getPayments = () => API.get("/payment");

export const postPayments = (payload) => API.post("/payment",payload)

export const deletePayments = (id) => API.delete(`/payment/${id}`)