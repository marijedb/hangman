import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';

function App() {

  const [allWords, setAllWords] = useState([])
  const [randomWord, setRandomWord] = useState("")

  async function getWords() {
    console.log("im here")
    const response = await fetch('https://marijedb.github.io/my-apis/English-Words/english-words.json')
    const words = await response.json()
    const wordsArray = words.words

   setAllWords(wordsArray)
  }

  function startNewGame(){
    console.log("now here")
    const randomNumber = Math.floor(Math.random() * allWords.length)
    setRandomWord(allWords[randomNumber].word)
  }

  useEffect(() => {
    
    getWords()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Navbar newGame={() => startNewGame()} />
      <Main allWords={allWords} randomWord={randomWord} />
    </div>
  );
}

export default App;
