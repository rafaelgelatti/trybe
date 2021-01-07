import clickReducer from './reducers';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from '@testing-library/react';
import { createStore, combineReducers } from 'redux';

const renderWithRedux = (
  component,
  { initialSate, store = createStore(combineReducers({ clickReducer }), initialSate) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export default renderWithRedux;