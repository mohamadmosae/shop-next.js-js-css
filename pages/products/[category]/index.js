import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import products from "../../../db.json";
import ProductCart from "@/Components/ProductCart/ProductCart";

export default function ShowProductsByCategory() {
  const { category } = useRouter().query;
  const [items,setitems]=useState(products[category])

  const [searchkey,setsearchkey]=useState(null)
useEffect(()=>{
const searchedproducs=products[category]?.filter(item=>item.text.includes(searchkey))
setitems(searchedproducs)
},[searchkey]) 
useEffect(()=>{
setitems(products[category])
setsearchkey("")
},[category])

  return (
    <div className="container"style={{textAlign:"center"}}>
      <form  >
        <input type="text" placeholder="دنبال چی میگردی؟" style={{ all:"unset",width:"40%",height:"40px",background:"#fff" ,borderRadius:"10px",padding:"5px 10px",fontSize:"16px",border:"none",margin:"30px auto",textAlign:"right"}} onChange={(x)=>setsearchkey(x.target.value)} value={searchkey}/>
      </form>
      <h1>
        {
        items?.length>0?category:   "محصولی با این مشخصات وجود ندارد"
        }
      </h1>
      <div className="row">
        {items?.map((items) => {
          return (
            <div className="col">
              <ProductCart key={items.id} {...items} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
