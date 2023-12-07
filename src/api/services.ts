import { get } from './network';

export async function getCarItems() {
  return get(`/api/auto/`);
}
export async function getCarItem(id: string) {
  return get(`/api/auto/${id}`);
}
