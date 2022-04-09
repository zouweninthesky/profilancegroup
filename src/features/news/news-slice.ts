import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsInterface } from "../../utils/news";
import { signedOut } from "../auth/auth-slice";
import fetchNews from "./news-thunks";

interface NewsState {
  news: NewsInterface[];
  search: string;
  newsArticleToDelete: undefined | number;
  showOnlyNotPublished: boolean;
}

const initialState: NewsState = {
  news: [],
  search: "",
  newsArticleToDelete: undefined,
  showOnlyNotPublished: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsArticleCreated(state, action: PayloadAction<NewsInterface>) {
      state.news.push(action.payload);
    },
    newsArticleChosenToDelete(state, action: PayloadAction<number>) {
      state.newsArticleToDelete = action.payload;
    },
    newsArticleDeleted(state) {
      state.news = state.news.filter(
        (newsPiece) => newsPiece.id !== state.newsArticleToDelete
      );
    },
    newsArticlePublished(state, action: PayloadAction<number>) {
      const newsPublishedIndex = state.news.findIndex(
        (newsArticle) => newsArticle.id === action.payload
      );
      state.news[newsPublishedIndex].isPublished = true;
    },
    searchChanged(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    notPublishedToggled(state) {
      state.showOnlyNotPublished = !state.showOnlyNotPublished;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(signedOut, (state) => {
      state.showOnlyNotPublished = false;
      state.search = "";
    });
  },
});

export const {
  newsArticleCreated,
  newsArticleChosenToDelete,
  newsArticleDeleted,
  newsArticlePublished,
  searchChanged,
  notPublishedToggled,
} = newsSlice.actions;
export default newsSlice.reducer;
