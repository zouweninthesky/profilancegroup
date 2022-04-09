import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchNews from "../news/news-thunks";

interface GlobalState {
  loading: boolean;
  modalId: string;
  notification: string;
}

const initialState: GlobalState = {
  loading: false,
  modalId: "",
  notification: "",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    modalIdChanged(state, action: PayloadAction<string>) {
      state.modalId = action.payload;
    },
    notificationChanged(state, action: PayloadAction<string>) {
      state.notification = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state) => {
      state.loading = false;
    });
  },
});

export const { modalIdChanged } = globalSlice.actions;
export default globalSlice.reducer;
