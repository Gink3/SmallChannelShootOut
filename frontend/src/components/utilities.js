import axios from "axios";

export const Post = (url, valObject) =>{
    return axios.post(url, valObject);
}

export const Get = (url) =>{
    return axios.get(url);
}