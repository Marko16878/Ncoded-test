import axios from 'axios'
import { CommentsRouts } from "../routes";
import { Config } from "../config";

export const getCommentByPostId = async (postId: number) => {
    try {
        return await axios.get(`${Config.baseURL}${CommentsRouts.GET_COMMENTS_BY_POST_ID}${postId}`)
    } catch (error) {
        throw error
    }
}