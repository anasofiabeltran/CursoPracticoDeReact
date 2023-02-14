import React, { useEffect, useState } from 'react'

import axios from "axios";

const useGetProducts = (API) =>{
    const [products, setProducts]= useState([]);

  
    useEffect(async ()=>{
      const response = await axios.get(API).then((res)=>{
      setProducts(res.data)
      })
    },[]);

    return products
}

export {useGetProducts}