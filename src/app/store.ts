import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import followersReducer from "../features/followers/followersSlice";

export const store = configureStore({
  reducer: {
    followers: followersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
