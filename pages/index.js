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
<<<<<<< Updated upstream
  //const [content, setContent] = useState([]);
  const content = [{title: "Cat1", src:"pages/placeholder.jpeg"},{title: "Cat2", src:"placeholder.jpg"},{title: "Cat3", src:"placeholder.jpg"}]

  /*useEffect(function() {
    fetch("").then(res => res.json()).then(data => setContent(data))
  }, []) */
=======
  const{user}=useUser();
  console.log(user);
>>>>>>> Stashed changes

  return (
    
    <div className={styles.container}>
<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
        <MainLayout/>
    </div>
    
  )
  
}
