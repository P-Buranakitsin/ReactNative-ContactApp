import {DELETE_CONTACT} from './actionTypes';
import {ADD_CONTACT} from './actionTypes';

export const addContact = (contactData) => {
  return {
    type: ADD_CONTACT,
    firstname: contactData.firstname,
    lastname: contactData.lastname,
    email: contactData.email,
    age: contactData.age,
    image: contactData.image,
  };
};

export const deleteContact = (key) => {
  return {
    type: DELETE_CONTACT,
    contactKey: key,
  };
};
