import React, { FC } from "react";

import { useAppSelector, useAppDispatch } from "../../../../app/hooks/redux";
import {
  newsArticleDeleted,
  newsArticlePublished,
} from "../../../../features/news/news-slice";
import { NewsInterface } from "../../../../utils/news";

interface NewsProps {
  newsArticle: NewsInterface;
}

const NewsArticle: FC<NewsProps> = ({ newsArticle }) => {
  const { id, header, content, date, isPublished } = newsArticle;
  const dispatch = useAppDispatch();
  const { isAdmin } = useAppSelector((state) => state.auth);

  const handlePublish = () => {
    dispatch(newsArticlePublished(id));
  };

  const handleDelete = () => {
    dispatch(newsArticleDeleted(id));
  };

  return (
    <article className="news-article">
      <h3 className="news-article__header">{header}</h3>
      <p className="news-article__content">{content}</p>
      <p className="news-article__date">{date}</p>
      {isAdmin && (
        <>
          {!isPublished && (
            <button type="button" onClick={handlePublish}>
              Опубликовать
            </button>
          )}
          <button type="button" onClick={handleDelete}>
            Удалить
          </button>
        </>
      )}
    </article>
  );
};

export default NewsArticle;
