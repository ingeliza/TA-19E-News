import { PrismaClient } from "@prisma/client";
import { getLocationOrigin } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import Login from "./login-panel";
// import prisma from "../prisma/seed";
export async function getServerSideProps() {
  const prisma = new PrismaClient();
  let content = await prisma.news.findMany({});
  for (const n of content) {
    n.release_date = n.release_date.toString();
  }
  console.log(content);
  return {
    props: {
      content,
    },
  };
}

export default function Home({ content }) {
  //const [content, setContent] = useState([]);
  // <div>
  // {content.map(news=>(
  //             <h2>{content.news_title}</h2>
  //             <p>{content.news_content}</p>
  //               ))}
  //               </div>
  // const news = [
  //   { title: content1.news_title, content: content1.news_content },
  //   { title: "Cat2", src: "placeholder.jpg" },
  //   { title: "Cat3", src: "placeholder.jpg" },
  // ];

  /*useEffect(function() {
    fetch("").then(res => res.json()).then(data => setContent(data))
  }, []) */

  return (
    <div className={styles.container}>
      <Head>
        <title>News</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">News</a>!
        </h1>

        <p className={styles.description}>News for You!</p>

        <div id="newsarray" className={styles.grid}>
          {content.map((news) => (
            <div key={news.id}>
              <h2>{news.news_title}</h2>
              <p>{news.news_content}</p>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={() => {
              window.location.href = "/login-panel";
            }}
          >
            Log In
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}