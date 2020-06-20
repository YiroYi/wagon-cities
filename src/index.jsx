// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import '../assets/stylesheets/application.scss';

import citiesReducer from './reducers/cities_reducer';
import selectCityReducer from './reducers/select_city_reducer';

const reducers = combineReducers({
  cities: citiesReducer,
  selectCity: selectCityReducer
});


// internal modules
import App from './components/app';

// State and reducers

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
