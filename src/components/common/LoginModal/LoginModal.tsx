import React, { FormEvent, useState, useEffect } from "react";
import Modal from "../Modal/Modal";

import { useAppDispatch, useAppSelector } from "../../../app/hooks/redux";
import { loggedIn, errorOccured } from "../../../features/auth/auth-slice";
import { modalIdChanged } from "../../../features/global/global-slice";
import users from "../../../utils/users";
import { ERROR_CREDENTIALS } from "../../../utils/error-codes";

const LoginModal = () => {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (login !== "" && password !== "") setFormValid(true);
    else setFormValid(false);
  }, [login, password]);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const userObj = users.find((user) => user.login === login);
    if (!userObj || userObj.password !== password)
      dispatch(errorOccured(ERROR_CREDENTIALS));
    else {
      dispatch(loggedIn(userObj));
      dispatch(errorOccured(""));
      dispatch(modalIdChanged(""));
    }
  };

  return (
    <Modal>
      <h2 className="modal__header">Войти</h2>
      <form action="" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="login">Логин</label>
          <input id="login" type="text" onChange={handleLoginChange} />
        </div>
        <div className="input">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            onChange={handlePasswordChange}
          />
        </div>
        {error === ERROR_CREDENTIALS && (
          <p className="modal__error">Неверные данные</p>
        )}
        <button className="button" type="submit" disabled={!formValid}>
          Подтвердить
        </button>
      </form>
    </Modal>
  );
};

export default LoginModal;
