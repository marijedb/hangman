import "./Letters.css"
import {nanoid} from "nanoid"

function Letters(props){
    const lettersHtml = props.letters.map(letter => {
        return <p 
                    key={nanoid()} 
                    id={letter.id}
                    className={letter.clicked === false ? 
                        "letters--letter" : 
                        letter.correctAnswer === true ?
                        "letters--letter correct" :
                        "letters--letter incorrect"}
                    onClick={props.randomWord.length > 0 && props.winningCount !== 0 ? props.checkAnswer : props.doNothing}
                    >
                        {letter.letter}
                </p>
    })

    return(
        <div className="letters">{lettersHtml}</div>
    )
}

export default Letters

