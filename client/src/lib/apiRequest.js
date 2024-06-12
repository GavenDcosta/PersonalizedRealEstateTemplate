import axios from "axios"

const apiRequest = axios.create({
    baseURL: "https://mandg-personalized-real-estate-api.vercel.app/api",
    withCredentials: true,
})

export default apiRequest