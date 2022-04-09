import React, { useEffect } from "react";

import NewsList from "./NewsList/NewsList";
import { useAppSelector, useAppDispatch } from "../../app/hooks/redux";
import fetchNews from "../../features/news/news-thunks";

const News = () => {
  const dispatch = useAppDispatch();
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
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    } else {
      const top = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${top}px`;
    }
  }, [modalId]);

  return (
    <main>
      <section>
        <h1>Заголовок</h1>
        <p>Поиск</p>
        <p>Чекбокс с неодобренными новостями</p>
      </section>
      <section>
        <h2 className="visually-hidden">Список новостей</h2>
        {news && <NewsList />}
      </section>
    </main>
  );
};

export default News;
