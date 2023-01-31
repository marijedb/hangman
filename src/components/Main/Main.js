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
            <RandomWord allWords={props.allWords} />
            <Letters />
        </div>
    )
}

export default Main