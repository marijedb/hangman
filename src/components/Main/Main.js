import Score from "./Score/Score"
import Letters from "./Letters/Letters"
import RandomWord from "./RandomWord/RandomWord"
import Hangman from "./Hangman/Hangman"
import "./Main.css"

function Main(props){

    console.log(props.letters)
    // console.log(props.randomWord)
    return(
        <div className="main">
            <Score />
            <Hangman />
            <RandomWord randomWord={props.randomWord} />
            <Letters letters={props.letters} />
        </div>
    )
}

export default Main