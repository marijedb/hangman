import "./RandomWord.css"

function RandomWord(props){

    function displayWord(){
        let wordHtml = []
        if(props.randomWord.length > 0) {
            for(let i = 0; i < props.randomWord.length ; i++){
                wordHtml.push(<p className="randomWord--letter">_</p>)
            }
        }
        return wordHtml
    }


    return(
        <div className="randomWord">
            {displayWord()}
        </div>
    )
}

export default RandomWord