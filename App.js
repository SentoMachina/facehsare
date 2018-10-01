/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import FBSDK, {LoginManager} from 'react-native-fbsdk';

export default class App extends Component {
  _fbAuth(){
    LoginManager.logInWithReadPermissions(['public_profile']).then(function(result){
      if(result.isCancelled){
        console.log('Log in was cancelled');
      }
      else{
        console.log('Login was a success' + result.grantedPermissions.toString());
      }
    }, function(error){
      console.log('An error occured: '+ error);
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._fbAuth()}>
        <Text>Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
