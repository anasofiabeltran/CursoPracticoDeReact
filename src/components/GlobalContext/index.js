import React, {useContext, useState} from 'react';

const context = React.createContext();
const UseContext = () =>(useContext(context));

function GlobalContext({children}) {
    const[user,setUser] = useState('')

  return (
    <context.Provider value={{
        user,
        setUser,
    }}>
        {children}
    </context.Provider>
  )
}

export  {GlobalContext,UseContext}