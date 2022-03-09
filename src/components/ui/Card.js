import classes from "./Card.module.css";

function Card(props) {
  // apply css to all children
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
