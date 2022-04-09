import React from "react";

import NewsArticle from "./NewsArticle/NewsArticle";
import { useAppSelector } from "../../../app/hooks/redux";

const NewsList = () => {
  const { news } = useAppSelector((state) => state.news);

  const filteredNews = news;
  const search = false;

  return (
    <ul className="news-list">
      {news.length ? (
        filteredNews.map((newsArticle) => {
          return (
            <li className="news-list__item" key={newsArticle.id}>
              <NewsArticle newsArticle={newsArticle} />
            </li>
          );
        })
      ) : (
        <p>{search ? "Поиск не дал результатов" : "Пока новостей нет!"}</p>
      )}
    </ul>
  );
};

export default NewsList;
