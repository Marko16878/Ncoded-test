import { Comment } from "../../../models/commentModel"
import "./stylesheet.scss"

interface Props {
    data: Comment;
}

function CommentCard({data: {id, postId, name, email, body}}: Props) {
    return (
        <div className="comment-card-container">
            <div>
                <div><i>Id:{id}</i></div>
                <div><i>PostId:{postId}</i></div>
            </div>
            <p><b>{name}</b></p>
            <p><i>{email}</i></p>
            <p>{body}</p>
        </div >
    )
}

export default CommentCard