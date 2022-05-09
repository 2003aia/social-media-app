import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TUser, TPost } from "../types/types";

export interface PostState {
  index: number;
  user: TUser;
  refresh: boolean;
  posts: Array<TPost>;
}


const initialState: PostState = {
  index: 0,
  user: {},
  posts: [],
  refresh: false,
};

const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    postData: (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    },
    setRefresh: (state, action: PayloadAction<boolean>)=>{
        state.refresh = action.payload;
    },
    setPosts: (state, action: PayloadAction<Array<TPost>>) =>{
      state.posts = action.payload;
    }
  },
 
});

/* export function post(state = initialState, action: any) {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                colors: action.changeColor
            }
        default: {
            return state;
        }
    }
} */

export const { postData, setRefresh } = post.actions;

export default post.reducer;
