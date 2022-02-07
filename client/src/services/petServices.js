import axios from "axios";
const apiUrl = "http://localhost:4000/api";

export function getPets() {
    return axios.get(`${apiUrl}/pets`);
}

export function addPet(pet) {
    return axios.post(`${apiUrl}/pet`, pet);
}
