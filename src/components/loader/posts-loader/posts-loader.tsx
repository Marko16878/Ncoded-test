import Loader from "../global-loader/global-loader";
import { useSelector } from 'react-redux'

function PostsLoader() {

    const postSessionState = useSelector((state: any) => state.postsSession)

    return (
        <>
            {
                postSessionState.loading && <Loader />
            }
        </>
    )
}

export default PostsLoader;