import "./Hangman.css"
import line1 from "../../../images/line1.png"
import line2 from "../../../images/line2.png"
import line3 from "../../../images/line3.png"
import line4 from "../../../images/line4.png"
import line5 from "../../../images/line5.png"

function Hangman(props){

    return(
        <div className="hangman">
            <div className="hangman--1"></div>
            <div className="hangman--2">
                <img className="hangman--2--img" src={line1} alt="" />
            </div>
            <div className="hangman--3"></div>
            <div className="hangman--4"></div>
            <div className={`hangman--head ${props.turnsLeft < 6 ? 'show' : "hidden"}`}></div>
            <div className={`hangman--leftarm ${props.turnsLeft < 5 ? 'show' : 'hidden'}`}>
                <img className={`hangman--leftarm--img ${props.turnsLeft < 4 ? 'show' : 'hidden'}`} src={line2} alt="" />
            </div>
            <div className={`hangman--rightarm ${props.turnsLeft < 5 ? 'show' : 'hidden'}`}>
                <img className={`hangman--rightarm--img ${props.turnsLeft < 3 ? 'show' : 'hidden'}`} src={line3} alt="" />
            </div>
            <div className={`hangman--5 ${props.turnsLeft < 5 ? 'show' : 'hidden'}`}></div>
            <div className={`hangman--6 ${props.turnsLeft < 5 ? 'show' : 'hidden'}`}></div>
            <div className="hangman--7"></div>
            <div className={`hangman--leftleg ${props.turnsLeft < 2 ? 'show' : 'hidden'}`}>
                <img className="hangman--leftleg--img" src={line4} alt="" />
            </div>
            <div className={`hangman--rightleg ${props.turnsLeft < 1 ? 'show' : 'hidden'}`}>
                <img className="hangman--rightleg--img" src={line5} alt="" />
            </div>
        </div>
    )
}

export default Hangman