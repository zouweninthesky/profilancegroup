import React from "react";
import { NavLink } from "react-router-dom";
import "./AppHeader.scss";

import Icon from "../Icon/Icon";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/redux";
import { modalIdChanged } from "../../../features/global/global-slice";
import { MODAL_LOGIN, MODAL_LOGOUT } from "../../../utils/modal-ids";

const AppHeader = () => {
  const dispatch = useAppDispatch();
  const { userName } = useAppSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(modalIdChanged(userName ? MODAL_LOGOUT : MODAL_LOGIN));
  };

  return (
    <header className="header">
      <NavLink to="/" end>
        <Icon id="main-logo-lion" width={257} height={48} />
        <Icon id="main-logo-text" width={257} height={48} />
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
