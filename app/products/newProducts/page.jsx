"use client"


import axios from "axios"
import { useState } from "react"

const NewProducts = () => {

  const[title,setTitle]= useState('')
  const[Description,setDescription]= useState('')
  const[Price,setPrice]= useState('')

 async function handleSubmit (e){
  e.preventDefault();
  const data = {title,Description,Price}
    await axios.post('/api/Products',data)
  }

  return (
    <div className='p-5 w-full h-screen '>
      <form action="" onSubmit={handleSubmit} className="flex flex-col">
      <h1 className='text-xl font-bold'>New Product</h1>
      <label htmlFor="">Product</label>
      <input 
      type="text" 
      className='w-full sm:w-1/2' 
      placeholder='New Products'
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />
      <label htmlFor="">Product Description</label>
      <input type="text" 
      className='w-full sm:w-1/2 py-3 ' 
      placeholder='Description'
      value={Description}
      onChange={(e)=>setDescription(e.target.value)}/>
      <label htmlFor="">Price in Naira </label>
      <input 
      type="text" 
      className='w-full sm:w-1/2 py-3 ' 
      placeholder='Price'
      value={Price}
      onChange={(e)=>setPrice(e.target.value)}
      />

      <button type="submit" className='btn mt-2'>save</button>
      </form>
    </div>
  )
}

export default NewProducts