interface ICharacteristic {
  power: string;
  petrol: string;
  speed: string;
  sec: string;
}

export interface IItemCar {
  active: boolean;
  price: string;
  characteristics: ICharacteristic;
}

// reducer===========================================================

export interface IInitialState {
  selected: [];
}
export interface IAction {
  type: string;
  payload?: IItemCar | string | number;
}
