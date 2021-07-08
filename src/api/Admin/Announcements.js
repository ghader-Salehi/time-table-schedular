import { axiosObj } from "../index";
import store from "../../redux/reduxStore";

const API = "/api";

const token = store.getState().auth.token;
axiosObj.defaults.headers["Authorization"] = `${token}`;

export const getAnnouncementsList = async()=>{
    return await axiosObj.get(`${API}/announcements`)
}