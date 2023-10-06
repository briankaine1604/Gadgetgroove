"use client"
import SignInGoogle from './SignInGoogle'
import SignInForm from './SignInForm'
import { useSession, signOut } from 'next-auth/react'
import HomePage from '@components/HomePage'
import { ThreeDots } from  'react-loader-spinner'

const LandingPage = () => {
  const{status, data:session}= useSession();
  if (status==='authenticated'){
    return(
      <HomePage/>
    )
  }if (status==='loading') {
    return(
      <div className='flex place-items-center'>
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#00000" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
        />
      </div>
    )
  }  
  else{
    return (
      <div className='w-auto h-auto grid'>
      <SignInGoogle/>
      <div className='text-center my-5 relative flex  h-10'>
        <div className='border-t border border-gray-400 w-24 absolute top-5  '></div>
        <div className='absolute top-2 left-0 right-0 mx-auto'>OR</div>
        <div className='border-t border border-gray-400 w-24 absolute top-5 right-0 '></div></div>
        <SignInForm/>
      </div>
    )
  }
  
}

export default LandingPage