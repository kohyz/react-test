import { Link } from "react-router-dom";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

function MeetupItem(props) {
  // passing in props as object and generating dynamiclly
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>
            <Link to="/favourites">To Favourites</Link>
          </button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
