import Score from "./Score/Score"
import Letters from "./Letters/Letters"
import RandomWord from "./RandomWord/RandomWord"
import Hangman from "./Hangman/Hangman"
import "./Main.css"

function Main(props){
    return(
        <div className="main">
            <Score turnsLeft={props.turnsLeft} randomWord={props.randomWord} letters={props.letters} winningCount={props.winningCount}/>
            <Hangman turnsLeft={props.turnsLeft} />
            <RandomWord randomWord={props.randomWord} letters={props.letters} />
            <Letters letters={props.letters} checkAnswer={props.checkAnswer} randomWord={props.randomWord} winningCount={props.winningCount} />
        </div>
    )
}

export default Main