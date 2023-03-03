import axios from 'axios'
import { PostsRouts } from "../routes";
import { Config } from "../config";
import { Post } from '../../models/postModel';

export const getPosts = async () => {
    try {
        return await axios.get(`${Config.baseURL}${PostsRouts.GET_ALL_POSTS}`)
    } catch (error) {
        throw error
    }
}

export const createPost = async (data: Post) => {
    try {
        return await axios.post(`${Config.baseURL}${PostsRouts.CREATE_POST}`, { data })
    } catch (error) {
        throw error
    }
}

export const updatePost = async (data: Post) => {
    try {
        return await axios.put(`${Config.baseURL}${PostsRouts.UPDATE_POST}`, { data })
    } catch (error) {
        throw error
    }
}

export const deletePost = async (id: number) => {
    try {
        return await axios.delete(`${Config.baseURL}${PostsRouts.DELETE_POST}${id}`)
    } catch (error) {
        throw error
    }
}