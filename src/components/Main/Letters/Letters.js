import "./Letters.css"
import {nanoid} from "nanoid"

function Letters(props){

    const lettersHtml = props.letters.map(letter => {
        return <p key={nanoid()} className="letters--letter">{letter.letter}</p>
    })

    return(
        <div className="letters">{lettersHtml}</div>
    )
}

export default Letters