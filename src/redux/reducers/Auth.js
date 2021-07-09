import {LOG_IN,LOG_OUT} from '../../constants/ActionTypes'


const initialState = {
    token:JSON.parse(localStorage.getItem('token')),
    user:JSON.parse(localStorage.getItem('user'))
}

const Auth  = (state = initialState , action)=>{
    switch(action.type){

        case LOG_IN:
            return {
               ...action.payload
            }
        case LOG_OUT:
            return { token: null, user: null };
        
        case 'UPDATE_LOGGED_USER':
            return {...state , user:action.payload};

        default :
            return state;
    }


}

export default Auth;