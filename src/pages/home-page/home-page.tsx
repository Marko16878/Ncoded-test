import UserCard from "../../components/user-card/user-card";
import "./stylesheet.css";

/*
This code defines a HomePage component that renders a UserCard component inside a container
with an id of "home-page-container".
*/
function HomePage() {
    return (
        <div id="home-page-container">
            <UserCard />
        </div>
    )
}

export default HomePage;