export default function SingleCard({ card }) {
  return (
    <div>
      <div>
        <img className="" src={card.src} alt="card front" />
        <img className="" src="/img/cover-illustration-daniel-mackey.png" alt="card back" />
      </div>
    </div>
  )
}
