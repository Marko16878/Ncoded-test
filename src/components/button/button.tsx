import './stylesheet.scss'

interface Props{
    id?: string;
    className?: string;
    size?: 'large'|'small';//default 'small'
    children?: any;
    onClick?: Function;
    bgColor?: string; //default #0c0c0f
    color?: string; //default #f5f5fa
}

function Button({id, className, size, children, onClick, bgColor, color}:Props){
    return (
        <button
            id={id && id}
            className={`custom-button ${size ? size : 'small'} ${className && className}`}
            onClick={(event)=>{event.stopPropagation(); onClick && onClick()}}
            style={{
                backgroundColor: bgColor ? bgColor : '#0c0c0f',
                color: color ? color : '#f5f5fa'
            }}
        >
            {children && children}
        </button>
    )
}

export default Button;