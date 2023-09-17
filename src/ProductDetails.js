import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './components/Product'

export default function ProductDetails() {
    const params=useParams()
    const [product,setProduct]=useState({})
    const api_url='https://fakestoreapi.com/products'
    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`)
        .then((res)=>res.json())
        .then((product)=>setProduct(product))
    },[])
  return (
    <Product product={product} showButton={false}/>
  )
}

