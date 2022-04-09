import React, { useEffect } from "react";
import "./News.scss";

import NewsList from "./NewsList/NewsList";
import Search from "./Search/Search";
import NotPublishedCheckbox from "./NotPublishedCheckbox/NotPublishedCheckbox";
import CreateModal from "./CreateModal/CreateModal";
import DeleteModal from "./DeleteModal/DeleteModal";
import { useAppSelector, useAppDispatch } from "../../app/hooks/redux";
import { modalIdChanged } from "../../features/global/global-slice";
import fetchNews from "../../features/news/news-thunks";
import { MODAL_CREATE, MODAL_DELETE } from "../../utils/modal-ids";

const News = () => {
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector((state) => state.auth);
  const { news } = useAppSelector((state) => state.news);
  const { modalId } = useAppSelector((state) => state.global);

  useEffect(() => {
    if (news.length === 0) dispatch(fetchNews());
  }, [news, dispatch]);

  useEffect(() => {
    if (modalId === "") {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.paddingRight = "0";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    } else {
      const top = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${top}px`;
      document.body.style.paddingRight = "17px";
    }
  }, [modalId]);

  const handleCreate = () => {
    dispatch(modalIdChanged(MODAL_CREATE));
  };

  return (
    <>
      <main className="news">
        <section className="container news__toolbar">
          <h1 className="news__header">Новости</h1>
          <div className="news__tools-wrapper">
            <Search />
            {isAdmin && <NotPublishedCheckbox modifier="news" />}
            <button
              className="news__create button"
              type="button"
              onClick={handleCreate}
            >
              Создать новость!
            </button>
          </div>
        </section>
        <section className="container news__news-section">
          <h2 className="visually-hidden">Список новостей</h2>
          {news && <NewsList />}
        </section>
      </main>
      {modalId === MODAL_CREATE && <CreateModal />}
      {modalId === MODAL_DELETE && <DeleteModal />}
    </>
  );
};

export default News;
