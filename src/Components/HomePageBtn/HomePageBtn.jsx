import { NavLink } from "react-router-dom";
import css from "./HomePageBtn.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function HomePageBtn() {
  return (
    <NavLink to="/" className={css.link}>
      <IoIosArrowRoundBack />
      Back to home page
    </NavLink>
  );
}
