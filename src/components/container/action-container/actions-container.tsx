import Actions from "../../../store/actions";
import { Api } from "../../../api";
import { useDispatch, useSelector } from 'react-redux'
import { Post } from "../../../models/postModel";
import './stylesheet.scss'

function ActionContainer() {

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
    return (
        <div className="action-container">
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
                <p>The post with id=1 will be updated with title and body random values.</p>
                <button onClick={UpdatePost}>Update</button>
            </div>
        </div>
    )
}

export default ActionContainer;