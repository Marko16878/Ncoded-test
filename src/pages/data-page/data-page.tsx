import { Api } from "../../api";
import { useDispatch, useSelector } from 'react-redux'
import Actions from "../../store/actions";
import Container from "../../components/container/root-container/root-container";
import ActionContainer from "../../components/container/action-container/actions-container";
import ScrollableTable from "../../components/table/scrollable-table/scrollable-table";
import StatusContainer from "../../components/container/status-container/status-container";

function DataPage() {

    const dispatch = useDispatch()
    const postSessionState = useSelector((state: any) => state.postsSession)

    const DeletePost = async (id: number) => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        dispatch(Actions.startLoadingPosts("Loading: Deleteing post..."))

        await Api.deletePost(id)
            .then((response) => {
                let oldPosts = postSessionState.posts.filter((x: any) => x.id !== id)
                dispatch(Actions.setPosts(oldPosts))
                dispatch(Actions.endLoadingPosts(""))
            })
            .catch((error) => {
                dispatch(Actions.endLoadingPosts(error.message))
            })
    }

    const GetComments = async (postId: number) => {
        dispatch(Actions.startLoadingComments("Loading comments..."))
        await Api.getCommentByPostId(postId)
            .then((response) => {
                dispatch(Actions.setComments(response.data))
                dispatch(Actions.endLoadingComments(""))
            })
            .catch((error) => {
                dispatch(Actions.endLoadingComments(error.message))
            })
    }

    return (
        <Container id="data-page-container">
            <ActionContainer />
            <StatusContainer />
            <ScrollableTable
                data={postSessionState.posts}
                handleSelect={(postId: number) => { GetComments(postId) }}
                handleDelete={(postId: number) => { DeletePost(postId) }}
            />
        </Container>
    )
}

export default DataPage;