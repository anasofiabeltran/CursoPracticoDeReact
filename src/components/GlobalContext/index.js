import React, {useContext, useState} from 'react';

const context = React.createContext();
const UseContext = () =>(useContext(context));

function GlobalContext({children}) {
    const[user,setUser] = useState('');
    const[openMenuUser, setOpenMenuUser] = useState(false);
    const[openCart, setOpenCart] = useState(false);
    const[openProduct,setOpenProduct] = useState(false);

  return (
    <context.Provider value={{
        user,
        setUser,
        openMenuUser,
        setOpenMenuUser,
        openCart,
        setOpenCart,
        openProduct,
        setOpenProduct,
    }}>
        {children}
    </context.Provider>
  )
}

export  {GlobalContext,UseContext}