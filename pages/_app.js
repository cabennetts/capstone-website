import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'
import Loader from '@components/Loader'
// import { UserContext } from '../lib/context'
// import { useUserData } from '../lib/hooks'

export default function App({ Component, pageProps }) {
  // const userData = useUserData()
  return (
    <>
    {/* // <UserContext.Provider value={ userData }> */}
      <Navbar />
      <Component {...pageProps} />
      <Loader />
     {/* </UserContext.Provider> */}
    </>
  )
}
