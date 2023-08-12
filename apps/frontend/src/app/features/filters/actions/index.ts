// Nesta pasta devem ser adicionadas as funções que farão a requisição ao backend
import axios, { AxiosResponse } from 'axios';

const apiUrl = 'http://localhost:1337/api';

export interface Category
{
    name: string,
    description: string,
    products: []
  }

export interface Color
{
    name: string, 
    
}

export async function shareCategories(): Promise<Category[]> {
  try {
    const response: AxiosResponse<{ data: Category[] }> = await axios.get(`${apiUrl}/categories`);
    return response.data.data;
  } catch (error) {
    throw new Error('Erro ao buscar produtos da API Strapi: ');
  }
}


export async function shareColors(): Promise<Color[]> {
  try {
    const response: AxiosResponse<{ data: Color[] }> = await axios.get(`${apiUrl}/colors`);
    return response.data.data;
  } catch (error) {
    throw new Error('Erro ao buscar produtos da API Strapi: ');
  }
}

