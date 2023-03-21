import styles from "../styles/Home.module.css";

export function Headline(props) {
  let link = props.link;
  if (props.link == "index") {
    link = "/";
  }
  console.log(props);

  return (
    <div className={styles.Headline}>
      <h1 className={styles.title}>{props.title} Page</h1>

      <a href={link}>{props.link}</a>

      <p className={styles.description}>
        Get started by editing
        {/* <code className={styles.code}>pages/{props.link}.js</code> */}
        {props.children}
      </p>
    </div>
  );
}