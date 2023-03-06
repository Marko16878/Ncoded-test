import "./stylesheet.scss"
import { useDispatch, useSelector } from 'react-redux'
import Actions from "../../../store/actions"
import { Comment } from "../../../models/commentModel"
import CommentCard from "../../card/comment-card/comment-card"
import Spiner from "../../loader/loader-spiner/loader-spiner"
import Modal from "../base-modal/base-modal"

function CommentsModal() {

    const dispatch = useDispatch()
    const commentsSessionState = useSelector((state: any) => state.commentsSession)

    const handleClose = () => {
        dispatch(Actions.setPost(null))
        dispatch(Actions.setComments(null))
    }

    return (
        <Modal
            open={commentsSessionState.selectedPost !== null ? true : false}
            handleClose={handleClose}
        >
            {
                commentsSessionState.selectedPost !== null &&
                <div id="comments-modal-content">
                    <div>
                        <div><i>Id:{commentsSessionState.selectedPost.id}</i></div>
                        <div><i>UserId:{commentsSessionState.selectedPost.userId}</i></div>
                    </div>
                    <h2>{commentsSessionState.selectedPost.title}</h2>
                    <p>{commentsSessionState.selectedPost.body}</p>
                    <br />
                    <div>Comments</div>
                    {
                        commentsSessionState.comments !== null &&
                            commentsSessionState.comments.length > 0 ?
                            commentsSessionState.comments.map((item: Comment) =>
                                <CommentCard key={"comment-" + item.id} data={item} />
                            )
                            :
                            commentsSessionState.loading ?
                                <Spiner />
                                :
                                <p>No comments</p>
                    }
                </div>
            }
        </Modal>
    )
}
export default CommentsModal;