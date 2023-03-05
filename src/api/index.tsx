import { getPosts, createPost, updatePost, deletePost } from "./endpoints/postsEndpoints";
import { getCommentByPostId } from "./endpoints/commentsEndpoints";

export const Api = Object.freeze({
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getCommentByPostId
})