import { IAction, IInitialState } from '../Type';

const initialState: IInitialState = {
  selected: [],
};

export default function render(state = initialState, action: IAction) {
  switch (action.type) {
    case 'ADD_CAR':
      return {
        ...state,
        selected: [...state.selected, action.payload],
      };
    case 'REMOVE_CAR':
      return {
        ...state,
        selected: state.selected.slice(0, state.selected.length - 1),
      };
    default:
      return {
        ...state,
      };
  }
}
