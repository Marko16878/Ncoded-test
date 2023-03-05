import { createSlice } from '@reduxjs/toolkit'
import { Comment } from '../../models/commentModel'
import { Post } from '../../models/postModel'

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: null as Comment[] | null,
        selectedPost: null as Post | null,
        loading: false,
        message: '',
    },
    reducers: {
        setComments: (state, { payload }) => {
            return { ...state, comments: payload }
        },
        setPost: (state, { payload }) => {
            return { ...state, selectedPost: payload }
        },
        startLoadingComments: (state, { payload }) => {
            return { ...state, loading: true, message: payload }
        },
        endLoadingComments: (state, { payload }) => {
            return { ...state, loading: false, message: payload }
        },
    },
})

export const { setComments, setPost, startLoadingComments, endLoadingComments } = commentsSlice.actions

export default commentsSlice.reducer