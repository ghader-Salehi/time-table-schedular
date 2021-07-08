import {createContext,useState} from 'react';

const UserContext = createContext()

const initialState = {
   user:{}
}


const UserWrapper = ({children})=>{
    const [user,setUser] = useState(initialState)

    return(
        <UserContext.Provider value={[user,setUser]}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserWrapper}