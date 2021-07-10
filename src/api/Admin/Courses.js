import { axiosObj } from "../index";
import store from "../../redux/reduxStore";

const API = "/api";

const token = store.getState().auth.token;
axiosObj.defaults.headers["Authorization"] = `${token}`;

export const getListOfCourses = async()=>{
    return await axiosObj.get(API+'/courses')
}
export const getCourseById = async(id)=>{
    return await axiosObj.get(`${API}/courses/${id}`)
}
export const deleteCourse = async(id)=>{
    return await axiosObj.delete(`${API}/courses/${id}`)
}
export const createCourse = async(data)=>{
    return await axiosObj.post(`${API}/courses`,data)
}
export const getCourseTimeTable = async(id)=>{
    return await axiosObj.get(`${API}/courses/${id}/timetables`)
}

export const getCourseMasters = async(id)=>{
    return await axiosObj.get(`${API}/courses/${id}/masters`)
}

export const chooseCourseByMaster = async(id,data)=>{
    return await axiosObj.post(`${API}/courses/${id}/choose`,data)
}


export const chooseTimeTableByMaster = async(id,data)=>{
    return await axiosObj.post(`${API}/timetables/${id}/choose`,data)
}

