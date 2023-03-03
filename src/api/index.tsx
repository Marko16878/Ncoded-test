import { getPosts, createPost, updatePost, deletePost } from "./endpoints/postsEndpoints";

export const Api = Object.freeze({
    getPosts,
    createPost,
    updatePost,
    deletePost
})