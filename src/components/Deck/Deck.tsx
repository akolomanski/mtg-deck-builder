import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Color, Filters, MagicCard } from "../../types/mtg-api";
import { toggleColor } from "../../store/slices/filtersSlice";
import './styles.scss'
import { removeCard } from "../../store/slices/deckSlice";

export default function FilterBar() {

  const { cardCount, cards  } = useAppSelector(({ deck }) => deck);
  const dispatch = useAppDispatch();
  
  const removeCardHandler = (card: MagicCard) => {
    dispatch(removeCard(card));
  };

  return (
    <div className="deck">
      {
        Object.keys(cards).map((key) => {
          return (
            <div className="deck__card" key={'deck'+key}>
              <button onClick={()=>removeCardHandler(cards[key])}>{cardCount[key]}</button>
              <p>{cards[key].name}</p>
            </div>
          )
        })
      }
    </div>
  );
}
