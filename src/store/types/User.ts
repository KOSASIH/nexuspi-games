export interface UserEntity {
  id: number;
  username: string;
  email: string;
  role: 'admin' | 'user';
}

export interface UserListResponse {
  users: UserEntity[];
  count: number;
}
