import "./Score.css"

function Score(props){


    function getScoreHtml(){
        if(props.randomWord.length === 0) {
            return <p className="score--startgame">Start a new game!</p>
        } else {
            if(props.turnsLeft !== 0){
                if(props.winningCount !== 0){
                    return <p className="score--score">{props.turnsLeft} chances left</p>
                } else {
                    return <div>
                                <p className="score--gamewon">YOU WON!</p>
                                <p className="score--score">With {props.turnsLeft} chances left</p>
                            </div>
                }
            } else {
                return <div>
                            <p className="score--gameover">Game Over!</p>
                            <p className="score--word">The word was: {props.randomWord}</p> 
                            <p className="score--tryagain">Start a new game to try again</p>
                        </div>
            }
        }
    }


    return(
        <div className="score">
            {getScoreHtml()}
        </div>
    )
}

export default Score