import "./Navbar.css"
import hangman from "../../images/hangman.png"

function Navbar(){
    return(
        <div className="navbar">
            <img src={hangman} alt="hangman logo" className="navbar--logo" />
            <h3 className="navbar--title">Hangman</h3>
        </div>
    )
}

export default Navbar