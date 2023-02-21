export type Color = 'W' | 'U' | 'B' | 'R' | 'G';

export interface Filters {
  colors: Color[]
}

export interface MagicCard {
  id: string;
  name: string;
  cmc: number;
  colors: Color[];
  types: string[];
  imageUrl: string;
  set: string;
  rarity: string;
  flavor?: string;
  artist?: string;
  number?: string;
  power?: string;
  toughness?: string;
  multiverseid?: number;
}

export interface MagicApiResponse {
  cards: MagicCard[];
  totalCards: number;
  currentPage: number;
  totalPages: number;
}

export interface MagicQueryParams {
  set: string;
  page?: number;
  pageSize?: number;
}
