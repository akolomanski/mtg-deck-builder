import { MagicCard } from "../../types/mtg-api";
import Card from "./Card/Card";


interface Props {
  cards: MagicCard[];
}

export default function CardList({cards}: Props) {
  return (
    <div className="flex flex-wrap">
      {cards.map((card) => <Card card={card} key={card.id} />)}
    </div>
  )
}