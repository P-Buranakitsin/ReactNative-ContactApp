import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import ContactItem from '../components/ContactItem';
import {Navigation} from 'react-native-navigation';
import {deleteContact} from '../store/actions/actionCreator';

class Contacts extends Component {
  testHandler = () => {
    console.log(this.props.contacts);
  };

  moreInfoHandler = (info) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'DisplayMoreInfo',
        options: {
          topBar: {
            title: {
              text: `More Information`,
            },
          },
        },
        passProps: {
          firstname: info.firstname,
          lastname: info.lastname,
          email: info.email,
          age: info.age,
          image: info.image,
        },
      },
    });
  };

  deleteItemHandler = (key) => {
    this.props.onDeleteContact(key);
  };

  renderItem = (data) => {
    return (
      <ContactItem
        firstname={data.item.firstname}
        lastname={data.item.lastname}
        source={data.item.image}
        moreInfo={() => this.moreInfoHandler(data.item)}
        deleteItem={() => this.deleteItemHandler(data.item.key)}
      />
    );
  };

  render() {
    let output;
    if (this.props.contacts === null || this.props.contacts.length <= 0) {
      output = <Text style={styles.noContactText}> No Contact </Text>;
    } else {
      output = (
        <FlatList
          style={styles.list}
          data={this.props.contacts}
          renderItem={this.renderItem}
        />
      );
    }

    return (
      <View style={styles.container}>
        {output}
        <Button title="Test" onPress={this.testHandler} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contactReducer.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (key) => dispatch(deleteContact(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noContactText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  list: {width: '100%'},
});
