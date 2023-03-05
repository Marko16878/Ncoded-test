import { Comment } from "../../models/commentModel"
import "./stylesheet.css"

/*
Defining the Props interface with a single property data of type Comment.
*/
interface Props {
    data: Comment;
}

/*
The code defines a React functional component called CommentCard that renders a comment.
*/
function CommentCard(props: Props) {

    /*
    Extracting the data property from props and assigning it to a variable called data.
    */
    const { data } = props
    
    return (
        <div className="comment-card-container">
            <div>
                <div><i>Id:{data.id}</i></div>
                <div><i>PostId:{data.postId}</i></div>
            </div>
            <p><b>{data.name}</b></p>
            <p><i>{data.email}</i></p>
            <p>{data.body}</p>
        </div >
    )
}

export default CommentCard