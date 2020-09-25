import {Navigation} from 'react-native-navigation';
import CreateContact from './CreateContact';
import TwoTabs from './TwoTabs';
import Contacts from './Contacts';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from '../store/configureStore';
import DisplayMoreInfo from './DisplayMoreInfo';

const store = configureStore();

Navigation.registerComponent(
  'CreateContact',
  () => (props) => (
    <Provider store={store}>
      <CreateContact {...props} />
    </Provider>
  ),
  () => CreateContact,
);
Navigation.registerComponent(
  'Contacts',
  () => (props) => (
    <Provider store={store}>
      <Contacts {...props} />
    </Provider>
  ),
  () => Contacts,
);
Navigation.registerComponent('DisplayMoreInfo', () => DisplayMoreInfo);

Navigation.events().registerAppLaunchedListener(async () => {
  TwoTabs();
});
