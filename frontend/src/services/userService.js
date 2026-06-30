import axios from "axios";

// const BASE_URL = "http://localhost:5000/users";
const BASE_URL = "http://192.168.31.123:5000/users";
export const saveUser = (user) => {
    return axios.post(BASE_URL, user);
};
export const getUsers = () => {
    return axios.get(BASE_URL);
};