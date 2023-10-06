import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactReducer } from './contacts/reducer';
import { filtersReducer } from './filter/reducer';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filtersReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
