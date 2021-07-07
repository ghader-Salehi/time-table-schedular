import {LOG_IN,LOG_OUT} from '../../constants/ActionTypes'

export const LoginAction = (token,user) => {
        localStorage.setItem('token' , JSON.stringify(token))
        localStorage.setItem('user' , JSON.stringify(user))
    return{
        type:LOG_IN,
        payload:{
            token,
            user
        }
    }
}

export const LogoutAction = ()=>{
    localStorage.clear();

    return {
        type : LOG_OUT,
        payload:{}
    }

}
