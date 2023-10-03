"use client"
import Image from 'next/image'
import { signIn } from "next-auth/react"
import googleLogo from '@public/google.png'

const SignInGoogle = () => {
  return (
    <button onClick={()=>signIn('google')} className='p-3 px-5 justify-evenly rounded-md bg-white shad flex items-center'>
        Sign In with Google
        <Image
        src={googleLogo}
        width={30}
        height={30}
        alt='Google Logo'
        />
    </button>
  )
}

export default SignInGoogle