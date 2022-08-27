import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  greeting: 'Want some advice? Click the button below! 👇',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_GREETING_SUCCESS':
      return {
        ...state,
        greeting: action.payload.greeting,
      };
    default:
      return state;
  }
}

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}