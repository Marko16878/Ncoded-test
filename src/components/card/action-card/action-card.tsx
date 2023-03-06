import Button from '../../button/button';
import './stylesheet.scss'

interface Props {
    title: string;
    body: string;
    buttonText: string;
    onButtonClick: Function;
}

function ActionCard({ title, body, buttonText, onButtonClick }: Props) {
    return (
        <div className='action-card-container'>
            <h2>{title}</h2>
            <p>{body}</p>
            <Button className='action-card-button' size='large' onClick={()=>{onButtonClick()}}>{buttonText}</Button>
        </div>
    )
}

export default ActionCard;