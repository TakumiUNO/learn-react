import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 10) {
      alert("10文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback((e) => {
    setIsShow((isShow) => !isShow);
  }, []);

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

      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>button</button>
      <button onClick={handleDisplay}>{isShow ? "表示" : "非表示"}</button>
      <input type="text" value={text} onChange={handleChange} name="" id="" />

      <Main title="index" link="about" />

      <Footer />
    </div>
  );
}
