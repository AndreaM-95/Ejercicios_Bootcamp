import { useState, useEffect } from "react";
import Board from "../../Components/Board/Board";
import Footer from "../../Components/Footer/footer";
const emojiList = [...'💻💼🔎✅📚⏰🤝☕'];

export default function Exercises() {
  //Guardará las imágenesg aleatorias
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setselectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);

  useEffect(()=>{
    //Se pone dos veces la lista ya que necesitamos las parejas
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlocks(shuffledEmojiList.map( (emoji, i) => ({ index: i, emoji, flipped: false}) ));
  }, []);

  //Pondrá la posición de las cartas aleatoriamente
  const shuffleArray = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleMemoClick = memoBlock => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);
    if(selectedMemoBlock === null) {
      setselectedMemoBlock(memoBlock);
    } else if(selectedMemoBlock.emoji === memoBlock.emoji) {
      setselectedMemoBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setselectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  }

  return (
    <div>
      <h1 className='text-center w-full text-white font-bold text-5xl my-7'>Encuentra las parejas</h1>
      <Board memoBlocks={shuffledMemoBlocks} animating={animating}  handleMemoClick={handleMemoClick} />
      <Footer/>
    </div>
  );
}