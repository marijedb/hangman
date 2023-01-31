import Score from "./Score/Score"
import Letters from "./Letters/Letters"
import RandomWord from "./RandomWord/RandomWord"
import Hangman from "./Hangman/Hangman"
import "./Main.css"

function Main(props){
    return(
        <div className="main">
            <Score />
            <Hangman />
            <RandomWord randomWord={props.randomWord} />
            <Letters />
        </div>
    )
}

export default Main