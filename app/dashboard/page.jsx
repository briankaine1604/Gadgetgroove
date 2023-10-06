"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image';

const Page = () => {
  const {status, data: session } = useSession();
  return (
    <div>

{session ? (


          <div className='p-5'>
            <div className='flex place-items-center'>
                <div className='text-sm font-bold mr-3'>Hello, {session?.user?.name}</div>
              
              <Image
                src={session?.user?.image}
                width={30}
                height={30}
                alt='User Profile Picture'
                className='rounded'
              />

            
            </div>
            </div>
           
          ) : null}

    </div>
  )
}

export default Page