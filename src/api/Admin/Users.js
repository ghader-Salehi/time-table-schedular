import { axiosObj } from "../index";
import store from "../../redux/reduxStore";

const API = "/api";

const token = store.getState().auth.token;
axiosObj.defaults.headers["Authorization"] = `${token}`;

export const getLlistOfUsers = async (role) => {
  return await axiosObj.get(`${API}/users?rule=${role}`);
};

export const getUserById = async (id) => {
  return await axiosObj.get(`${API}/users/${id}`);
};
