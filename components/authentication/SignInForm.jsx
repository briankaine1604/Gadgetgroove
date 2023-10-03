"use client"
import Link from 'next/link'
//import { useSession } from 'next-auth/react'
import { useState } from 'react';
//import { useRouter } from 'next/navigation';


const SignInForm = () => {

  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [error,setError]= useState("");

  //const router= useRouter();

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try{
      const res= await signIn('credentials',{
        email,password, redirect:false
      });

      if (res.error){
        setError("Invalid Credentials");
        return;
      }
      
    }catch(error){
      console.log('error', error)
    }
  }

  return (
    <form onSubmit={handleSubmit}  className='p-3 grid rounded-lg place-items-center gap-4 glass'>
      <span>Enter your details</span>
      <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Email' className='rounded p-2' required/>
      <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Password' className='rounded p-2' required/>
      <button className='py-2 px-3 rounded-md shadow-lg bg-blue-400 text-lg hover:bg-blue-500 text-white transit relative'>
        <span className=''>Log in</span>
      </button>
      {error && ( <div className='bg-red-600 p-2 rounded text-center font-semibold text-white text-sm'>{error}</div>)}
      <Link href='#' className='text-sm font-bold text-gray-500'>Don't have an account yet? <span className='underline'>Register</span></Link>
    </form>
  )
}

export default SignInForm