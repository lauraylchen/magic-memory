import { useState } from "react";

const cardImages = [
  { "src": "/img/bulbasaur.png" },
  { "src": "/img/charmander.png" },
  { "src": "/img/eevee.png" },
  { "src": "/img/jigglypuff.png" },
  { "src": "/img/pikachu.png" },
  { "src": "/img/squirtle.png" }
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  // Shuffle
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className='max-w-4xl mx-auto my-10'>
      <h1 className="font-black text-4xl py-3">Pokemon Match</h1>
      <button
        className="btn btn-sm hover:bg-blue hover:text-yellow"
        onClick={shuffleCards}
      >
        New Game
      </button>
      <div className="grid grid-rows-3 grid-flow-col gap-3">
        {cards.map((card) => (
          <div key={card.id}>
            <div>
              <img className="" src={card.src} alt="card front" />
              <img className="" src="/img/cover-illustration-daniel-mackey.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
