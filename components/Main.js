import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/HeadLine";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline
        title={props.title}
        link={props.link}
        // number="1111"
        // array={[1, 2, 3]}
        // obj={{ foo: "foo", baa: "baa" }}
        // boolean={true}
        // code={<code className={styles.code}>pages/index.js</code>}
      >
        <code className={styles.code}>pages/{props.title}.js</code>
      </Headline>

      <Links />
    </main>
  );
}
