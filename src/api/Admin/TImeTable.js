import { axiosObj } from "../index";
import store from "../../redux/reduxStore";

const API = "/api";

const token = store.getState().auth.token;
axiosObj.defaults.headers["Authorization"] = `${token}`;

export const getTimeTablesList = async()=>{
    return await axiosObj.get(`${API}/timetables`)
}

export const getTimeTableById = async(id)=>{
    return await axiosObj.get(`${API}/timetables/${id}`)
}
