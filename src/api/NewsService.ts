import news, { NewsInterface } from "../utils/news";

class NewsService {
  async getNews() {
    const data: NewsInterface[] = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(news);
      }, 300);
    });
    return data;
  }
}

export default new NewsService();
