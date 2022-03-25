import '../styles/globals.css'
import 'antd/dist/antd.css'
import { ReactDOM } from 'react'
import useSWR, { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }) {
  return <SWRConfig 
  value={{
    fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
  }}
> <Component {...pageProps} /> </SWRConfig>
}

export default MyApp
