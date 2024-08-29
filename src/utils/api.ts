import axios, { AxiosInstance } from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getGames = async (): Promise<GameListResponse> => {
  const response = await api.get('/games');
  return response.data;
};

export const getGameById = async (id: number): Promise<GameEntity> => {
  const response = await api.get(`/games/${id}`);
  return response.data;
};

export const getUsers = async (): Promise<UserListResponse> => {
  const response = await api.get('/users');
  return response.data;
};

export const getUserById = async (id: number): Promise<UserEntity> => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};
