import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://easy-estate-finder-api.onrender.com/api",
    withCredentials: true,
});

export default apiRequest;
