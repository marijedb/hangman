import Score from "./Score/Score"
import Letters from "./Letters/Letters"
import RandomWord from "./RandomWord/RandomWord"
import Hangman from "./Hangman/Hangman"
import "./Main.css"

function Main(){
    return(
        <div className="main">
            <Score />
            <Hangman />
            <RandomWord />
            <Letters />
        </div>
    )
}

export default Main