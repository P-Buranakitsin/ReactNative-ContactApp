import {act} from 'react-test-renderer';
import {ADD_CONTACT, DELETE_CONTACT} from '../actions/actionTypes';

const initialState = {
  contacts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: state.contacts.concat({
          firstname: action.firstname,
          lastname: action.lastname,
          email: action.email,
          age: action.age,
          image: action.image,
          key: Math.random().toString(),
        }),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.key !== action.contactKey,
        ),
      };
    default:
      return state;
  }
};

export default reducer;
