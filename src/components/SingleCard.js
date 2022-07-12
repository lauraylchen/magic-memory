export default function SingleCard({ card }) {
  const imgClass = "w-full block border-2 border-blue rounded"

  return (
    <div className="relative">
      <div>
        <img className={imgClass} src={card.src} alt="card front" />
        <img
          className={imgClass}
          src="/img/cover-illustration-daniel-mackey.png"
          alt="card back"
        />
      </div>
    </div>
  )
}
