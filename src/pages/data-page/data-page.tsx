import { Api } from "../../api";
import "./stylesheet.css"
import { useDispatch, useSelector } from 'react-redux'
import Actions from "../../store/actions";
import { Post } from "../../models/postModel";

function DataPage() {

    const dispatch = useDispatch()
    const postsSession = useSelector((state: any) => state.postsSession)

    const GenerateRandomString = (type: string) => {
        // Returns a random integer from 10 to 160 for type="title" or
        // random integer from 150 to 250 for type="body"
        let length = (type === "title" ? 10 : 150) + Math.floor(Math.random() * 100);

        let result = '';
        let uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        result += uppercaseCharacters.charAt(Math.floor(Math.random() * uppercaseCharacters.length));
        const lowercaseCharacters = ' abcdef ghijklm nopqrst uvwxyz ';
        let counter = 0;
        let lastCharacter = '';
        while (counter < length) {
            lastCharacter = lowercaseCharacters.charAt(Math.floor(Math.random() * lowercaseCharacters.length));
            while (result.charAt(counter) === ' ' && lastCharacter === ' ')
                lastCharacter = lowercaseCharacters.charAt(Math.floor(Math.random() * lowercaseCharacters.length));
            result += lastCharacter;
            counter += 1;
        }
        return result;
    }

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

    const CreatePost = async () => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        dispatch(Actions.startLoadingPosts("Loading: Create new post..."))
        await Api.createPost({
            id: 0,
            title: GenerateRandomString("title"),
            body: GenerateRandomString("body"),
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
                    ...postsSession.posts
                ]))
                dispatch(Actions.endLoadingPosts(""))
            })
            .catch((error) => {
                dispatch(Actions.endLoadingPosts(error.message))
            })
    }

    const UpdatePost = async () => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        dispatch(Actions.startLoadingPosts("Loading: Updateing post..."))
        await Api.updatePost({
            id: 1,
            title: GenerateRandomString("title"),
            body: GenerateRandomString("body"),
            userId: 1
        })
            .then((response) => {
                let oldPosts = postsSession.posts.filter((x: Post) => x.id !== response.data.id)
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

    const DeletePost = async (id: number) => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        dispatch(Actions.startLoadingPosts("Loading: Deleteing post..."))

        await Api.deletePost(id)
            .then((response) => {
                console.log(response)
                let oldPosts = postsSession.posts.filter((x: any) => x.id !== id)
                dispatch(Actions.setPosts(oldPosts))
                dispatch(Actions.endLoadingPosts(""))
            })
            .catch((error) => {
                dispatch(Actions.endLoadingPosts(error.message))
            })
    }
    return (
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
            <div>{(postsSession.loading || postsSession.message !== '') && postsSession.message}</div>
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
                            {
                                postsSession.posts.length > 0 &&
                                postsSession.posts.map((item: { id: number, userId: number, title: string, body: string }) =>
                                    <tr key={item.id}>
                                        <td><button onClick={() => { DeletePost(item.id) }}>Delete</button></td>
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
    )
}

export default DataPage;