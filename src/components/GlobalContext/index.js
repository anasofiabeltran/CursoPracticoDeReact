import React, {useContext, useState} from 'react';

const context = React.createContext();
const UseContext = () =>(useContext(context));

function GlobalContext({children}) {
    const[user,setUser] = useState('')
    const[openMenuUser, setOpenMenuUser] = useState(false)

  return (
    <context.Provider value={{
        user,
        setUser,
        openMenuUser,
        setOpenMenuUser,
    }}>
        {children}
    </context.Provider>
  )
}

export  {GlobalContext,UseContext}