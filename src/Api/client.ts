import { httpClient } from './httpClient';

export async function getCarItems() {
  return httpClient.get('/api/auto/');
}
