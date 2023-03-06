import LgNavBar from "../../components/header/lg-nav-bar/lg-nav-bar"
import SmNavBar from "../../components/header/sm-nav-bar/sm-nav-bar"
import useScreenDimensions from "../../hooks/use-screen-dimenzions/use-screen-dimenzions"

function HOCNavBar(){
    const screenWidth = useScreenDimensions()

    if(screenWidth <= 740)
        return <SmNavBar />
    else
        return <LgNavBar />
}

export default HOCNavBar;