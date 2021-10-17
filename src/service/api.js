import axios from "axios";

const url ="http://localhost:8000/users";

export const getUsers = async (id) =>{
    
    id=id ||'';


    return await axios.get(`${url}/${id}`);
}


export const deleteUser = async (id) =>{
    return axios.delete(`${url}/${id}`);

}


export const editUser = async (id,user) =>{
    return axios.put(`${url}/${id}`, user)
}

export const addUser = async (user) => {
    return await axios.post(`${url}/add`, user);
}