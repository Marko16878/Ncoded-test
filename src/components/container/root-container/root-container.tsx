import './stylesheet.scss'

interface Props{
    id?: string;
    className?: string;
    children: any;
}

function Container({id, className, children}:Props){
    return (
        <div id={id && id} className={`root-container ${className}`}>
            {children}
        </div>
    )
}

export default Container;