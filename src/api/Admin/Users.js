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

export const deleteUser = async (id) => {
  return await axiosObj.delete(`${API}/users/${id}`);
};

export const updateUser = async (id,data) => {
  return await axiosObj.patch(`${API}/users/${id}`,data);
};


export const createUser = async (data) => {
  return await axiosObj.post(`${API}/users/add`,data);
};
