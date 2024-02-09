import { NavLink, useLocation } from "react-router-dom";
import css from "./HomePageBtn.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRef } from "react";

export default function HomePageBtn() {
  const location = useLocation();
  const backRef = useRef(location.state);

  return (
    <NavLink to={backRef.current ?? "/"} className={css.link}>
      <IoIosArrowRoundBack />
      Go Back
    </NavLink>
  );
}
