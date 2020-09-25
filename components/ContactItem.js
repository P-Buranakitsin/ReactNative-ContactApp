import React from 'react';
import {View, TouchableHighlight, StyleSheet, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ContactItem = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.source} />
      <View style={styles.subcontainer}>
        <Text style={styles.text}>{props.firstname}</Text>
        <Text style={styles.text}>{props.lastname}</Text>
        <TouchableHighlight underlayColor="red" onPress={props.moreInfo}>
          <View>
            <Icon name="information-outline" color="red" size={30} />
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="blue" onPress={props.deleteItem}>
          <View>
            <Icon name="trash-outline" color="blue" size={30} />
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: 'stretch',
  },
  subcontainer: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 15,
  },
});

export default ContactItem;
