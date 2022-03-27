import { ReactSVGElement } from 'react';

interface ICharacteristic {
  power: string;
  petrol: string;
  speed: string;
  sec: string;
}

export interface IItemCar {
  active: boolean;
  price: string;
  name_car: string;
  url_img: string;
  characteristics: ICharacteristic;
}

export interface IItem {
  name: string;
  title: string;
}

export interface IlistCarr {
  name: string;
  svg: ReactSVGElement | any;
  price: number;
}
// reducer===========================================================

export interface IInitialState {
  selected: [];
  priceCar: number[];
  reviewsUser: IItem[];
  popUpBackCall: string;
  brandList: IlistCarr[];
}
export interface IAction {
  type: string;
  payload?: IItemCar | string | number;
}
