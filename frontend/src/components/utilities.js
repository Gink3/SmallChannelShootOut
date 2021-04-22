import axios from "axios";

export const Post = (url, valObject) =>{
    return axios.post(url, valObject);
}

export const Get = (url) =>{
    return axios.get(url);
}

export const Put = (url, valObject) =>{
    return axios.put(url, valObject);
}

export const Patch = (url, valObject) =>{
    return axios.patch(url, valObject);
}