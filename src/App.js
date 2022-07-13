import { useEffect, useState } from "react";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { "src": "/img/bulbasaur.png", matched: false },
  { "src": "/img/charmander.png", matched: false },
  { "src": "/img/eevee.png", matched: false },
  { "src": "/img/jigglypuff.png", matched: false },
  { "src": "/img/pikachu.png", matched: false },
  { "src": "/img/squirtle.png", matched: false }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // Shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  // Handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // Compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        resetTurn()
      }
    }
  }, [choiceOne, choiceTwo])

  // Reset choices & increase turns
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className='max-w-xl mx-auto my-10'>
      <h1 className="font-black text-4xl py-3">Pokemon Match</h1>
      <button
        className="btn btn-sm hover:bg-blue hover:text-yellow"
        onClick={shuffleCards}
      >
        New Game
      </button>
      <div className="grid grid-rows-3 grid-flow-col gap-3 mt-10">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card===choiceOne || card===choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
