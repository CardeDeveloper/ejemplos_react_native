import React, { Component } from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View, 
  Button,
  Alert
} from 'react-native';

import Login from './src/loginForm';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  HelloWorld()  {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.warn('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.warn('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.warn('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello</Text>
        <Text style={styles.instructions}>To get startedjs</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button onPress={this.HelloWorld} title="clic"></Button>
        <Login></Login>
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
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
