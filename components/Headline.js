import classes from "./Headline.module.css";

export function Headline(props) {
  let link = props.link;
  if (props.link == "index") {
    link = "/";
  }
  console.log(props);

  return (
    <div className={classes.Headline}>
      <h1 className={classes.title}>{props.title} Page</h1>

      <a href={link}>{props.link}</a>

      <p className={classes.description}>
        Get started by editing
        {/* <code className={classes.code}>pages/{props.link}.js</code> */}
        {props.children}
      </p>
    </div>
  );
}
