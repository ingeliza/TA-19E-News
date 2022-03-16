import '../styles/globals.css'
import 'antd/dist/antd.css'
import { UserProvider } from '@auth0/nextjs-auth0';
import { ReactDOM } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
    <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp
