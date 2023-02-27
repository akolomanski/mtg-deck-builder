import { useAppDispatch } from "../../../store/hooks";
import { MagicCard } from "../../../types/mtg-api"
import { addCard, removeCard } from "../../../store/slices/deckSlice"

interface Props {
  card: MagicCard;
}

function CardList({card}: Props) {
  const dispatch = useAppDispatch();

  const addCardHandler = () => {
    dispatch(addCard(card));
  };

  return (
    <div className="p-1">
      <img onClick={()=>addCardHandler()} className="card__image hover:brightness-50 rounded-xl" src={card.imageUrl}/>
    </div>
  )
}

export default CardList;