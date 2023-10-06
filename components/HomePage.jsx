import Link from 'next/link'
import React from 'react'


const HomePage = () => {

  const links = [
    {id:1, route:'/admin', name:'Admin'},
    {id:2, route:'/dashboard', name:'Dashboard'},
    {id:3, route:'/orders', name:'Orders'},
    {id:4, route:'/products', name:'Products'},
    {id:5, route:'/adminSettings', name:'Settings'},
  ]
  return (
    <div className='w-full h-screen'>
      <div className='grid grid-cols-3 p-5 gap-10 mt-5 '>
       {links.map(({name,route,id})=>(
         <div className='border flex items-center justify-center row-span-3' key={id}><Link href={route} className='border'>{name}</Link></div>
       ))}
         </div>
    </div>
  )
}

export default HomePage