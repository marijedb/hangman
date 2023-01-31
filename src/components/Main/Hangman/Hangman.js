import "./Hangman.css"
import line1 from "../../../images/line1.png"
import line2 from "../../../images/line2.png"
import line3 from "../../../images/line3.png"
import line4 from "../../../images/line4.png"
import line5 from "../../../images/line5.png"

function Hangman(){
    return(
        <div className="hangman">
            <div className="hangman--1"></div>
            <div className="hangman--2">
                <img className="hangman--2--img" src={line1} alt="" />
            </div>
            <div className="hangman--3"></div>
            <div className="hangman--4"></div>
            <div className="hangman--head"></div>
            <div className="hangman--leftarm">
                <img className="hangman--leftarm--img" src={line2} alt="" />
            </div>
            <div className="hangman--rightarm">
                <img className="hangman--rightarm--img" src={line3} alt="" />
            </div>
            <div className="hangman--5"></div>
            <div className="hangman--6"></div>
            <div className="hangman--7"></div>
            <div className="hangman--leftleg">
                <img className="hangman--leftleg--img" src={line4} alt="" />
            </div>
            <div className="hangman--rightleg">
                <img className="hangman--rightleg--img" src={line5} alt="" />
            </div>
        </div>
    )
}

export default Hangman