import { useMemo, useState } from "react";
import useFetch from "./hooks/useFetch";
import CardList from "./components/CardList/CardList";
import Loader from "./components/Loader/Loader";
import { MagicCard, Filters } from "./types/mtg-api";
import { useAppSelector } from "./store/hooks";
import FilterBar from "./components/FilterBar/FilterBar";
import Deck from "./components/Deck/Deck";

function App() {
  const [page, setPage] = useState(1);

  const filters = useAppSelector(({ filters }) => filters);

  const { data, loading, end } = useFetch(page);

  const filterCards = (cards: MagicCard[], filters: Filters) => {
    const { colors } = filters;
    const filtered = cards.filter(
      (card) =>
        !card.colors || card.colors.some((color) => colors.includes(color))
    );
    if (filtered.length < 100 && !end) setPage((prevPage) => prevPage + 1);

    return filtered;
  };

  const filteredCards = useMemo(() => {
    if (!data.length) return [];

    return filterCards(data, filters);
  }, [data, filters]);
  
  const shouldRenderLoadMoreButton = !end && !loading;

  return (
    <div className="App">
      <>
        <FilterBar />
        <Deck />
        <div className="bg-slate-900">
          {!!filteredCards.length && <CardList cards={filteredCards} />}

          {loading && <Loader />}

          {shouldRenderLoadMoreButton && (
            <button onClick={() => setPage(page + 1)} className="btn">Load more</button>
          )}
        </div>
      </>
    </div>
  );
}

export default App;
