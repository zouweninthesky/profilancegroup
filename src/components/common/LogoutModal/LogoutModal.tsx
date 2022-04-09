import React, { FormEvent } from "react";
import Modal from "../modals/Modal";

import { useAppDispatch } from "../../../app/hooks/redux";
import { signedOut } from "../../../features/auth/auth-slice";
import { modalIdChanged } from "../../../features/global/global-slice";

const LogoutModal = () => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(modalIdChanged(""));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(signedOut());
    dispatch(modalIdChanged(""));
  };

  return (
    <Modal>
      <h2 className="modal__header">Вы уверены, что хотите выйти?</h2>
      <form action="" onSubmit={handleSubmit}>
        <button type="button" onClick={handleClose}>
          Я передумал
        </button>
        <button type="submit">Подтвердить</button>
      </form>
    </Modal>
  );
};

export default LogoutModal;
