import Link from "next/link";

import classes from "./button.module.css";

// This button component should either render a link or a normal button.
//And it should render a link if the prop is set, if is not set it should render a norlam button
// so we need to check

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Button;
