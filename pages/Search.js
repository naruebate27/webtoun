'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

export default class Search extends Component {
  static navigationOptions = {
    title: 'Property Finder',
  };
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london'
    };
    <TextInput
  underlineColorAndroid={'transparent'}
  style={styles.searchInput}
  value={this.state.searchString}
  placeholder='Search via name or postcode'/>
  };
  _onSearchTextChanged = (event) => {
    console.log('_onSearchTextChanged');
    this.setState({ searchString: event.nativeEvent.text });
    console.log('Current: '+this.state.searchString+', Next: '+event.nativeEvent.text);
  };
  static navigationOptions = {
    title: 'Property Finder',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Search for Fiction to read!
        </Text>
        <Text style={styles.description}>
          Search by Name.
        </Text>
      <TextInput
        underlineColorAndroid={'transparent'}
        style={styles.searchInput}
        placeholder='Search via name or postcode'/>
      <Button
        onPress={() => {}}
        color='#48BBEC'
        title='Go'
      />
      <Image source={require('../image/house.png')} style={styles.image}/>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    description: {
      marginBottom: 20,
      fontSize: 18,
      textAlign: 'center',
      color: '#656565'
    },
    container: {
      padding: 30,
      marginTop: 65,
      alignItems: 'center'
    },
    image: {
        width: 217,
        height: 138,
      },
      flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
      },
      searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
      },
  });