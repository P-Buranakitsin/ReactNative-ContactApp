import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class DisplayMoreInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={this.props.image} />
        <View>
          <Text style={styles.infoText}> {this.props.firstname}</Text>
          <Text style={styles.infoText}> {this.props.lastname}</Text>
          <Text style={styles.infoText}> {this.props.email}</Text>
          <Text style={styles.infoText}> {this.props.age}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {width: 200, height: 200, resizeMode: 'stretch', margin: 20},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 20,
    borderWidth: 1,
    margin: 10,
    width: '100%',
  },
});
