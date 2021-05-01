import axios from "axios";
const BASE_URL = "http://localhost:4000";

const getItems = () => {
    return axios.get(`${BASE_URL}/products`)
}


export { getItems };