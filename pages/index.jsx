import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      console.log("count アンマウント", count);
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header></Header>
      <h1>{count}</h1>
      <button onClick={handleClick}>button</button>

      <Main title="index" link="about" />

      <Footer />
    </div>
  );
}
