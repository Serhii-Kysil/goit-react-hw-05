import { NavLink } from "react-router-dom";
import css from "./AdditionalInfo.module.css";

export const AdditionalInfo = () => {
  return (
    <>
      <hr></hr>
      <div className={css.cont}>
        <p className={css.subTitle}>Additional information</p>
        <ul className={css.list}>
          <li>
            <NavLink to="cast" className={css.link}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={css.link}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <hr></hr>
    </>
  );
};
