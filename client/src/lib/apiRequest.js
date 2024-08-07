import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://easy-estate-finder-backend.onrender.com/api/",
    withCredentials: true,
});

export default apiRequest;
