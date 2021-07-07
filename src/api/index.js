import axios from 'axios';
import store from '../redux/reduxStore';
const BASE_URL = 'http://localhost:8080';

const axiosObj = axios.create({
  baseURL: BASE_URL,
});

const listener = () => {
  const token = store.getState().auth.token;

  axios.defaults.headers['Authorization'] = token ? 'Bearer ' + token : null;
};
store.subscribe(listener);

export default axiosObj;
