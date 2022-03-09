import classes from "./Layout.module.css";
import MainNavigation from "./MainNavgiation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />

      {/* Must assign props.children for css to apply to all children */}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
