import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import {
  useEffect,
  useState,
  useRef
} from 'react';

function App() {
  const [allWords, setAllWords] = useState([])
  const [randomWord, setRandomWord] = useState([])
  const [startingLetters, setStartingLetters] = useState([])
  const [letters, setLetters] = useState([])
  const [score, setScore] = useState(6)
  const [winningCount, setWinningCount] = useState(0)


  const isFirstRender = useRef(true);
  const isFirstRender2 = useRef(true);

  async function getWords() {
    const response = await fetch('https://marijedb.github.io/my-apis/English-Words/english-words.json')
    const words = await response.json()
    const wordsArray = words.words

    setAllWords(wordsArray)
  }

  async function getStartingLetters() {
    const response = await fetch('https://marijedb.github.io/my-apis/letters/letters.json')
    const data = await response.json()

    setStartingLetters([...data.letters])
  }


  function startNewGame() {
    setLetters(startingLetters)

    const randomNumber = Math.floor(Math.random() * allWords.length)
    const word = [...allWords[randomNumber].word.toUpperCase()]

    setRandomWord(word)
  }

  function checkAnswer(event){
    if(score !== 0){
      setLetters(prevLetters => prevLetters.map(letter => {
        if(letter.id.toString() === event.target.id){
          return {
            ...letter,
            clicked: true
          } 
        } else {
          return letter
        }
      }))
    }
  }
      
function updateScore(){
  let score = 6;
  letters.forEach(letter => {
    if(letter.clicked && !letter.correctAnswer && score !== 0){
      score -= 1
    } 
  })
  checkWinningCount()
  setScore(score)
}

 function checkWinningCount(){
  let winCount = randomWord.length
  
  letters.forEach(letter => {
    if(letter.correctAnswer){
      console.log(letter)
      if(letter.clicked) {
        if(letter.correctPosition.length > 1){
          winCount -= letter.correctPosition.length
        } else {
          winCount = winCount - 1
        }
      }
    }
  })

  setWinningCount(winCount)
}

useEffect(() => {
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return;
  }
  updateScore()
  // eslint-disable-next-line react-hooks/exhaustive-deps 
}, [letters])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setLetters(startingLetters)
  }, [startingLetters])

  useEffect(() => {
    if (isFirstRender2.current) {
      isFirstRender2.current = false;
      return;
    }
    const currentWord = [...randomWord]
    let temp = []
    const newletters = startingLetters.map((letter) => {
      for (let i = 0; i < currentWord.length; i++) {
        if (letter.letter === currentWord[i]) {
          temp.push( {
            ...letter,
            correctAnswer: true,
            correctPosition: [i]
          })
        } 
      }
      return temp
    })[0]


    for(let i = 0; i < newletters.length; i++){
      if(newletters[i - 1] !== undefined && newletters[i].letter === newletters[i - 1].letter){
        newletters[i - 1].correctPosition.push(newletters[i].correctPosition)
        newletters.splice(i, 1)
        newletters[i - 1].correctPosition = newletters[i - 1].correctPosition.flat(2)
        --i
      } 
    }

    let finalLetters = []
    for(let i = 0; i < startingLetters.length; i++){
      for(let j = 0; j < newletters.length; j++){
        if(startingLetters[i].letter.includes(newletters[j].letter)){
          finalLetters.push(newletters[j])
          ++i
        } 
      }
      finalLetters.push(startingLetters[i])
    }
    setLetters(finalLetters)
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [randomWord])

  useEffect(() => {
    getWords()
    getStartingLetters()
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])

  return ( <div>
    <Navbar newGame = {() => startNewGame()} /> 
    <Main 
      allWords = {allWords} 
      randomWord = {randomWord} 
      letters = {letters} 
      checkAnswer={(e) => checkAnswer(e)}
      score={score}
      winningCount={winningCount}
    /> 
    </div>
  );
}

export default App;