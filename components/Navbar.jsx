"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'

const Navbar = () => {
  const { data: session } = useSession();
  const currentRoute = usePathname();

  // Function to determine if a link is active


  return (
    <div className='w-44 h-full bg-gray-200 flex flex-col shadow rounded-2xl'>

      <div className='flex h-fit'>
        <Link href='/'>
          <Image
            src={'/Gadget.png'}
            width={100}
            height={100}
            alt='User Profile Picture'
            className='h-fit'
          />
        </Link>
        {session?(<button className='flex flex-col border w-fit h-fit' onClick={() => signOut()}>
          <Image
            src={session?.user?.image}
            width={30}
            height={30}
            alt='User Profile Picture'
            className='rounded-full'
          />
        </button>):(null)}
      </div>

      <div className='flex flex-col'>
        <Link href='/admin'className={currentRoute==='/admin' ? 'active-link':'' }>Admin
        </Link>
        <Link href='/dashboard' className={currentRoute==='/dashboard' ? 'active-link':'' }>Dashboard
        </Link>
        <Link href='/products'className={currentRoute==='/products' ? 'active-link':'' }>Product
        </Link>
        <Link href='/orders' className={currentRoute==='/orders' ? 'active-link':'' }>Orders
        </Link>
        <Link href='/adminSettings'className={currentRoute==='/adminSettings' ? 'active-link':'' }>Settings
        </Link>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>

    
    </div>
  )
}

export default Navbar
