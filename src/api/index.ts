import axios from "axios";

// const url = "https://cors-anywhere.herokuapp.com";
const proxy = process.env.REACT_APP_PROXY || "";
const jobsApi = "https://jobs.github.com/positions.json";

const api = axios.create({
    baseURL: proxy + jobsApi
})

export default api;