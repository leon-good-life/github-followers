import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchFollowers } from "./followersAPI";

interface Follower {
  id: string;
  login: string;
}

export interface FollowersState {
  followers: Follower[];
  status: "idle" | "loading" | "failed";
  sortDirection: "notSorted" | "asc" | "desc";
}

const initialState: FollowersState = {
  followers: [],
  status: "idle",
  sortDirection: "notSorted",
};

export const fetchFollowersAsync = createAsyncThunk(
  "followers/fetchFollowers",
  async (username: string) => {
    const followers = await fetchFollowers(username);
    return followers;
  }
);

export const followersSlice = createSlice({
  name: "followers",
  initialState,
  reducers: {
    sortFollowers(state) {
      if (state.sortDirection !== "asc") {
        state.sortDirection = "asc";
      } else {
        state.sortDirection = "desc";
      }
      state.followers = state.followers.sort((a, b) => {
        if (state.sortDirection === "asc") {
          if (a.login < b.login) {
            return -1;
          }
          if (a.login > b.login) {
            return 1;
          }
        } else if (state.sortDirection === "desc") {
          if (a.login < b.login) {
            return 1;
          }
          if (a.login > b.login) {
            return -1;
          }
        }
        return 0;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFollowersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFollowersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.followers = action.payload;
      });
  },
});

export const { sortFollowers } = followersSlice.actions;

export const selectFollowers = (state: RootState) => state.followers.followers;
export const selectFollowersStatus = (state: RootState) =>
  state.followers.status;

export default followersSlice.reducer;
