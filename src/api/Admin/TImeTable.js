import { axiosObj } from "../index";
import store from "../../redux/reduxStore";
import axios from "axios";

const API = "/api";

const token = store.getState().auth.token;
axiosObj.defaults.headers["Authorization"] = `${token}`;

export const getTimeTablesList = async()=>{
    return await axiosObj.get(`${API}/timetables`)
}

export const getTimeTableById = async(id)=>{
    return await axiosObj.get(`${API}/timetables/${id}`)
}
export const startProcces = async()=>{
    return await axiosObj.post(`${API}/timetables/StartProcess`)
}

export const chooseTimeTableByStudent = async(id,data)=>{
    return await axiosObj.post(`${API}/timetables/${id}/choose`,data)
}

export const getTodayClasses = async()=>{
    return await axiosObj.get(`${API}/timetables/todayClasses`)
}