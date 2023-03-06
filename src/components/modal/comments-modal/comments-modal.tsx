import "./stylesheet.scss"
import { useDispatch, useSelector } from 'react-redux'
import Actions from "../../../store/actions"
import { Comment } from "../../../models/commentModel"
import CommentCard from "../../card/comment-card/comment-card"
import Modal from "../modal-base/modal-base"

/*
CommentsModal is a component that renders a modal to display comments for a selected post.
*/
function CommentsModal() {

    /*
    The useDispatch and useSelector hooks from the react-redux module are used
    to dispatch actions and retrieve data from the Redux store.
    */
    const dispatch = useDispatch()
    const commentsSessionState = useSelector((state: any) => state.commentsSession)

    /*
    handleClose function to close the modal and reset selected post and comments.
    */
    const handleClose = () => {
        dispatch(Actions.setPost(null))
        dispatch(Actions.setComments(null))
    }

    return (
        <>
            {
                commentsSessionState.comments !== null &&
                commentsSessionState.selectedPost !== null &&
                <div id="comments-modal-container" onClick={handleClose}>
                    <div onClick={(event) => { event.stopPropagation() }}>
                        <div>
                            <div><i>Id:{commentsSessionState.selectedPost.id}</i></div>
                            <div><i>UserId:{commentsSessionState.selectedPost.userId}</i></div>
                        </div>
                        <h2>{commentsSessionState.selectedPost.title}</h2>
                        <p>{commentsSessionState.selectedPost.body}</p>
                        <br />
                        <div>Comments</div>
                        {
                            commentsSessionState.comments.length > 0 ?
                                commentsSessionState.comments.map((item: Comment) =>
                                    <CommentCard key={"comment-" + item.id} data={item} />
                                )
                                :
                                <p>No comments</p>
                        }
                    </div>
                    <div onClick={handleClose}>
                        Close
                    </div>
                </div>
            }
        </>
    )
}
export default CommentsModal;