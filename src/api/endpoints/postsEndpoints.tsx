import axios from 'axios'
import { PostsRouts } from "../routes";
import { Post } from '../../models/postModel';

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getPosts = async () => {
    try {
        return await axios.get(`${BASE_URL}${PostsRouts.GET_ALL_POSTS}`)
    } catch (error) {
        throw error
    }
}

export const createPost = async (data: Post) => {
    try {
        return await axios.post(`${BASE_URL}${PostsRouts.CREATE_POST}`, { data })
    } catch (error) {
        throw error
    }
}

export const updatePost = async (data: Post) => {
    try {
        return await axios.put(`${BASE_URL}${PostsRouts.UPDATE_POST}`, { data })
    } catch (error) {
        throw error
    }
}

export const deletePost = async (id: number) => {
    try {
        return await axios.delete(`${BASE_URL}${PostsRouts.DELETE_POST}${id}`)
    } catch (error) {
        throw error
    }
}