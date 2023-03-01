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
    <div className="m-1 w-[223px] h-[310px]">
      <img onClick={()=>addCardHandler()} className="hover:brightness-50 rounded-xl" src={card.imageUrl}/>
    </div>
  )
}

export default CardList;