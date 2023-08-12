// Nesta pasta devem ser adicionadas as funções que farão a requisição ao backend

import axios, { AxiosResponse } from 'axios';

const apiUrl = 'http://localhost:1337/api';

export interface Product 
{
  id: number,
  name: string
  description: string
  price: number,
  category: {
      id: number,
      name: string,
      description: string|null
  },
  image: {
      id: number,
      url: string
      previewUrl: string|null
  },
  color: {
      id: number,
      name: string
  }
}

async function shareProducts(): Promise<Product[]> {
  try {
    const response: AxiosResponse<{ data: Product[] }> = await axios.get(`${apiUrl}/products`);
    return response.data.data;
  } catch (error) {
    throw new Error('Erro ao buscar produtos da API Strapi: ');
  }
}

export default shareProducts