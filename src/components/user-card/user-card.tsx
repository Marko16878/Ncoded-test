import "./stylesheet.css"
import image from "../../assets/images/user-image.jpg"
import { IoIosMail } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { Link } from "react-router-dom";

function UserCard() {
    return (
        <div className={"user-card-container"}>
            <div>
                <img src={image} alt={"User profile"}/>
            </div>
            <div>
                <div>
                    Marko Stamenkovic
                </div>
                <div>
                    <IoIosMail color="black" size={20} />
                    markostamenkovic45@gmail.com
                </div>
                <div>
                    <BsGithub color="black" size={20} />
                    https://github.com/Marko16878
                </div>
                <Link to={"https://github.com/Marko16878/Ncoded-test"} target={"_blank"}>
                    <BsGithub color="white" size={20} /> Go to Github
                </Link>
            </div>
        </div>
    )
}

export default UserCard;