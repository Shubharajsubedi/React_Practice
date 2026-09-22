import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
});

// READ (GET all notes)
export const getPostAdmin = () => API.get('/admin');

// CREATE (POST a new note)
export const createPostAdmin = (noteData) => API.post('/admin', noteData);

// UPDATE (PUT/PATCH an existing note by ID)
export const updatePostAdmin = (id, updatedData) => API.put(`/admin/${id}`, updatedData);

// DELETE (DELETE a note by ID)
export const deletePostAdmin = (id) => API.delete(`/admin/${id}`);
