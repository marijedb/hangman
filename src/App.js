import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';

function App() {

  const [allWords, setAllWords] = useState([])

  async function getWords() {
    const response = await fetch('https://marijedb.github.io/my-apis/English-Words/english-words.json')
    const words = await response.json()
    const wordsArray = words.words

   setAllWords(wordsArray)
  }

  useEffect(() => {
    getWords()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Navbar />
      <Main allWords={allWords} />
    </div>
  );
}

export default App;
