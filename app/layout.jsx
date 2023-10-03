import Navbar from '@components/Navbar'
import '@styles/global.css'
import NextAuthProvider from './Provider'

const RootLayout = ({children}) => {
  return (
    <html>
       <body className='flex h-screen w-full'>
        <NextAuthProvider>
          <Navbar/>
        {children}
        </NextAuthProvider>
        </body>
    </html>
  )
}

export default RootLayout