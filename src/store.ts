import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './Reducers/reducer';

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
// export default store;

export const rootReducer = combineReducers({
  reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  // (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  composeWithDevTools(applyMiddleware(thunk)),
);
