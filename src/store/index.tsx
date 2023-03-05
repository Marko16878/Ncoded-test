import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'
import commentsReducer from './slices/commentsSlice'


const store = configureStore({
    reducer: {
      postsSession: postsReducer,
      commentsSession: commentsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),  
})

export default store;