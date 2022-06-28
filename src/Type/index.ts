import { ReactSVGElement } from 'react';

interface ICharacteristic {
  power: string;
  petrol: string;
  speed: string;
  sec: string;
}

export interface IItemCar {
  active: boolean | string;
  price: string;
  name_car: string;
  url_img: string;
  characteristics: ICharacteristic;
  id: number;
}

export interface IItem {
  name: string;
  title: string;
}

export interface IListCarr {
  name: string;
  svg: ReactSVGElement | any;
  price: number;
}
// reducer===========================================================

export interface IInitialState {
  listItems: IItemCar[];
  selected: [];
  priceCar: number[];
  reviewsUser: IItem[];
  popUpBackCall: string;
  brandList: IListCarr[];
  location: string;
}
export interface IAction {
  type: string;
  payload?: IItemCar | string | number;
}
