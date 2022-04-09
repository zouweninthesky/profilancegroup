import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth-slice";
import newsReducer from "../features/news/news-slice";
import globalReducer from "../features/global/global-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    global: globalReducer,
    news: newsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
