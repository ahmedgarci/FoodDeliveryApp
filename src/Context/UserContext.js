import { createContext, useState} from "react";

const userContext = createContext()
function UserContextProvider({children}){
    var [user,setUserInfo] = useState(null)

    return(
        <userContext.Provider value={{user,setUserInfo}}>
            {children}
        </userContext.Provider>

    )
}

export {userContext,UserContextProvider}