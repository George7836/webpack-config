import { Outlet } from "react-router-dom";
import classes from "./App.module.scss";
import PNG from '@/assets/1681038242chatgpt-logo-png.png'
import SVG from '@/assets/youtube-168.svg'
import SVG2 from '@/assets/youtube-168.svg?url'

export const App = () => {
  return (
    <div>
      <button className={classes.button}>
        <span>Клик</span>
      </button>
      <img src={PNG} width='40px' height='40px'/>
      <img src={SVG2} width='40px' height='40px'/>
      <SVG />
      <Outlet/>
    </div>
  );
};
