import { axiosObj } from "../index";
import store from "../../redux/reduxStore";

const API = "/api";

const token = store.getState().auth.token;
axiosObj.defaults.headers["Authorization"] = `${token}`;


export const createBell = async(data)=>{
    return await axiosObj.post(`${API}/bells`,data)
}
export const deleteBell = async(id)=>{
return await axiosObj.delete(`${API}/bells/${id}`)
}
export const getListOfBells = async()=>{
return await axiosObj.get(`${API}/bells`)
}
export const getBellById = async(id)=>{
return await axiosObj.get(`${API}/bells/${id}`)
}