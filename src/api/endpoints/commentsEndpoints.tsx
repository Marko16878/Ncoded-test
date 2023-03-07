import axios from 'axios'
import { CommentsRouts } from "../routes";

const BASE_URL = process.env.REACT_APP_BASE_URL

export const getCommentByPostId = async (postId: number) => {
    try {
        return await axios.get(`${BASE_URL}${CommentsRouts.GET_COMMENTS_BY_POST_ID}${postId}`)
    } catch (error) {
        throw error
    }
}