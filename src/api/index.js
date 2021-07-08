import axios from 'axios';
import store from '../redux/reduxStore';
const BASE_URL = 'http://localhost:8080';

const axiosObj = axios.create({
  baseURL: BASE_URL,
});

const listener = () => {
  const token = store.getState().auth.token;


  axios.defaults.headers['Authorization'] = token ?  token : null;
  console.log(axios.defaults);
};
store.subscribe(listener);

export {axiosObj};
