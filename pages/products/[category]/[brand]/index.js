import { useRouter } from 'next/router'
import React from 'react'

export default function ShowProductsBybrands() {
      const route=useRouter()
      const brand= route.query.brand
      const category= route.query.category
  return (
    <div>
      <h1>ShowProductsBybrands:{brand}-from-{category}</h1>
    </div>
  )
}
