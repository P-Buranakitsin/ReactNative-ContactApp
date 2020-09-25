import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {addContact} from '../store/actions/actionCreator';

const placeholder = require('../../assests/placeholder.png');

class CreateContact extends Component {
  state = {
    firstname: null,
    lastname: null,
    email: null,
    age: null,
    image: placeholder,
  };

  testHandler = () => {
    console.log(this.state);
  };

  selectImageHandler = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (result) => {
      if (result.didCancel) {
        console.log('User cancelled image');
      } else if (result.error) {
        console.log('Image picker error');
      } else {
        this.setState({
          image: {uri: result.uri},
        });
      }
    });
  };

  firstNameTextHandler = (text) => {
    this.setState({firstname: text});
  };

  lastNameTextHandler = (text) => {
    this.setState({lastname: text});
  };

  emailTextHandler = (text) => {
    this.setState({email: text});
  };

  ageTextHandler = (text) => {
    this.setState({age: text});
  };

  addContactButtonHandler = () => {
    if (
      this.state.firstname === null &&
      this.state.lastname === null &&
      this.state.email === null &&
      this.state.age === null
    ) {
      return;
    }
    this.props.onAddContact({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      age: this.state.age,
      image: this.state.image,
    });
    this.setStateToInitialValues();
  };

  cancelButtonHandler = () => {
    this.setStateToInitialValues();
  };

  setStateToInitialValues = () => {
    this.setState({
      firstname: null,
      lastname: null,
      email: null,
      age: null,
      image: placeholder,
    });
  };

  render() {
    let imageSource;
    if (this.state.image !== null) {
      imageSource = this.state.image;
    } else {
      imageSource = placeholder;
    }

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageSource} />
        </View>
        <Text style={styles.titleText}> Add new contact </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={this.firstNameTextHandler}
          placeholder="First Name"
          value={this.state.firstname}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.lastNameTextHandler}
          placeholder="Last Name"
          value={this.state.lastname}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.emailTextHandler}
          placeholder="Email"
          value={this.state.email}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={this.ageTextHandler}
          placeholder="Age"
          value={this.state.age}
        />

        <View style={styles.buttonContainer}>
          <Button title="Ok" onPress={this.addContactButtonHandler} />
          <Button title="Photo" onPress={this.selectImageHandler} />
          <Button title="Cancel" onPress={this.cancelButtonHandler} />
        </View>
        <Button title="Test" onPress={this.testHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddContact: (contact) => dispatch(addContact(contact)),
  };
};

export default connect(null, mapDispatchToProps)(CreateContact);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    borderColor: 'black',
    borderWidth: 1,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  textInput: {
    borderColor: 'skyblue',
    borderWidth: 1,
    width: 300,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});
