import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsInterface } from "../../utils/news";
import { signedOut } from "../auth/auth-slice";
import fetchNews from "./news-thunks";

interface NewsState {
  news: NewsInterface[];
  search: string;
  showOnlyNotPublished: boolean;
}

const initialState: NewsState = {
  news: [],
  search: "",
  showOnlyNotPublished: false,
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
  newsArticleDeleted,
  searchChanged,
  notPublishedToggled,
} = newsSlice.actions;
export default newsSlice.reducer;
