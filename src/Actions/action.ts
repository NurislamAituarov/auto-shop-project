import { IItemCar } from '../Type';

export const addCar = (item: IItemCar) => ({ type: 'ADD_CAR', payload: item });
export const removeCar = () => ({ type: 'REMOVE_CAR' });
