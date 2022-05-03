import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {TUser} from '../types/types'


export interface PostState {
    colors: any,
    index: number,
    user: TUser;

}
const initialState: PostState = {
    colors: [
        'black', 'pink', 'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'brown'
    ],
    index: 0,
    user: {}
}

 const post = createSlice({
    name: 'post', 
    initialState,
    reducers: {
        postData: (state, action: PayloadAction<TUser>) =>{
            state.user = action.payload
        },
    }
})

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


export const { postData } = post.actions

export default post.reducer



