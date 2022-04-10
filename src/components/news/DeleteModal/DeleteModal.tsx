import React, { FormEvent } from "react";

import Modal from "../../common/Modal/Modal";
import { useAppDispatch } from "../../../app/hooks/redux";
import { newsArticleDeleted } from "../../../features/news/news-slice";
import { modalIdChanged } from "../../../features/global/global-slice";

const LogoutModal = () => {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(modalIdChanged(""));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(newsArticleDeleted());
    dispatch(modalIdChanged(""));
  };

  return (
    <Modal>
      <h2 className="modal__header">
        Вы уверены, что хотите удалить эту новость?
      </h2>
      <p className="modal__hint">Это действие необратимо</p>
      <form action="" onSubmit={handleSubmit}>
        <button className="button" type="button" onClick={handleClose}>
          Я передумал
        </button>
        <button className="button" type="submit">
          Подтвердить
        </button>
      </form>
    </Modal>
  );
};

export default LogoutModal;
