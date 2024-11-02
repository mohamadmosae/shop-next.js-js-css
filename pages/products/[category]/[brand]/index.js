import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import products from "../../../../db.json"
import ProductCart from '@/Components/ProductCart/ProductCart'
export default function ShowProductsBybrands() {
      const {category,brand}=useRouter().query
      const [items,setitems]=useState([])
    
      const getitems=(y)=>{
const x=products[category]?.filter(elem=>elem.brand==y)
return x
      }
      
      useEffect(()=>{
      setitems(getitems(brand))
      
      },[brand])
  return (
<div className="section">

<div className='container'>
      <h1>({brand}):{category}</h1>
<div className="row">
  {
items?.map((elem)=>{
 return <div className="col">
    <ProductCart key={elem.id} {...elem} />
  </div>
})
  }
</div>
    </div>
</div>
  )
}
