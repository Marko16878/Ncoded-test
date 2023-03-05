import {
    setPosts,
    startLoadingPosts,
    endLoadingPosts
} from "./slices/postsSlice";

import {
    setComments,
    setPost,
    startLoadingComments,
    endLoadingComments
} from "./slices/commentsSlice"

const Actions = Object.freeze({
    setPosts,
    startLoadingPosts,
    endLoadingPosts,
    setComments,
    setPost,
    startLoadingComments,
    endLoadingComments
})

export default Actions;