import { MagicCard } from "../../types/mtg-api";
import Card from "./Card/Card";
import './styles.scss'

interface Props {
  cards: MagicCard[];
}

export default function CardList({cards}: Props) {
  return (
    <div className="card-list">
      {cards.map((card) => <Card card={card} key={card.id} />)}
    </div>
  )
}