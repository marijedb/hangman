import "./Navbar.css"
import hangman from "../../images/dhangman.png"

function Navbar(props){
    console.log("navbar")
    return(
        <div className="navbar">
            <img src={hangman} alt="hangman logo" className="navbar--logo" />
            <div className="navbar--title--container">                
                <h3 className="navbar--title">Hangman</h3>
                <p className="navbar--subtitle">Dare to die</p>
            </div>
            <button className="navbar--newgame" onClick={props.newGame}>New Game</button>
        </div>
    )
}

export default Navbar