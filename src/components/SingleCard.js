export default function SingleCard({ card, handleChoice }) {
  const imgClass = "w-full block border-2 border-blue rounded"

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="relative">
      <div>
        <img className={imgClass} src={card.src} alt="card front" />
        <img
          className={imgClass}
          src="/img/cover-illustration-daniel-mackey.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  )
}
