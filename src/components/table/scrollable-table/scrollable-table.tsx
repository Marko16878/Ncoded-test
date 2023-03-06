import './stylesheet.scss'
import { Post } from "../../../models/postModel";
import { useDispatch } from 'react-redux'
import Actions from '../../../store/actions';
import Button from '../../button/button';

interface Props{
    data: Post[];
    handleSelect: Function;
    handleDelete: Function;
}

function ScrollableTable({data, handleSelect, handleDelete}:Props) {

    const dispatch = useDispatch()

    return (
        <div className='scrollable-table-container'>
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
                            data.length > 0 &&
                            data.map((item: Post) =>
                                <tr key={"post-" + item.id} onClick={(event)=>{event.stopPropagation(); handleSelect(item.id); dispatch(Actions.setPost(item))}}>
                                    <td><Button bgColor='#cc0000' onClick={() => { handleDelete(item.id)}}>Delete</Button></td>
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
    )
}

export default ScrollableTable;