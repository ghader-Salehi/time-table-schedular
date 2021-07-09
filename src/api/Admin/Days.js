import { axiosObj } from "../index";
import store from "../../redux/reduxStore";

const API = "/api";

const token = store.getState().auth.token;
axiosObj.defaults.headers["Authorization"] = `${token}`;

export const createDay = async(data)=>{
        return await axiosObj.post(`${API}/days`,data)
}
export const deleteDay = async(id)=>{
    return await axiosObj.delete(`${API}/days/${id}`)
}
export const getListOfDays = async()=>{
    return await axiosObj.get(`${API}/days`)
}
export const getDayById = async(id)=>{
    return await axiosObj.get(`${API}/days/${id}`)
}