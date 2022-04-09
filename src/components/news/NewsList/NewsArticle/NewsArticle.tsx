import React, { FC } from "react";

import { NewsInterface } from "../../../../utils/news";

interface NewsProps {
  newsArticle: NewsInterface;
}

const NewsArticle: FC<NewsProps> = ({ newsArticle }) => {
  const { id, header, content, date } = newsArticle;
  return (
    <article className="news-article">
      <h3 className="news-article__header">{header}</h3>
      <p className="news-article__content">{content}</p>
      <p className="news-article__date">{date}</p>
    </article>
  );
};

export default NewsArticle;
