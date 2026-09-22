import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000"
});


//get method

export const getPostAdmin = () => {
    return api.post("/admin")
};
