import { axiosObj } from "../index";
import store from "../../redux/reduxStore";

const API = "/api";

const token = store.getState().auth.token;
axiosObj.defaults.headers["Authorization"] = `${token}`;

export const chooseTimeTableBell = async (id, status) => {
  return await axiosObj.post(`${API}/timeTableBells/choose/${id}/${status}`)
}

export const getTimeTableBells = async () => {
  return await axiosObj.get(`${API}/timeTableBells`)
}