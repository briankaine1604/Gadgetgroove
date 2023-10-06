"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'


const Navbar = () => {
  const {status, data: session } = useSession();
  const currentRoute = usePathname();
  const router= useRouter();

  
    
    
  
  
  
  // Check if the status is 'authenticated' to render the navbar
  if (status ==='authenticated') {
    return (
      <div className='w-1/5  h-full bg-gray-200 flex flex-col  rounded'>

        <div className='flex h-fit mx-auto mb-5'>
          <Link href='/'>
            <Image
              src={'/Gadget.png'}
              width={100}
              height={100}
              alt='User Profile Picture'
              className='h-fit'
            />
          </Link>
         
        </div>

        <div className='flex flex-col gap-3'>
        <Link href='/' className={currentRoute === '/' ? 'active-link' : ''}>Home</Link>
          <Link href='/admin' className={currentRoute === '/admin' ? 'active-link' : ''}>Admin</Link>
          <Link href='/dashboard' className={currentRoute === '/dashboard' ? 'active-link' : ''}>Dashboard</Link>
          <Link href='/products' className={currentRoute === '/products' ? 'active-link' : ''}>Product</Link>
          <Link href='/orders' className={currentRoute === '/orders' ? 'active-link' : ''}>Orders</Link>
          <Link href='/adminSettings' className={currentRoute === '/adminSettings' ? 'active-link' : ''}>Settings</Link>
          <button className='btn mx-auto' 
          onClick={()=>signOut()}>Sign Out</button>
        </div>

      </div>
    );
  }
  
  if(status==='unauthenticated') {
    
    // Check if we're in a client-side context before using router.push('/')
    if (typeof window !== 'undefined') {
      router.push('/');
    }
    // You can also return null or a loading indicator if needed.
    return null;
  }
}

export default Navbar;
