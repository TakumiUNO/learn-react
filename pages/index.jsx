import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect } from "react";

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    console.log("マウント");
    return () => {
      document.body.style.backgroundColor = "";
      console.log("アンマウント");
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      <Header></Header>
      <a href="/about" onClick={handleClick}>
        button
      </a>

      <Main title="index" link="about" />

      <Footer />
    </div>
  );
}
