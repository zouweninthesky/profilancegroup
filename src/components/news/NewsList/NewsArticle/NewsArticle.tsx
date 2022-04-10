import React, { FC } from "react";
import dateFormat from "dateformat";
import "./NewsArticle.scss";

import Icon from "../../../common/Icon/Icon";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks/redux";
import {
  newsArticleChosenToDelete,
  newsArticlePublished,
} from "../../../../features/news/news-slice";
import { modalIdChanged } from "../../../../features/global/global-slice";
import { NewsInterface } from "../../../../utils/news";
import { MODAL_DELETE } from "../../../../utils/modal-ids";
import { MASK_DAY_MONTH_YEAR_DOTS } from "../../../../utils/dateFormatMasks";

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
      <p className="news-article__date">
        Дата публикации: {dateFormat(date, MASK_DAY_MONTH_YEAR_DOTS)}
      </p>
      {isAdmin && (
        <div className="news-article__buttons-wrapper">
          {!isPublished && (
            <button
              className="news-article__button button"
              type="button"
              onClick={handlePublish}
            >
              Опубликовать
            </button>
          )}
          <button
            className="news-article__button button button--icon-only"
            type="button"
            onClick={handleDelete}
          >
            <Icon id="trash" width={32} />
          </button>
        </div>
      )}
    </article>
  );
};

export default NewsArticle;
