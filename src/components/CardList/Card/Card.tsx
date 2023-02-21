import { useAppDispatch } from "../../../store/hooks";
import { MagicCard } from "../../../types/mtg-api"
import { addCard, removeCard } from "../../../store/slices/deckSlice"
import './styles.scss'

interface Props {
  card: MagicCard;
}

function CardList({card}: Props) {
  const dispatch = useAppDispatch();

  const addCardHandler = () => {
    dispatch(addCard(card));
  };
  const removeCardHandler = () => {
    dispatch(removeCard(card));
  };
  

  return (
    <div className="card">
      <img onClick={()=>addCardHandler()} className="card__image" src={card.imageUrl}/>
    </div>
  )
}

export default CardList;