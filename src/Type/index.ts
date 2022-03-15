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
  characteristics: ICharacteristic;
}

export interface IItem {
  name: string;
  title: string;
}
// reducer===========================================================

export interface IInitialState {
  selected: [];
  priceCar: number[];
  reviewsUser: IItem[];
  popUpBackCall: boolean;
}
export interface IAction {
  type: string;
  payload?: IItemCar | string | number;
}
