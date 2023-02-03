import "./RandomWord.css"
import {nanoid} from 'nanoid'

function RandomWord(props){


    function displayRandomWord(){
        let word = []
        props.randomWord.forEach(letter => {
            for(let i = 0; i < props.letters.length; i++){
                if(letter === props.letters[i].letter){
                    word.push(props.letters[i])
                }
            }
        })
        
        let finalWord = []
        word.forEach(letter => {
           finalWord.push(<p 
                            key={nanoid()} 
                            className="randomWord--letter">
                                {letter.clicked ? letter.letter : "_"}
                        </p>) 
        })
        return finalWord
    }


    return(
        <div className="randomWord">
            {displayRandomWord()}
        </div>
    )
}

export default RandomWord