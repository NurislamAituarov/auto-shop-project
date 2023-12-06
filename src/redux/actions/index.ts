import { Dispatch } from 'redux';
import { getCarItems } from '../../api/client';
import { IItemCar } from '../../types';

export const addListItemCar = (item: IItemCar[]) => ({ type: 'ADD_LIST_ITEM', payload: item });
export const addListItem = () => async (dispatch: Dispatch) => {
  getCarItems().then((items) => {
    dispatch(addListItemCar(items.data));
  });
};

export const addCar = (index: number) => ({ type: 'ADD_CAR', payload: index });
export const addPriceCar = (item: number[]) => ({ type: 'ADD_PRICE', payload: item });
export const addPopUpBackCall = (value: string) => ({ type: 'POP_UP_BACK_CALL', payload: value });
export const addBrandItem = (item: IItemCar) => ({ type: 'ADD_BRAND', payload: item });

export const addLocation = (value: string) => ({ type: 'ADD_LOCATION', payload: value });
export const fetchUserLocation = () => (dispatch: Dispatch) => {
  try {
    const successfulLookup = (position: any) => {
      const { latitude, longitude } = position.coords;
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_OPENCAGE_DATA_KEY}`,
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(addLocation(data.results[0].formatted));
        });
    };
    navigator.geolocation.getCurrentPosition(successfulLookup);
  } catch (e) {
    console.error('Лимит запросов исчерпан');
  }
};
