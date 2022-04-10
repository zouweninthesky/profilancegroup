import React from "react";
import "./NewsList.scss";

import NewsArticle from "./NewsArticle/NewsArticle";
import Loader from "../../common/Loader/Loader";
import { useAppSelector } from "../../../app/hooks/redux";
import { NewsInterface } from "../../../utils/news";

const NewsList = () => {
  const { news, search, showOnlyNotPublished } = useAppSelector(
    (state) => state.news
  );
  const { loading } = useAppSelector((state) => state.global);
  const { userName } = useAppSelector((state) => state.auth);

  const filterNews = (news: NewsInterface[]) => {
    let filteredNews = news;

    if (userName) {
      if (showOnlyNotPublished)
        filteredNews = filteredNews.filter((n) => !n.isPublished);
    } else filteredNews = filteredNews.filter((n) => n.isPublished);

    if (search) {
      filteredNews = filteredNews.filter((n) => {
        return (
          n.header.toLowerCase().includes(search.toLowerCase()) ||
          n.content.toLowerCase().includes(search.toLowerCase())
        );
      });
    }

    return filteredNews;
  };

  const filteredNews = filterNews(news);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <ul className="news-list">
          {filteredNews.length ? (
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
      )}
    </>
  );
};

export default NewsList;
