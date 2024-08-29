export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  profilePictureUrl: string;
  bio: string;
  gamesPlayed: GameEntity[];
  friends: User[];
}

export class UserEntity implements User {
  id: number;
  username: string;
  email: string;
  password: string;
  profilePictureUrl: string;
  bio: string;
  gamesPlayed: GameEntity[];
  friends: User[];

  constructor(data: Partial<User>) {
    Object.assign(this, data);
  }

  getFriendCount(): number {
    return this.friends.length;
  }

  getGameCount(): number {
    return this.gamesPlayed.length;
  }
}

export type UserCollection = UserEntity[];
