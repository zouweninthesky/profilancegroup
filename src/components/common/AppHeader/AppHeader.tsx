import React from "react";
import { NavLink } from "react-router-dom";
import "./AppHeader.scss";

import Icon from "../Icon/Icon";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/redux";
import { signedOut } from "../../../features/auth/auth-slice";
import { modalIdChanged } from "../../../features/global/global-slice";

const AppHeader = () => {
  const dispatch = useAppDispatch();
  // const { modalId } = useAppSelector((state) => state.global);
  const { userName } = useAppSelector((state) => state.auth);

  const handleLogin = () => {
    if (userName) dispatch(signedOut());
    else dispatch(modalIdChanged("login"));
  };

  return (
    <header className="header">
      <NavLink to="/" end>
        <Icon id="main-logo" width={257} height={48} />
      </NavLink>
      <NavLink to="/news">Новости</NavLink>
      <div className="header__button-wrapper">
        <button type="button" onClick={handleLogin}>
          {userName ? "Выйти" : "Войти"}
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
