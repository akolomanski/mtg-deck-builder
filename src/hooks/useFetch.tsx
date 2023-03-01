import { useEffect, useRef, useState } from "react";
import { MagicApiResponse, MagicCard } from "../types/mtg-api";


export default function useFetch(page: number) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [data, setData] = useState<MagicCard[]>([]);
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(false);

  const fetchWithTimeout = async (resource: string, timeout: number = 800) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
      signal: controller.signal,
    });
    clearTimeout(id);
    return response;
  };

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      try {
        const response = await fetchWithTimeout(
          `https://api.magicthegathering.io/v1/cards?set=RTR&page=${page}`,
          500
        )

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const result: MagicApiResponse = await response.json();
        if(result.cards.length) {
          setData((data)=>[...data, ...result.cards])
          return
        }

        setEnd(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    clearTimeout(timer.current as ReturnType<typeof setTimeout>);
    timer.current = setTimeout(() => {
      fetchCharacters();
    }, 500);
  }, [page]);

  return { data, loading, end };
}
