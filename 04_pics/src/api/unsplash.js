import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 8f963700517eb3bed42120eef3cb86dbe68052ea1f6cb81797e1a4761195e9cb"
    }
});
