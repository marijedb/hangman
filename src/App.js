import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import {
  useEffect,
  useState,
  useRef
} from 'react';

function App() {
  console.log("app")
  const [allWords, setAllWords] = useState([])
  const [randomWord, setRandomWord] = useState([])
  const [startingLetters, setStartingLetters] = useState([])
  const [letters, setLetters] = useState([])

  const isFirstRender = useRef(true);
  const isFirstRender2 = useRef(true);

  async function getWords() {
    console.log("get words")
    const response = await fetch('https://marijedb.github.io/my-apis/English-Words/english-words.json')
    const words = await response.json()
    const wordsArray = words.words

    setAllWords(wordsArray)
  }

  async function getStartingLetters() {
    console.log("starting letters")
    const response = await fetch('https://marijedb.github.io/my-apis/letters/letters.json')
    const data = await response.json()

    setStartingLetters([...data.letters])
  }

  // async function getLetters(){
  //   console.log("get letters")
  //   const response = await fetch('https://marijedb.github.io/my-apis/letters/letters.json')
  //   const data = await response.json()
  //   const allLetters = data.letters

  //   setLetters(allLetters)
  // }


  function startNewGame() {
    console.log("Start new game")
    setLetters(startingLetters)

    const randomNumber = Math.floor(Math.random() * allWords.length)
    const word = allWords[randomNumber].word

    setRandomWord(word)

  }

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
    console.log("useeffect after randomword")
    const currentWord = [...randomWord]
    console.log(currentWord)
    let temp = []
    const newletters = startingLetters.map((letter) => {
      // console.log(temp)
      for (let i = 0; i < currentWord.length; i++) {
        if (letter.letter.toLowerCase() === currentWord[i]) {
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
    setLetters(newletters)
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [randomWord])

  useEffect(() => {
    console.log("first useEffect, get words, get letters")
    getWords()
    getStartingLetters()
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])

  return ( <div>
    <Navbar newGame = {() => startNewGame()} /> 
    <Main allWords = {allWords} randomWord = {randomWord} letters = {letters} /> 
    </div>
  );
}

export default App;