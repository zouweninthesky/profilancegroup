import React, { FC } from "react";

import { useAppSelector, useAppDispatch } from "../../../../app/hooks/redux";
import {
  newsArticleChosenToDelete,
  newsArticlePublished,
} from "../../../../features/news/news-slice";
import { modalIdChanged } from "../../../../features/global/global-slice";
import { NewsInterface } from "../../../../utils/news";
import { MODAL_DELETE } from "../../../../utils/modal-ids";

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
    dispatch(newsArticleChosenToDelete(id));
    dispatch(modalIdChanged(MODAL_DELETE));
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
