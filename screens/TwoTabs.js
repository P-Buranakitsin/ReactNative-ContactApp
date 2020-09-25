import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const TwoTabs = () => {
  Promise.all([
    Icon.getImageSource('person-add-outline', 30),
    Icon.getImageSource('people-outline', 30),
  ]).then((icons) => {
    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'CreateContact',
                      options: {
                        topBar: {
                          visible: false,
                          title: {text: 'Create new contact'},
                        },
                        bottomTab: {
                          text: 'Add Contact',
                          icon: icons[0],
                          iconColor: 'skyblue',
                          selectedIconColor: 'blue',
                          selectedTextColor: 'skyblue',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      name: 'Contacts',
                      options: {
                        topBar: {
                          title: {text: 'Contacts'},
                        },
                        bottomTab: {
                          text: 'Contacts',
                          icon: icons[1],
                          iconColor: 'skyblue',
                          selectedIconColor: 'blue',
                          selectedTextColor: 'skyblue',
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  });
};

export default TwoTabs;
