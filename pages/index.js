import styles from '../styles/Home.module.css'
import MainLayout from '../resources/layouts/main_layout'
import useSWR from 'swr'


export default function Home() {
  return (
    <div className={styles.container}>

        <MainLayout/>
    </div>
  );
}
