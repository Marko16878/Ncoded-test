import Spiner from '../loader-spiner/loader-spiner';
import './stylesheet.scss'

function Loader(){
    return (
        <div className="loader-container">
            <Spiner />
        </div>
    )
}

export default Loader;