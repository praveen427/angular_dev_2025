export interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: 'admin' | 'user';
  email: string;
  phone?: string;
  gender?: 'male' | 'female' | 'other';
  address?: string;
  password: string; 
}
