import axios from "axios";

const KEY = "AIzaSyDVlU6CWxuPk1PDZXWQWnyyzQfoIsKgIbU";

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: KEY
};

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3"
});
