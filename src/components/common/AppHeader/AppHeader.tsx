import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./AppHeader.scss";

import Icon from "../Icon/Icon";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/redux";
import { modalIdChanged } from "../../../features/global/global-slice";
import { disableScroll, enableScroll } from "../../../utils/disable-scroll";
import { MODAL_LOGIN, MODAL_LOGOUT } from "../../../utils/modal-ids";

const AppHeader = () => {
  const dispatch = useAppDispatch();
  const { userName } = useAppSelector((state) => state.auth);

  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    if (menuOpened) disableScroll();
    else enableScroll();
  }, [menuOpened]);

  const handleLogin = () => {
    dispatch(modalIdChanged(userName ? MODAL_LOGOUT : MODAL_LOGIN));
  };

  const handleMenuToggle = () => {
    setMenuOpened((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpened(false);
  };

  return (
    <header className={menuOpened ? "header header--opened" : "header"}>
      <div className="header__logo-wrapper">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
          end
          onClick={handleMenuClose}
        >
          <Icon id="main-logo-lion" width={257} height={48} />
          <Icon id="main-logo-text" width={257} height={48} />
        </NavLink>
      </div>
      <div className="header__links-wrapper">
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
          onClick={handleMenuClose}
        >
          Новости
        </NavLink>
      </div>
      <div className="header__button-wrapper">
        <button className="button" type="button" onClick={handleLogin}>
          {userName ? "Выйти" : "Войти"}
        </button>
      </div>
      <button
        type="button"
        className="header__menu-button"
        onClick={handleMenuToggle}
      ></button>
    </header>
  );
};

export default AppHeader;
