export interface Game {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  genres: string[];
  platforms: string[];
  rating: number;
  imageUrl: string;
  trailerUrl: string;
}

export class GameEntity implements Game {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  genres: string[];
  platforms: string[];
  rating: number;
  imageUrl: string;
  trailerUrl: string;

  constructor(data: Partial<Game>) {
    Object.assign(this, data);
  }

  getReleaseYear(): number {
    return this.releaseDate.getFullYear();
  }

  getGenreList(): string {
    return this.genres.join(', ');
  }

  getPlatformList(): string {
    return this.platforms.join(', ');
  }
}

export type GameCollection = GameEntity[];
