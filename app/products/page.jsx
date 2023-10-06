import Link from 'next/link'
import React from 'react'

const Products = () => {
  return (
    <div className='p-5'>
      <Link className='bg-gray-700 rounded p-2 text-white' href='/products/newProducts'>Add new products</Link>
    </div>
  )
}

export default Products