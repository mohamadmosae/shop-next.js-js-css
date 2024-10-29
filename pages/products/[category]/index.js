import { useRouter } from 'next/router'
import React from 'react'

export default function ShowProductsByCategory() {
      const route=useRouter()
  const category= route.query.category
      
  return (
    <div>
      <h1>ShowProductsByCategory:{category}</h1>
    </div>
  )
}
