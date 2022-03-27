import { IItemCar, IlistCarr } from '../Type';

export const addCar = (item: IItemCar) => ({ type: 'ADD_CAR', payload: item });
export const removeCar = () => ({ type: 'REMOVE_CAR' });
export const addPriceCar = (item: number[]) => ({ type: 'ADD_PRICE', payload: item });
export const popUpBackCall = (value: string) => ({ type: 'POP_UP_BACK_CALL', payload: value });
export const addBrandItem = (item: IlistCarr) => ({ type: 'ADD_BRAND', payload: item });
