import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slices/postsSlice'


const store = configureStore({
    reducer: {
      postsSession: postsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),  
})

export default store;