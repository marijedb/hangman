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
            <RandomWord randomWord={props.randomWord} letters={props.letters}/>
            <Letters letters={props.letters} checkAnswer={props.checkAnswer} randomWord={props.randomWord}/>
        </div>
    )
}

export default Main