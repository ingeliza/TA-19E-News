import { getLocationOrigin } from 'next/dist/shared/lib/utils'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Login from './login-panel'
import { handler } from "./api/v1/login"
import Navbar from '../resources/components/main_layout'
import MainLayout from '../resources/components/main_layout'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'



export default function Home() {
  const{user}=useUser();
  console.log(user);

  return (
    
    <div className={styles.container}>

      <nav>
      {!user && (
        <Link href="/api/auth/login">
          <a>Logi sisse</a>
        </Link>
      )}

      {user && (
        <>
        <img src={user.picture} alt={user.name}/>
        <Link href="/api/auth/logout">
          <a>Logi välja</a>
        </Link>
        </>
        )}
      </nav>

        <MainLayout/>
    </div>
    
  )
  
}
