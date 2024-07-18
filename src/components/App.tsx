import classes from "./App.module.scss";

export const App = () => {
  return (
    <div>
      <button className={classes.button}>
        <span>Клик</span>
      </button>
    </div>
  );
};
