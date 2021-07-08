import { axiosObj } from "../index";
import store from "../../redux/reduxStore";

const API = "/api";

const token = store.getState().auth.token;
axiosObj.defaults.headers["Authorization"] = `${token}`;

export const getListOfCourses = async()=>{
    return await axiosObj.get(API,'/courses')
}
export const getCourseById = async(id)=>{
    return await axiosObj.get(`${API}/courses/${id}`)
}
export const deleteCourse = async(id)=>{
    return await axiosObj.delete(`${API}/courses/${id}`)
}