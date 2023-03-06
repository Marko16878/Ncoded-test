import "./stylesheet.scss"

/*
This code defines a NoPage component that renders when url includes unknown routes.
*/
function NoPage(){
    return(
        <div id="no-page-container">
            <h1>Page not found!</h1>
        </div>
    )
}

export default NoPage;