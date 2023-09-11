import React, {useContext, useState} from 'react';

import {useInitialState} from '../../hooks/useInitialState'

const context = React.createContext();
const UseContext = () =>(useContext(context));

function GlobalContext({children}) {
    const[user,setUser] = useState('');
    const[openMenuUser, setOpenMenuUser] = useState(false);
    const[openCart, setOpenCart] = useState(false);
    const[openProduct,setOpenProduct] = useState(false);

    const {state, addToCart, removeFromCart} = useInitialState();

    const [totalMyOrder, setTotalMyOrder]= useState(0)

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
        state,
        addToCart,
        removeFromCart,
        totalMyOrder,
        setTotalMyOrder,
    }}>
        {children}
    </context.Provider>
  )
}

export  {GlobalContext,UseContext}