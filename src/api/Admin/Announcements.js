import { axiosObj } from "../index";
import store from "../../redux/reduxStore";

const API = "/api";

const token = store.getState().auth.token;
axiosObj.defaults.headers["Authorization"] = `${token}`;

export const getAnnouncementsList = async()=>{
    return await axiosObj.get(`${API}/announcements`)
}
export const createAnnouncement = async(data)=>{
    return await axiosObj.post(`${API}/announcements`,data)
}
