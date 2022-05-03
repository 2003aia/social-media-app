
import { configureStore } from '@reduxjs/toolkit'
import post from './post'
import { compileFunction } from "vm";

export const store = configureStore({
    reducer: {
        post: post,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
/* let rootReducer = combineReducers({
    post: post
})

export const store = createStore(rootReducer) */