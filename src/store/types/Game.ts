export interface GameEntity {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
}

export interface GameListResponse {
  games: GameEntity[];
  count: number;
}
