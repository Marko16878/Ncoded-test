/*
The import statements at the beginning of the code import the required modules and stylesheets.
*/
import { Api } from "../../api";
import "./stylesheet.css"
import { useDispatch, useSelector } from 'react-redux'
import Actions from "../../store/actions";
import { Post } from "../../models/postModel";

/*
The code defines a functional component named DataPage that fetches, creates,
updates, and deletes posts using an external API. The component also displays
the posts in a table and allows the user to select a post to view its comments.
*/
function DataPage() {

    /*
    The useDispatch and useSelector hooks from the react-redux module are used
    to dispatch actions and retrieve data from the Redux store.
    */
    const dispatch = useDispatch()
    const postSessionState = useSelector((state: any) => state.postsSession)

    function getRandomNumberInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    function generateRandomText(type: string) {
        const words = [];
        const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
        //The number of words in the text to be generated
        let numWords = (type === "title" ? getRandomNumberInRange(3, 10) : getRandomNumberInRange(15, 30));
        for (let i = 0; i < numWords; i++) {
            let word = i !== 0 ? '' : uppercaseCharacters.charAt(Math.floor(Math.random() * uppercaseCharacters.length));
            //The number of characters in one word
            let numCharacters = getRandomNumberInRange(1, 15);
            for (let j = 0; j < numCharacters; j++) {
                word += lowercaseCharacters.charAt(Math.floor(Math.random() * lowercaseCharacters.length));
            }
            words.push(word);
        }
        return words.join(' ');
    }

    /*
    The GetPosts function fetches all posts using the Api.getPosts() method
    and dispatches appropriate actions to update the store with the received data.
    */
    const GetPosts = async () => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        dispatch(Actions.startLoadingPosts("Loading posts..."))
        await Api.getPosts()
            .then((response) => {
                dispatch(Actions.setPosts(response.data))
                dispatch(Actions.endLoadingPosts(""))
            })
            .catch((error) => {
                dispatch(Actions.endLoadingPosts(error.message))
            })
    }

    /*
    The CreatePost function creates a new post using the Api.createPost() method
    with randomly generated title and body values and updates the store with the new post data.
    */
    const CreatePost = async () => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        dispatch(Actions.startLoadingPosts("Loading: Create new post..."))
        await Api.createPost({
            id: 0,
            title: generateRandomText("title"),
            body: generateRandomText("body"),
            userId: 1
        })
            .then((response) => {
                dispatch(Actions.setPosts([
                    {
                        id: response.data.id,
                        userId: response.data.data.userId,
                        title: response.data.data.title,
                        body: response.data.data.body
                    },
                    ...postSessionState.posts
                ]))
                dispatch(Actions.endLoadingPosts(""))
            })
            .catch((error) => {
                dispatch(Actions.endLoadingPosts(error.message))
            })
    }

    /*
    The UpdatePost function updates an existing post using the Api.updatePost() method
    with randomly generated title and body values and updates the store with the updated post data.
    */
    const UpdatePost = async () => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        dispatch(Actions.startLoadingPosts("Loading: Updateing post..."))
        await Api.updatePost({
            id: 1,
            title: generateRandomText("title"),
            body: generateRandomText("body"),
            userId: 1
        })
            .then((response) => {
                let oldPosts = postSessionState.posts.filter((x: Post) => x.id !== response.data.id)
                dispatch(Actions.setPosts([
                    {
                        id: response.data.id,
                        userId: response.data.data.userId,
                        title: response.data.data.title,
                        body: response.data.data.body
                    },
                    ...oldPosts
                ]))
                dispatch(Actions.endLoadingPosts(""))
            })
            .catch((error) => {
                dispatch(Actions.endLoadingPosts(error.message))
            })
    }

    /*
    The DeletePost function deletes a post using the Api.deletePost() method
    and updates the store by removing the deleted post from the state.
    */
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

    /*
    The GetComments function fetches comments for a selected post using
    the Api.getCommentByPostId() method and updates the store with the received comment data.
    */
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

    /*
    The return statement renders the component, which displays three buttons for fetching,
    creating, and updating posts, a table of posts, and a message indicating
    the loading status and any error messages.
    */
    return (
        <>
            <div id="data-page-container">
                <div>
                    <div>
                        <h2>Get all posts</h2>
                        <p>All posts will be getting and displayed in the table.</p>
                        <button onClick={GetPosts}>Get</button>
                    </div>
                    <div>
                        <h2>Create new post</h2>
                        <p>The new post will be created with userId=1 and title and body random values.</p>
                        <button onClick={CreatePost}>Create</button>
                    </div>
                    <div>
                        <h2>Update post</h2>
                        <p>The new post with id=1 will be updated with title and body random values.</p>
                        <button onClick={UpdatePost}>Update</button>
                    </div>
                </div>
                <div>{(postSessionState.loading || postSessionState.message !== '') && postSessionState.message}</div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Delete</th>
                                <th>Id</th>
                                <th>UserId</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                    </table>
                    <div>
                        <table>
                            <tbody>
                                {/*
                                Each row of the table contains the post data and a delete button that
                                triggers the DeletePost function. The onClick event on each row triggers
                                the GetComments function to fetch and display the comments for the selected post.
                                */}
                                {
                                    postSessionState.posts.length > 0 &&
                                    postSessionState.posts.map((item: Post) =>
                                        <tr key={"post-" + item.id} onClick={() => { dispatch(Actions.setPost(item)); GetComments(item.id) }}>
                                            <td><button onClick={(event) => { event.stopPropagation(); DeletePost(item.id) }}>Delete</button></td>
                                            <td>{item.id}</td>
                                            <td>{item.userId}</td>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataPage;