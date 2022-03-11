import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {
  const favouriteCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">React Meetups</Link>
      </div>
      <nav>
        <ul>
          <li>
            {/* its like a href */}
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourites
              <span className={classes.badge}>
                {favouriteCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
