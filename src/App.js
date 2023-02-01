import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';

function App() {

  const [allWords, setAllWords] = useState([])
  const [randomWord, setRandomWord] = useState([])
  const [letters, setLetters] = useState([])

  async function getWords() {
    console.log("get words")
    const response = await fetch('https://marijedb.github.io/my-apis/English-Words/english-words.json')
    const words = await response.json()
    const wordsArray = words.words

   setAllWords(wordsArray)
  }

  async function getLetters(){
    console.log("get letters")
    const response = await fetch('https://marijedb.github.io/my-apis/letters/letters.json')
    const data = await response.json()
    const allLetters = data.letters
    
    setLetters(allLetters)
  }


  function startNewGame(){
    console.log("Start new game")
    getLetters()

    const randomNumber = Math.floor(Math.random() * allWords.length)
    const word = allWords[randomNumber].word

    setRandomWord(word)
    
  }

  // useEffect(() => {
  //   const temp = letters.map(letter => {
  //     let test = [...randomWord].map(singleLetter => {
  //       if(letter.letter.toLowerCase() === singleLetter) {
  //         return {...letter, correctAnswer: !letter.correctAnswer}
  //       } 
  //     })
  //     return test
  //   })

  //   console.log("temp", temp)

  //   // console.log("useEffect set letters cos of randomword")
  //   // setLetters(prevLetters => prevLetters.map(letter => {

  //   // })
  //   // )
  // }, [randomWord])

  useEffect(() => {    
    console.log("first useEffect, get words, get letters")
    getWords()
    getLetters()
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, [])

  return (
    <div>
      <Navbar newGame={() => startNewGame()} />
      <Main allWords={allWords} randomWord={randomWord} letters={letters} />
    </div>
  );
}

export default App;
