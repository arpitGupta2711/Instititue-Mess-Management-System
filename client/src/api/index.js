import axios from "axios";
const API = axios.create({ baseURL: "https://imms-backend1.onrender.com" });


export const scanQr = (data) => API.post("/scan/", data);
export const viewTokens = (data) => API.post("/get-tokens/", data);
export const UpdateMenu = (data) => API.post("/update-menu", data);
