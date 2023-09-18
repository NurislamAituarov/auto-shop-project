import { httpClient } from './httpClient';

export async function getCarItems() {
  return httpClient.get(`${process.env.REACT_APP_API_BASE_URL}/api/auto/`);
}
export async function getCarItem(id: string) {
  return httpClient.get(`${process.env.REACT_APP_API_BASE_URL}/api/auto/${id}`);
}
