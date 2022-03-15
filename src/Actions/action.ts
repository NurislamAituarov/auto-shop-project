import { IItemCar } from '../Type';

export const addCar = (item: IItemCar) => ({ type: 'ADD_CAR', payload: item });
export const removeCar = () => ({ type: 'REMOVE_CAR' });
export const addPriceCar = (item: number[]) => ({ type: 'ADD_PRICE', payload: item });
export const popUpBackCall = () => ({ type: 'POP_UP_BACK_CALL' });
