import { createContext } from 'react';

export interface IUserProfile {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'user';
}
const initialState: IUserProfile = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  role: 'user'
};

export const UserContext = createContext<IUserProfile | undefined>(initialState);
