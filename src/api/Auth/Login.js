import axiosObj from '../index'

const API = '/auth'

export const Login = async(username,password)=>{
        return await axiosObj.post(API + '/auth/login',{code:username,password});
}

