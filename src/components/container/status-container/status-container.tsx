import { useSelector } from 'react-redux'

function StatusContainer() {

    const postSessionState = useSelector((state: any) => state.postsSession)

    return (
        <h4>
            {
                !postSessionState.loading &&
                postSessionState.message !== '' &&
                postSessionState.message
            }
        </h4>
    )
}

export default StatusContainer;