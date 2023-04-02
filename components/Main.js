import classes from "./Main.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline
        title={props.title}
        link={props.link}
        // number="1111"
        // array={[1, 2, 3]}
        // obj={{ foo: "foo", baa: "baa" }}
        // boolean={true}
        // code={<code className={classes.code}>pages/index.js</code>}
      >
        <code className={classes.code}>pages/{props.title}.js</code>
      </Headline>

      <Links />
    </main>
  );
}
