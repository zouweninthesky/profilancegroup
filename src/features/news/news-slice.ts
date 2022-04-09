import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsInterface } from "../../utils/news";
import fetchNews from "./news-thunks";

interface NewsState {
  news: NewsInterface[];
  search: string;
}

const initialState: NewsState = {
  news: [],
  search: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsArticleCreated(state, action: PayloadAction<NewsInterface>) {
      state.news.push(action.payload);
    },
    newsArticleDeleted(state, action: PayloadAction<number>) {
      state.news = state.news.filter(
        (newsPiece) => newsPiece.id !== action.payload
      );
    },
    searchChanged(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});

export const { newsArticleCreated, newsArticleDeleted, searchChanged } =
  newsSlice.actions;
export default newsSlice.reducer;
