import React, { useState, useEffect, FormEvent } from "react";

import Modal from "../../common/modal/Modal";
import { useAppDispatch } from "../../../app/hooks/redux";
import { newsArticleCreated } from "../../../features/news/news-slice";
import { modalIdChanged } from "../../../features/global/global-slice";

const CreateModal = () => {
  const dispatch = useAppDispatch();

  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (header !== "" && content !== "") setFormValid(true);
    else setFormValid(false);
  }, [header, content]);

  const handeHeaderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeader(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newArticle = {
      id: Date.now(),
      header,
      content,
      date: Date.now(),
      isPublished: false,
    };
    dispatch(newsArticleCreated(newArticle));
    dispatch(modalIdChanged(""));
  };

  return (
    <Modal>
      <h2>Создать новость</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="header">Заголовок</label>
          <input
            value={header}
            id="header"
            type="text"
            onChange={handeHeaderChange}
          />
        </div>
        <div>
          <label htmlFor="content">Содержание</label>
          <div className="modal__trick" data-replicated-value={content}>
            <textarea
              rows={1}
              id="content"
              value={content}
              onChange={handleContentChange}
            ></textarea>
          </div>
        </div>
        <button disabled={!formValid}>Создать новость</button>
      </form>
    </Modal>
  );
};

export default CreateModal;
