import React, { useState } from 'react'

const initialState = {
    cart:[],
}

const useInitialState= () =>{
    const [state,setState]= useState(initialState);

    const addToCart = (product) =>{
        setState(
            {
                ...state,
                cart:[...state.cart,product]
            }
        );
    };

    const removeFromCart = (paylad) =>{
        setState({
           ...state,
           cart: state.cart.filter(item => item.props.id != paylad) 
        })
    }

    return {
        state,
        addToCart,
        removeFromCart,
    }
}

export {useInitialState}