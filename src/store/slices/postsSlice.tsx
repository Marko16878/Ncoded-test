import { createSlice } from '@reduxjs/toolkit'
import { Post } from '../../models/postModel'

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [] as Post[],
        loading: false,
        message: '',
    },
    reducers: {
        setPosts: (state, {payload}) => {
            return { ...state, posts: payload }
        },
        startLoadingPosts: (state, {payload}) => {
            return { ...state, loading: true, message: payload }
        },
        endLoadingPosts: (state, {payload}) => {
            return { ...state, loading: false, message: payload }
        },
    },
})

export const {setPosts, startLoadingPosts, endLoadingPosts} = postsSlice.actions

export default postsSlice.reducer