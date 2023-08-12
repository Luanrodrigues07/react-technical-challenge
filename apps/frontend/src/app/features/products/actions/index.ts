// Nesta pasta devem ser adicionadas as funções que farão a requisição ao backend

import { Category, Color } from '@/features/filters/actions';
import axios, { AxiosResponse } from 'axios';

const apiUrl = 'http://localhost:1337/api';

export interface Product 
{
  id: number,
  name: string
  description: string
  price: number,
  category: Category,
  image: {
      id: number,
      url: string
      previewUrl: string|null
  },
  color: Color
}

async function shareProducts() {
  const response: AxiosResponse<{ data: Product[] }> = await axios.get(`${apiUrl}/products`);
  return response.data.data;

}

export default shareProducts