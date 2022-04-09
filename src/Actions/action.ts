import { IItemCar } from '../Type';

export const addListItem = (item: IItemCar[]) => ({ type: 'ADD_LIST_ITEM', payload: item });
// export const addCar = (item: IItemCar) => ({ type: 'ADD_CAR', payload: item });
export const addCar = (index: number) => ({ type: 'ADD_CAR', payload: index });
// export const removeCar = () => ({ type: 'REMOVE_CAR' });

export const addPriceCar = (item: number[]) => ({ type: 'ADD_PRICE', payload: item });
export const popUpBackCall = (value: string) => ({ type: 'POP_UP_BACK_CALL', payload: value });
export const addBrandItem = (item: IItemCar) => ({ type: 'ADD_BRAND', payload: item });

export const addLocation = (value: string) => ({ type: 'ADD_LOCATION', payload: value });
