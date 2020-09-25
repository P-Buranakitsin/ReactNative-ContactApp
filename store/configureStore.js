import {combineReducers, createStore} from 'redux';
import contactReducer from './reducers/contactReducer';

const rootReducer = combineReducers({
  contactReducer: contactReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
