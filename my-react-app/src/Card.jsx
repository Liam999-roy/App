
import profile from "./Assets/profile.jpg"
function Card(){
    return(
        <div className="Card">
            <img className="Card-image" src={profile}alt="profile picture "></img>
            <h2 className="Card-title">LIAM ROY</h2>
            <p className="Card-text">A computer science student at CBU </p>

        </div>

    );
}

export default Card