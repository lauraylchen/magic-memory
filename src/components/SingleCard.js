import './SingleCard.css'

export default function SingleCard({ card, handleChoice, flipped }) {
  const imgClass = "w-full block border-2 border-blue rounded "

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="relative">
      <div className={flipped ? "flip" : ""}>
        <img className={imgClass + "front-card"} src={card.src} alt="card front" />
        <img
          className={imgClass + "bg-blue"}
          src="/img/cover-illustration-daniel-mackey.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
