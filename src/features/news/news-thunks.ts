import { createAsyncThunk } from "@reduxjs/toolkit";
import NewsService from "../../api/NewsService";

const fetchNews = createAsyncThunk("get-news", async (thunkAPI) => {
  const response = await NewsService.getNews();
  return response;
});

export default fetchNews;
